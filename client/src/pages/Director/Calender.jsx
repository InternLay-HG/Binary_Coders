import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarComponent from '../../components/CalenderComponent';
import { useUser } from '../../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const handleAddEventClick = () => {
    navigate('/events');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user.role === 'coach' || user.role === 'director' ? (
        <button onClick={handleAddEventClick}>Add New Event</button>
      ) : null}
      <CalendarComponent
        events={events}
        onSelectEvent={(event) => console.log('Event selected:', event)}
        onDoubleClickEvent={() => {}}
      />
    </div>
  );
};

export default Dashboard;
