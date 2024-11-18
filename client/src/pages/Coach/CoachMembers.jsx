import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

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

const Students = () => {
  console.log('Students');
  return (
      <div className='px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {[...Array(8)].map((_, index) => (
              <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                  <img
                      className="w-full h-48 object-cover"
                      src="https://via.placeholder.com/300"
                      alt="Student"
                  />
                  <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">Student Name</h3>
                      <p className="text-gray-600 text-sm mb-4">Brief description or bio goes here.</p>
                      <div className="flex flex-col justify-center gap-2">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                              Profile
                          </button>
                          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                              Add to Team
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  );
};

const Team = ({ sidebarWidth }) => {
  return (
    <div>
      Team
    </div>
  )
};

export default Members;
