import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Athlete from './pages/Athlete/AthletePage';
import Coach from './pages/Coach/CoachPage';
import Director from './pages/Director/SportDirectorPage';
import Fan from './pages/Fan/FanPage';
import Unauthorized from './pages/Unauthorized';
import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const App = () => {
    const [user, setUser] = useState(null);

    // Fetch user data
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:5000/getuser', {
                    credentials: 'include',
                });

                const data = await response.json();

                if (response.ok) {
                    setUser(data);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={user}>
            <Router>
                <Routes>
                    {/* Redirect root to SignUp */}
                    <Route path="/" element={<Navigate replace to="signup" />} />

                    {/* Public routes */}
                    <Route path="signin" element={!user ? <SignIn /> : <Navigate to="/fan" />} />
                    <Route path="signup" element={!user ? <SignUp /> : <Navigate to="/fan" />} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                    {/* Protected routes */}
                    {user && (
                        <>
                            <Route path="fan/*" element={<Fan />} />
                            <Route path="athlete/*" element={user.isAthlete === 'true' ? <Athlete /> : <Navigate to="/unauthorized" />} />
                            <Route path="coach/*" element={user.isCoach === 'true' ? <Coach /> : <Navigate to="/unauthorized" />} />
                            <Route path="director/*" element={user.isDirector === 'true' ? <Director /> : <Navigate to="/unauthorized" />} />
                        </>
                    )}
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
