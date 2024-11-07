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
		const { title, content } = e.target.elements

		console.log(title.value, content.value)

		await fetch('http://localhost:5000/addUpdate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: title.value,
				content: content.value,
			}),
		})

		fetchUpdates()
	}

	return (
		<>
			<form onSubmit={addUpdate}>
				<input type='text' id='title' placeholder='post title' />
				<br />
				<textarea id='content' placeholder='Add an update...' />
				<button>Go</button>
			</form>

			<h1>All updates:</h1>
			<br />

			{updates?.map((item, i) => (
				<div key={i}>
					<p>
						{item.title}: {new Date(item.date).toLocaleDateString('en-CA')}
					</p>
					{item.content}
					<br />
					<br />
				</div>
			))}
		</>
	)
}

export default Updates
