import express from 'express'
import { updates } from '../utils/mongo.js'

const router = express.Router()

router.post('/addUpdate', async (req, res) => {
	const newUpdate = req.body
	console.log(newUpdate)
	await updates.create({ text: newUpdate })
	res.sendStatus(200)
})

router.get('/getUpdates', async (req, res) => {
	const allUpdates = await updates.find()
	res.json(allUpdates)
})

export default router
