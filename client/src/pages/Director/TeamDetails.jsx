import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TeamDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const team = location.state?.team;

  if (!team) {
    // Redirect if no team data is found
    navigate('/');
    return null;
  }

  return (
    <div className="p-4">
    <div class="font-sans flex flex-col items-center bg-gray-500 p-5">
  <div class="bg-gray-400 border border-gray-300 rounded-lg p-5 text-center w-72 mb-5">
   <img alt="Placeholder image for coach" src="https://storage.googleapis.com/a1aa/image/tpFMqJLoo0aLLJCN5a7GMyXCf9UiXLMHqlnmN4Ifaxf39PeOB.jpg" class="rounded-full w-24 h-24 bg-gray-200 mx-auto"/>
   <h2 class="mt-3 mb-1 text-2xl text-gray-800">{team.coach}</h2>
   <p class="text-gray-500 text-base">Contact Info</p>
  </div>
  <div class="w-full max-w-lg">
   <div class="bg-gray-400 border border-gray-300 rounded-lg flex justify-between items-center p-3 mb-2">
    <p class="text-lg text-gray-800"><strong>Captain:</strong> {team.captain}</p>
    <i class="fas fa-info-circle text-gray-500"></i>
   </div>
   <div class="bg-gray-400 border border-gray-300 rounded-lg flex justify-between items-center p-3 mb-2">
    <p class="text-lg text-gray-800"><strong>Team:</strong> {team.teamName}</p>
    <i class="fas fa-info-circle text-gray-500"></i>
   </div>
   <div class="bg-gray-400 border border-gray-300 rounded-lg flex justify-between items-center p-3 mb-2">
    <p class="text-lg text-gray-800"><strong>Players:</strong></p>
    <i class="fas fa-info-circle text-gray-500"></i>
   </div>
   {team.players.map((player, index) => (
    <div class="bg-gray-400 border border-gray-300 rounded-lg flex justify-between items-center p-3 mb-2">
    <p key={index} class="text-lg text-gray-800">{player}</p>
    <i class="fas fa-info-circle text-gray-500"></i>
   </div>
        ))}
        <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
  
  </div>
 </div>
    </div> 
  );
};

export default TeamDetails;