import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import apiUrl from '../config'
import Athlete from './pages/Athlete/AthletePage'
import Coach from './pages/Coach/CoachPage'
import Director from './pages/Director/SportDirectorPage'
import Fan from './pages/Fan/FanPage'
import Home from './pages/Home/Home'
import SignIn from './pages/Home/SignIn'
import SignUp from './pages/Home/SignUp'
import Unauthorized from './pages/Unauthorized'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const App = () => {
	const [user, setUser] = useState({})

	// get user data
	useEffect(() => {
		;(async () => {
			const response = await fetch(`${apiUrl}/getuser`, {
				credentials: 'include',
				secure: window.location.hostname !== 'localhost',
				sameSite: 'None',
			})

			const data = await response.json()

			if (!response.ok) {
				console.error(data.message)
				return
			}

			setUser(data)
		})()
	}, [])

	return (
		<AuthContext.Provider value={user}>
			<Router>
				<Routes>
					{/* redo */}
					<>
						<Route path='fan/*' element={<Fan />} />
						<Route
							path='athlete/*'
							element={user?.isAthlete === 'true' ? <Athlete /> : <Navigate to='/unauthorized' />}
						/>
						<Route
							path='coach/*'
							element={user?.isCoach === 'true' ? <Coach /> : <Navigate to='/unauthorized' />}
						/>
						<Route
							path='director/*'
							element=<Director /> 
						/>
						<Route path='unauthorized/*' element={<Unauthorized />} />
					</>
					<Route path='/*' element={<Home />} />
					<Route path='/login' element={<SignIn />} />
					<Route path='/register' element={<SignUp />} />
				</Routes>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
