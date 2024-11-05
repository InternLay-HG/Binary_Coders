import React, { useState, useEffect } from 'react';

const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    text: '',
    start: '',
    end: '',
    visibleTo: '',
  });

  // Fetch events from the server
  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/events/getevents');
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/events/addevents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newEvent,
          visibleTo: newEvent.visibleTo.split(','),
        }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      // Clear the form and refresh events
      setNewEvent({ text: '', start: '', end: '', visibleTo: '' });
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  // Delete an event by ID
  const deleteEvent = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/events/delevents/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h1>Event Manager</h1>
      <form onSubmit={addEvent}>
        <input
          type="text"
          name="text"
          value={newEvent.text}
          onChange={handleInputChange}
          placeholder="Event Title"
          required
        />
        <input
          type="datetime-local"
          name="start"
          value={newEvent.start}
          onChange={handleInputChange}
          required
        />
        <input
          type="datetime-local"
          name="end"
          value={newEvent.end}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="visibleTo"
          value={newEvent.visibleTo}
          onChange={handleInputChange}
          placeholder="Visible To (comma-separated)"
          required
        />
        <button type="submit">Add Event</button>
      </form>

      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.text}</strong> | {new Date(event.start).toLocaleString()} -{' '}
            {new Date(event.end).toLocaleString()} | Visible to: {event.visibleTo.join(', ')}
            <button onClick={() => deleteEvent(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;
