import React, { useState } from "react";
import { Link } from "react-router-dom";

const DirNavbar = () => {
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
      className={`menu-item flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 ease-in-out cursor-pointer ${
        isActive ? "hover:bg-sky-500" : ""
      }`}
    >
      <i
        className={`${iconClass} text-3xl transition-transform duration-300 ease-in-out ${
          isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
        }`}
      ></i>
      <span
        className={`text-base transition-all duration-500 ease-in-out transform ${
          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
        style={divStyle}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <div className="flex">
      {/* Navbar */}
      <nav className="bg-gray-950 text-white w-full flex items-center justify-between px-5 py-3 fixed top-0 left-0 z-50 shadow-lg">
        <div className="text-2xl font-bold">Logo</div>
        <button
          className="text-white text-lg p-2 rounded-full hover:bg-gray-800 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className={`bx ${isActive ? "bxs-left-arrow" : "bxs-right-arrow"}`}></i>
        </button>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen transform transition-all duration-500 ease-in-out ${
          isActive ? "w-[220px]" : "w-[80px]"
        } bg-blue-950 text-white flex flex-col items-center justify-start py-16 z-40 shadow-lg`}
      >
        <nav className="flex flex-col items-start gap-8 mt-16 mx-auto w-full p-3">
          <MenuItem to="events" iconClass="bx bx-calendar-event" label="Events" />
          <MenuItem to="games" iconClass="bx bx-user" label="Profile" />
          <MenuItem to="budgets" iconClass="bx bx-wallet" label="Budgets" />
          <MenuItem to="updates" iconClass="bx bx-refresh" label="Updates" />
          <MenuItem to="/" iconClass="bx bx-log-out" label="Logout" />
        </nav>

        {/* Toggle Button */}
        <button
          className={`toggle-menu absolute top-16 transition-transform duration-500 ease-in-out transform ${
            isActive ? "left-[220px]" : "left-[80px]"
          } p-2 rounded-full shadow-lg bg-blue-950 border border-sky-100 cursor-pointer hover:scale-105`}
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

      {/* Main Content */}
      <main
        className={`flex-1 ml-auto transition-all duration-500 ease-in-out ${
          isActive ? "ml-[220px]" : "ml-[80px]"
        }`}
      >
        {/* Content goes here */}
      </main>
    </div>
  );
};

export default DirNavbar;
