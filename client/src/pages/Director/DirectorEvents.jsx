import moment from 'moment'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const Events = () => {
  const [events, setEvents] = useState([])

	const fetchEvents = async () => {
		const response = await fetch('http://localhost:5000/getEvents')
		const data = await response.json()
		setEvents([...data])
	}

	useEffect(() => {
		fetchEvents()
	}, [])

	const onSelectEvent = (event) => {
		alert(`Selected event: ${event.title}`)
	}

	return (
		<>
		<div className='m-2'>
			<p>Calendar</p>
			<Calendar
				events={events}
				onSelectEvent={onSelectEvent}
				views={['month', 'agenda']}
				localizer={localizer}
				style={{ height: 350 }}
			/></div>
		</>
	)
}

export default Events