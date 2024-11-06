import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import authRoutes, { authenticateJWT } from './routes/auth.js'
import directorRoutes from './routes/director.js'
// import directorRoutes from './routes/events.js'
import { users } from './utils/mongo.js'

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

app.use('/director', directorRoutes)
// app.use('/events', eventsRoutes)

app.listen(5000, () => {
	console.log('Server running on http://localhost:5000')
})

function rename(obj, old_key, new_key) {
	obj[new_key] = obj[old_key]
	delete obj[old_key]
}