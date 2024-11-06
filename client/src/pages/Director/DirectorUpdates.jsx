import { useEffect, useState } from 'react'

const Updates = () => {
	const [updates, setUpdates] = useState([])

	const fetchUpdates = async () => {
		const response = await fetch('http://localhost:5000/getUpdates')
		const data = await response.json()
		setUpdates([...data])
	}

	useEffect(() => {
		fetchUpdates()
	}, [])

	const addUpdate = async (e) => {
		e.preventDefault()
		const newUpdate = e.target.elements.newUpdate.value

		await fetch('http://localhost:5000/addUpdate', {
			method: 'POST',
			headers: { 'Content-Type': 'text/plain' },
			body: newUpdate,
		})

		fetchUpdates()
	}

	return (
		<>
			<form onSubmit={addUpdate}>
				<label>
					<textarea id='newUpdate' placeholder='Add an update...' />
				</label>
				<button>Go</button>
			</form>

			{updates?.map((item, i) => (
				<div key={i}>
					{item.content}: {new Date(item.date).toLocaleDateString('en-CA')}
				</div>
			))}
		</>
	)
}

export default Updates
