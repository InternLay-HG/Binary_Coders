import 'dotenv/config'
import mongoose from 'mongoose'

await mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection.db
const users = db.collection('users')

export { users, db as default }
