import 'dotenv/config'
import express from 'express'
import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'
import { users } from '../utils/mongo.js'

const router = express.Router()
const client = new OAuth2Client(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	`${process.env.BACKEND_URL}/auth/google/callback`
)

// Route for Google OAuth Login
router.get('/google', (req, res) => {
	const authUrl = client.generateAuthUrl({
		scope: ['profile', 'email'],
		redirect_uri: `${process.env.BACKEND_URL}/auth/google/callback`,
		state: JSON.stringify({ role: req.query.role }),
	})

	console.log('redirect')

	res.redirect(authUrl)
})

// Google OAuth Callback Route
router.get('/google/callback', async (req, res) => {
	try {
		console.log('in redirect')

		const { role } = JSON.parse(req.query.state)

		// autheticate user and get profile
		const { tokens } = await client.getToken(req.query.code)
		client.setCredentials(tokens)
		const payload = (
			await client.verifyIdToken({
				idToken: tokens.id_token,
				audience: process.env.GOOGLE_CLIENT_ID,
			})
		).getPayload()

		// only for iiit ranchi users
		if (!isValidEmailDomain(payload.email)) {
			return res.status(403).send('Only users from IIIT Ranchi can sign in')
		}

		let user = await users.findById(payload.sub)

		if (!user) {
			// Add new user record in db
			user = await users.create({
				_id: payload.sub,
				name: payload.name,
				email: payload.email,
				picture: payload.picture,
			})
		}

		let setRole

		if (role == 'fan') {
			setRole = 'fan'
		} else if (role == 'player') {
			if (user.isPlayer === 'true') {
				setRole = 'player'
			} else {
				setRole = 'player_pending'
				user.picture = 'requested'
			}
		} else if (role == 'coach') {
			if (user.isCoach === 'true') {
				setRole = 'coach'
			} else {
				setRole = 'coach_pending'
				user.isCoach = 'requested'
			}
		} else if (role == 'admin') {
			if (user.isAdmin === 'true') {
				setRole = 'admin'
			} else {
				setRole = 'admin_pending'
				user.isAdmin = 'requested'
			}
		}
		await user.save()
		console.log(user)

		// Generate JWT token for the user
		const token = jwt.sign(
			{
				id: payload.sub,
				role: setRole,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		)

		// Set JWT token as an HTTP-only cookie
		res.cookie('jwt', token, {
			httpOnly: true,
			secure: false,
			sameSite: 'strict',
			maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		})

		console.log('login done')

		res.redirect(`${process.env.FRONTEND_URL}/`)
	} catch (error) {
		res.redirect(`${process.env.BACKEND_URL}/google`)
	}
})

// Middleware to protect routes
function authenticateJWT(req, res, next) {
	const token = req.cookies.jwt

	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
			if (err) return res.status(403).json({ message: 'Invalid token' })

			req.id = user.id
			next()
		})
	} else {
		res.status(401).json({ message: 'Plz login' })
	}
}

function isValidEmailDomain(email) {
	return email.split('@')[1].split('.')[0] === 'iiitranchi'
}

export { authenticateJWT, router as default }
