// src/components/EventForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventForm = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    start: '',
    end: '',
    visibleTo: ['athlete', 'fan'],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', eventData);
    // You'd typically send this data to your backend here.
    navigate('/allevents');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={eventData.title}
        onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
        required
      />
      <input
        type="datetime-local"
        value={eventData.start}
        onChange={(e) => setEventData({ ...eventData, start: e.target.value })}
        required
      />
      <input
        type="datetime-local"
        value={eventData.end}
        onChange={(e) => setEventData({ ...eventData, end: e.target.value })}
        required
      />
      <select
        multiple
        value={eventData.visibleTo}
        onChange={(e) =>
          setEventData({
            ...eventData,
            visibleTo: [...e.target.selectedOptions].map((o) => o.value),
          })
        }
      >
        <option value="athlete">Athlete</option>
        <option value="fan">Fan</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
