import moment from 'moment'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import apiUrl from '../../../config'

const localizer = momentLocalizer(moment)

const Events = () => {
	const [events, setEvents] = useState([])

	const fetchEvents = async () => {
		const response = await fetch(`${apiUrl}/getEvents`)
		const data = await response.json()
		setEvents([...data])
	}

	useEffect(() => {
		fetchEvents()
	}, [])

	const onSelectEvent = (event) => {
		alert(`${event.title} \n${event.venue} \n${event.description}`)
	}

	return (
		<>
			<p>Calendar</p>
			<Calendar
				events={events}
				onSelectEvent={onSelectEvent}
				views={['month', 'agenda']}
				localizer={localizer}
				style={{ height: 350 }}
			/>
		</>
	)
}

export default Events
