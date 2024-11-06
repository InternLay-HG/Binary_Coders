import { useEffect, useState } from 'react'

const Games = () => {
	const [teams, setTeams] = useState([])

	const fetchTeams = async () => {
		const response = await fetch('http://localhost:5000/getTeams')
		const data = await response.json()
		setTeams([...data])
	}

	useEffect(() => {
		fetchTeams()
	}, [])

	return (
		<>
			<h1>All Teams</h1>
			{teams?.map((team, i) => (
				<TeamDetails team={team} key={i} />
			))}
		</>
	)
}

const TeamDetails = ({ team }) => {
	return (
		<div>
			<h1>{team.teamName}</h1>
			{team.sport} . {team.coach}
			<h3>Players:</h3>
			<strong>{team.captain}</strong>
			{team.players.map((player, index) => (
				<p key={index}>{player}</p>
			))}
			<br />
		</div>
	)
}

export default Games
