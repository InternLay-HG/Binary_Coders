import 'dotenv/config'
import mongoose from 'mongoose'

await mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection.db

const users = mongoose.model(
	'users',
	new mongoose.Schema({
		_id: { type: String, required: true },
		name: String,
		// password: String,
		email: String,
		picture: String,
		isFan: { type: String, default: 'true' },
		isAthlete: { type: String, default: 'true' },
		isCoach: { type: String, default: 'true' },
		isDirector: { type: String, default: 'true' },
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
		start: Date,
		end: Date,
		teams: [String],
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
