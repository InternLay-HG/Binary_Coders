import express from 'express'
import { Events, updates } from '../utils/mongo.js'
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

// Get all events
router.get('/getevents', async (req, res) => {
  try {
      const eventList = await Events.find();
      res.json(eventList);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

  
  // Add a new event
  router.post('/addevents', async (req, res) => {
    const { text, start, end, visibleTo } = req.body;
    console.log('Received event:', { text, start, end, visibleTo });

  try {
    const newEvent = await Events.create({
      text,
      start,
      end,
      visibleTo,
    });
    res.status(201).json(newEvent) 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


  // Delete an event by ID
  router.delete('/delevents/:id', async (req, res) => {
    try {
        const event = await Events.findById(req.params.id); 

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Instead of event.remove(), use deleteOne for better compatibility
        await event.deleteOne(); 
        res.json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



export default router