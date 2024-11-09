import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import TeamDetails from './teamsdetail';
import Gameslist from "./Gameslist";
const Games = () => {
  return (
    <div>
    

      <div className="mt-16  sm:mt-14">
        {/* Nested route */}
        <Routes>
          <Route path="/" element={<Gameslist/>}/>
          <Route path="games" element={<Gameslist/>}/>
          <Route path="team" element={<TeamDetails />}/>
        </Routes>
      </div>
    </div>
  );
};

export default Games
