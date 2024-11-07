import React from 'react'
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
      <div class="grid grid-cols-4 grid-flow-row gap-4">
        <div className='grid grid-cols-subgrid gap-4 row-span-2'><div>02</div>
        <div>03</div></div>
        
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
      </div>
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
