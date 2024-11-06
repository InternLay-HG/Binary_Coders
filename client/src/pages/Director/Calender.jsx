import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarComponent from '../../components/CalenderComponent';
import { useUser } from '../../context/UserContext';

const Dashboard = () => {
  // const { user } = useUser();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/director/getevents');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEventClick = () => {
    navigate('/director/events/allevents'); // Navigate to the correct path
  };

  return (
    <div className='ml-3'>
      {/* {user?.role === 'coach' || user?.role === 'director' ? (
        <button onClick={handleAddEventClick}>Add New Event</button>
      ) : null}*/}
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mb-3 px-5 py-2.5 ' onClick={handleAddEventClick}>Add New Event</button>
      <CalendarComponent
        events={events}
        onSelectEvent={(event) => console.log('Event selected:', event)}
        onDoubleClickEvent={() => {}}
      /> 
    </div>
  );
};

export default Dashboard;
