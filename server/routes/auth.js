import 'dotenv/config'
import express from 'express'
import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'
import { users } from '../mongo.js'

const router = express.Router()
const client = new OAuth2Client(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	'http://localhost:5000/auth/google/callback'
)

// Route for Google OAuth Login
router.get('/google', (req, res) => {
	const authUrl = client.generateAuthUrl({
		scope: ['profile', 'email'],
		redirect_uri: `http://localhost:5000/auth/google/callback`
	})
	res.redirect(authUrl)
})

// Google OAuth Callback Route
router.get('/google/callback', async (req, res) => {
	try {
		// autheticate user and get profile
		const { tokens } = await client.getToken(req.query.code)
		client.setCredentials(tokens)
		const payload = (
			await client.verifyIdToken({
				idToken: tokens.id_token,
				audience: process.env.GOOGLE_CLIENT_ID
			})
		).getPayload()

		// only for iiit ranchi users
		if (!isValidEmailDomain(payload.email)) {
			return res.status(403).send('Only users from IIIT Ranchi can sign in')
		}

		const existingUser = await users.findOne({ _id: payload.sub })

		if (!existingUser) {
			// Add new user record in db
			await users.insertOne({
				_id: payload.sub,
				name: payload.name,
				email: payload.email,
				picture: payload.picture
			})
		}

		// Generate JWT token for the user
		const token = jwt.sign({ id: payload.sub }, process.env.JWT_SECRET, {
			expiresIn: '30d'
		})

		// Set JWT token as an HTTP-only cookie
		res.cookie('jwt', token, {
			httpOnly: true,
			secure: false,
			sameSite: 'strict'
		})

		res.redirect(`${process.env.FRONTEND_URL}/dashboard`)
	} catch (error) {
		console.error('Error during Google authentication:', error)
		res.status(500).json({ error: 'Internal Server Error' })
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

export default router
export { authenticateJWT }
