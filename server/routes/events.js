import express from 'express'
import { updates } from '../utils/mongo.js'

const router = express.Router()

// Routes

// Get all events
app.get('/getevents', async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Add a new event
  app.post('/addevents', async (req, res) => {
    const { text, start, end, visibleTo } = req.body;
  
    const event = new Event({
      text,
      start,
      end,
      visibleTo,
    });
  
    try {
      const newEvent = await event.save();
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete an event by ID
  app.delete('/delevents/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      await event.remove();
      res.json({ message: 'Event deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export default router