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
		title: String,
		content: String,
		date: { type: Date, default: Date.now },
	})
)

// ideally we should store the ids of the players and their names
const teams = mongoose.model(
	'teams',
	new mongoose.Schema({
		teamName: String,
		sport: String,
		coach: String,
		captain: String,
		players: [String],
	})
)

const events = mongoose.model(
	'events',
	new mongoose.Schema({
		title: String,
		description: String,
		venue: String,
		venue: String,
		start: Date,
		end: Date,
	})
)

const budgets = mongoose.model(
	'budgets',
	new mongoose.Schema({
		fund: Number,
		coach: String,
		transactionId: {
			type: String,
			default: '',
		},
		status: {
			type: String,
			default: 'pending',
		},
		date: {
			type: Date,
			default: Date.now,
		},
		description: String,
	})
)

export { events, teams, updates, users, budgets }
