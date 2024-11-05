import 'dotenv/config'
import mongoose from 'mongoose'

await mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
const db = mongoose.connection.db

const users = mongoose.model(
	'users',
	new mongoose.Schema({
		_id: { type: String, required: true },
		name: String,
		email: String,
		picture: String,
		isAthlete: { type: String, default: 'false' },
		isCoach: { type: String, default: 'false' },
		isDirector: { type: String, default: 'false' },
	})
)

const updates = mongoose.model(
	'updates',
	new mongoose.Schema({
		text: String,
		date: { type: Date, default: Date.now },
	})
)

export { db as default, updates, users }
