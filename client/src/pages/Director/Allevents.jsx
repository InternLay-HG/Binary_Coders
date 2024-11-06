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
      const res = await fetch('http://localhost:5000/director/getevents');
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
      const res = await fetch('http://localhost:5000/director/addevents', {
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
      const res = await fetch(`http://localhost:5000/director/delevents/${id}`, {
        method: 'DELETE',  // This makes a DELETE request to the backend
      });
  
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);  // Error handling if the response is not okay (not in the 200-299 range)
      }
  
      fetchEvents();  // Assuming this is a function that refreshes your event list after deletion
    } catch (error) {
      console.error('Error deleting event:', error);  // Log any error that occurs
    }
  };
  

  return (
    <div className='ml-3 flex flex-col'>
      <h1 >Event Manager</h1>
      <form onSubmit={addEvent}>
        <input
        className='bg-gray-500 block p-2.5 w-full text-sm text-white rounded-lg border border-gray-300'
          type="text"
          name="text"
          value={newEvent.text}
          onChange={handleInputChange}
          placeholder="Event Title"
          required
        />
        <div className='flex '>
        <input
        className='bg-gray-500 block p-1 text-sm text-white rounded-lg border border-gray-300'
          type="datetime-local"
          name="start"
          value={newEvent.start}
          onChange={handleInputChange}
          required
        />
        <input
         className='bg-gray-500 block p-1 text-sm text-white rounded-lg border border-gray-300'
          type="datetime-local"
          name="end"
          value={newEvent.end}
          onChange={handleInputChange}
          required
        />
        <input
         className='bg-gray-500 block p-1 text-sm text-white rounded-lg border border-gray-300'
          type="text"
          name="visibleTo"
          value={newEvent.visibleTo}
          onChange={handleInputChange}
          placeholder="Visible To (comma-separated)"
          required
        />
        <button className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm ml-3 px-5 py-2.5 ' type="submit">Add Event</button>
        </div>
      </form>

      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.text}</strong> | {new Date(event.start).toLocaleString()} -{' '}
            {new Date(event.end).toLocaleString()} | Visible to: {event.visibleTo.join(', ')}
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm ml-3 my-2 px-5 py-1" type="submit"  onClick={() => deleteEvent(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;
