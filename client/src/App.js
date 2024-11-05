import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Athlete from './pages/Athlete/AthletePage'
import Coach from './pages/Coach/CoachPage'
import Director from './pages/Director/SportDirectorPage'
import Fan from './pages/Fan/FanPage'
import Unauthorized from './pages/Unauthorized'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const App = () => {
	const [user, setUser] = useState({})

	// get user data
	useEffect(() => {
		;(async () => {
			const response = await fetch('http://localhost:5000/getuser', {
				credentials: 'include',
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
					
				<Route path='/' element={<Home />} />
					{user?.id && (
						<>
							<Route path='fan/*' element={<Fan />} />
							<Route path='athlete/*' element={user.isAthlete === 'true' ? <Athlete /> : <Navigate to='/unauthorized' />} />
							<Route path='coach/*' element={user.isCoach === 'true' ? <Coach /> : <Navigate to='/unauthorized' />} />
							<Route path='director/*' element={user.isDirector === 'true' ? <Director /> : <Navigate to='/unauthorized' />} />
							<Route path='unauthorized/*' element={<Unauthorized />} />
						</>
					)}
				</Routes>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
