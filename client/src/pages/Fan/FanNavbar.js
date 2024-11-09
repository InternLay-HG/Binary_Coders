import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarWithSidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const divStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
  };

  const MenuItem = ({ to, iconClass, label }) => (
    <Link
      to={to}
      className={`menu-item flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 cursor-pointer ${
        isActive ? "hover:bg-sky-500" : ""
      }`}
    >
      <i
        className={`${iconClass} text-3xl ${
          !isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
        }`}
      ></i>
      <span
        className={`text-base transition-opacity duration-300 transform ${
          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
        style={divStyle}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-950 text-white w-full flex items-center justify-between px-5 py-3 fixed top-0 left-0 z-50">
        <div className="text-2xl font-bold">Logo</div>
        <button
          className="text-white text-lg p-2 rounded-full hover:bg-gray-800"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className={`bx ${isActive ? "bxs-left-arrow" : "bxs-right-arrow"}`}></i>
        </button>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-12 left-0 h-screen transition-all duration-500 ease-in-out ${
          isActive ? "w-[180px]" : "w-[80px]"
        } bg-blue-950 text-white flex flex-col items-center justify-between p-5 z-50`}
      >
        <nav className="flex flex-col items-start gap-8 mt-16 mx-auto p-0">
          <MenuItem to="games" iconClass="bx bx-user" label="Profile" />
          <MenuItem to="events" iconClass="bx bx-calendar-event" label="Events" />
          {/* Add more MenuItem components as needed */}
        </nav>

        <button
          className="toggle-menu absolute top-6 -right-3 p-2 rounded-full shadow-lg bg-blue-950 border border-sky-100 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i
            className={`bx ${
              isActive ? "bxs-left-arrow" : "bxs-right-arrow"
            } text-white text-lg transition-transform duration-500 ease-in-out transform ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
      </aside>
    </div>
  );
};

export default NavbarWithSidebar;
