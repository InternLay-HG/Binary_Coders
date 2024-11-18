import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../Components/sidenav';
import Navbar from '../Components/Navbar';
import Profile from './CoachProfile/Profile';  
import Events from './CoachEvents/Events';     
import Members from './CoachTeam/Members';     
import Budget from './CoachBudget/Budget';     
import Updates from './CoachUpdates/Updates';     
import ContextWrapper from '../context/ContextWrapper';

const Coach_Profile = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    return (
        <Router>
            <div className="flex w-full h-screen">
                {/* Sidebar */}
                <Sidebar isActive={isSidebarActive} toggleSidebar={toggleSidebar} />

                <div 
                    className="flex-1 h-full transition-all duration-500" 
                    style={{ marginLeft: isSidebarActive ? '138px' : '60px', marginTop: '36px' }}
                >
                    {/* Navbar */}
                    <Navbar />

                    {/* Main Content */}
                    <main className="p-0 pt-5">
                        <Routes>
                            <Route path="/profile" element={<Profile sidebarWidth={isSidebarActive ? "10px" : "10px"} />} />
                            <Route path="/members/*" element={<Members sidebarWidth={isSidebarActive ? "10px" : "10px"}/>} />
                            <Route path="/events" element={<ContextWrapper><Events sidebarWidth={isSidebarActive ? "42px" : "20px"}/></ContextWrapper>} />
                            <Route path="/budget/*" element={<Budget sidebarWidth={isSidebarActive ? "10px" : "10px"}/>} />
                            <Route path="/update" element={<Updates sidebarWidth={isSidebarActive ? "42px" : "20px"}/>} />
                            <Route path="/" element={<Navigate to="/profile" />} /> {/* Default route */}
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default Coach_Profile;
