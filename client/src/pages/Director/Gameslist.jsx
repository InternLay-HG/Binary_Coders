import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
const gameslist = () => {
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();
  
    const fetchTeams = async () => {
      const response = await fetch('http://localhost:5000/getTeams');
      const data = await response.json();
      setTeams([...data]);
    };
  
    useEffect(() => {
      fetchTeams();
    }, []);
  
    const handleTeamClick = (team) => {
      navigate("team", { state: { team } });
    };
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {teams.map((team, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => handleTeamClick(team)}
          >
            <div className="box-border h-32 w-32 border-2 flex items-center justify-center">
              {team.teamName}
            </div>
            <div className="h-6 w-32 box-border border-2 justify-center flex">
              {team.sport}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default gameslist