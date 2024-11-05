import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

const CalendarComponent = ({ events, onSelectEvent, onDoubleClickEvent }) => {
  return (
    <>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectEvent={onSelectEvent}
      onDoubleClickEvent={onDoubleClickEvent}
    />

    </>
  );
};

export default CalendarComponent