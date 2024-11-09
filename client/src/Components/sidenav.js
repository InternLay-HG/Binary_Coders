import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isActive, toggleSidebar }) => {
  const divStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
  };

  return (
    <aside
      className={`fixed top-12 left-0 h-screen transition-all duration-500 ease-in-out ${
        isActive ? "w-[150px]" : "w-[70px]"
      } bg-blue-950 text-white flex flex-col items-center justify-between p-5 z-50`}
    >
      <nav className="flex flex-col items-start gap-8 mt-16 mx-auto p-0">
        <Link
          to="/profile"
          className={`menu-item flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 cursor-pointer ${
            isActive ? "hover:bg-sky-500" : ""
          }`}
        >
          <i
            className={`bx bx-user text-3xl ${
              !isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
            }`}
          ></i>
          <span
            className={`text-base transition-all duration-700 ease-in-out transform ${
              isActive ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-4"
            }`}
            style={divStyle}
          >
            Profile
          </span>
        </Link>
        <Link
          to="/events"
          className={`menu-item flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 cursor-pointer ${
            isActive ? "hover:bg-sky-500" : ""
          }`}
        >
          <i
            className={`bx bx-calendar-event text-3xl ${
              !isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
            }`}
          ></i>
          <span
            className={`text-base transition-all duration-700 ease-in-out transform ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={divStyle}
          >
            Events
          </span>
        </Link>
        <Link
          to="/members"
          className={`menu-item flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 cursor-pointer ${
            isActive ? "hover:bg-sky-500" : ""
          }`}
        >
          <i
            className={`bx bx-message-square-dots text-3xl ${
              !isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
            }`}
          ></i>
          <span
            className={`text-base transition-all duration-700 ease-in-out transform ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={divStyle}
          >
            Members
          </span>
        </Link>
        <Link
          to="/budget"
          className={`menu-item flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 cursor-pointer ${
            isActive ? "hover:bg-sky-500" : ""
          }`}
        >
          <i
            className={`bx bx-wallet text-3xl ${
              !isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
            }`}
          ></i>
          <span
            className={`text-base transition-all duration-700 ease-in-out transform ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={divStyle}
          >
            Budget
          </span>
        </Link>
        <Link
          to="/updates"
          className={`menu-item flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 cursor-pointer ${
            isActive ? "hover:bg-sky-500" : ""
          }`}
        >
          <i
            className={`bx bx-bell text-3xl ${
              !isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
            }`}
          ></i>
          <span
            className={`text-base transition-all duration-700 ease-in-out transform ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={divStyle}
          >
            Updates
          </span>
        </Link>
        <Link
          to="/logout"
          className={`menu-item mt-18 flex items-center w-full space-x-3 p-1 rounded-md transition duration-300 cursor-pointer ${
            isActive ? "hover:bg-sky-500" : ""
          }`}
        >
          <i
            className={`bx bx-log-out text-3xl ${
              !isActive ? "hover:bg-sky-500 p-1 rounded-md" : ""
            }`}
          ></i>
          <span
            className={`text-base transition-all duration-700 ease-in-out transform ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={divStyle}
          >
            Logout
          </span>
        </Link>

        {/* Repeat for other links... */}

      </nav>
      
      <div
        className="toggle-menu absolute top-6 -right-3 p-2 rounded-full shadow-lg bg-blue-950 border border-sky-100 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
        onClick={toggleSidebar}
      >
        <i
          className={`bx ${
            isActive ? "bxs-left-arrow" : "bxs-right-arrow"
          } text-white text-lg transition-transform duration-500 ease-in-out transform ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
        ></i>
      </div>
    </aside>
  );
};

export default Sidebar;
