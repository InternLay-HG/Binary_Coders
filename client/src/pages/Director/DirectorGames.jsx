import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import TeamDetails from './TeamDetails';
import Gameslist from "./Gameslist";

const Games = () => {
  return (
    <div className='bg-gray-500 min-h-screen'>
      <div className="pt-5 mt-16 sm:mt-14">
        <Routes>
          <Route path="/" element={<Gameslist />} />
          <Route path="games" element={<Gameslist />} />
          <Route path="team" element={<TeamDetails />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Games;