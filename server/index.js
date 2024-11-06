import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import authRoutes, { authenticateJWT } from './routes/auth.js'
import { events, teams, updates, users } from './utils/mongo.js'

const app = express()
app.use(cookieParser())
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
)
app.use(express.text())

app.use('/auth', authRoutes)

// authenticate user and then search in mongo
app.get('/getuser', authenticateJWT, async (req, res) => {
	let user = await users.findById(req.id)

	if (!user) return res.status(404).json({ error: 'User deleted' })

	user = { ...user._doc }
	rename(user, '_id', 'id')
	res.json(user)
})

app.post('/addUpdate', async (req, res) => {
	const newUpdate = req.body
	console.log(newUpdate)
	await updates.create({ text: newUpdate })
	res.sendStatus(200)
})

app.get('/getUpdates', async (req, res) => {
	const allUpdates = await updates.find()
	res.json(allUpdates)
})

app.get('/getTeams', async (req, res) => {
	const allteams = await teams.find()
	res.json(allteams)
})

app.get('/getEvents', async (req, res) => {
	const allevents = await events.find()
	res.json(allevents)
})

app.listen(5000, () => {
	console.log('Server running on http://localhost:5000')
})

function rename(obj, old_key, new_key) {
	obj[new_key] = obj[old_key]
	delete obj[old_key]
}
