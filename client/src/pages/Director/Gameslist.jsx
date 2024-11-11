import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketballImage from "../../Assets/Cricket_Image.png";
import SoccerImage from "../../Assets/Football_Image.png";
import ChessImage from "../../Assets/Chess_Image.png"
import Table_TennisImage from "../../Assets/Table_tennis_image.png"
import VollyballImage from "../../Assets/Vollyball_Image.png"
import CricketImage from "../../Assets/Cricket_Image.png"
import CarromImage from "../../Assets/Carrom_Image.png"
import BadmintonImage from "../../Assets/Badmintton_Image.png"

const GamesList = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  // Mapping sport types to imported image variables
  const sportImages = {
    Basketball: BasketballImage,
    Soccer: SoccerImage,
    Chess: ChessImage,
    Table_Tennis:Table_TennisImage,
    Vollyball:VollyballImage,
    Cricket:CricketImage,
    Carrom:CarromImage,
    Badmintton:BadmintonImage,
  };

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
              <img
                src={sportImages[team.sport] || "https://via.placeholder.com/150"} // Fallback image if sport is not found
                className="h-28 w-28 object-cover"
                alt={`${team.sport} image`}
              />
            </div>
            <div className="h-6 w-32 text-white box-border border-2 justify-center flex">
              {team.sport}
            </div>
            <div className="h-6 w-32 text-white box-border border-2 justify-center flex">
              {team.teamName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesList;
