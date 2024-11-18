import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Students from './Students';
import Team from './Team';

const Members = ({ sidebarWidth }) => {
  const divStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
  };

  return (
    <div
      style={{
        marginLeft: `${sidebarWidth}`,
        width: `calc(100% - ${sidebarWidth})`,
      }}
    >
      {/* Navbar component that remains consistent */}
      <nav className="bg-blue-400 text-white w-full flex items-center justify-between px-5 py-3 left-0">
        <ul className="flex gap-10">
          <Link to="/members/students" className="text-xl font-bold text-blue-950" style={divStyle}>
            Students
          </Link>
          <Link to="/members/team" className="text-xl font-bold text-blue-950" style={divStyle}>
            Team
          </Link>
        </ul>
      </nav>

      {/* Main content area with child routes */}
      <main className="p-0 pt-5">
        <Routes>
          <Route index element={<Students />} />
          <Route path="students" element={<Students />} />
          <Route path="team" element={<Team />} />
        </Routes>
      </main>
    </div>
  );
};

export default Members;
