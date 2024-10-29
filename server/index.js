import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import authRoutes, { authenticateJWT } from './routes/auth.js'
import 'dotenv/config'
import { users } from './utils/mongo.js'

const app = express()
app.use(cookieParser())
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true
	})
)

app.use('/auth', authRoutes)

// authenticate user and then search in mongo
app.get('/getuser', authenticateJWT, async (req, res) => {
	const user = await users.findOne({ _id: req.id })

	if (!user) {
		return res.status(404).send('User deleted')
	}

	rename(user, '_id', 'id')

	res.json(user)
})

app.listen(5000, () => {
	console.log('Server running on http://localhost:5000')
})

function rename(obj, old_key, new_key) {
	obj[new_key] = obj[old_key]
	delete obj[old_key]
}
