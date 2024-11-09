import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import apiUrl from '../config'
import GoogleOneTap from './components/GoogleOneTap'
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
	const [isLoggedIn, setIsLoggedIn] = useState(true)

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
				console.log(data.message)
				setIsLoggedIn(false)
				return
			}

			setUser(data)
		})()
	}, [isLoggedIn])

	return (
		<AuthContext.Provider value={user}>
			<GoogleOAuthProvider clientId='649235921586-5sqr0t85hvfthsro8e4t3m5mav1h10tf.apps.googleusercontent.com'>
				<Router>
					<Routes>
						{/* redo */}
						<>
							<Route path='fan/*' element={<Fan />} />
							<Route path='athlete/*' element={user?.isAthlete === 'true' ? <Athlete /> : <Navigate to='/unauthorized' />} />
							<Route path='coach/*' element={user?.isCoach === 'true' ? <Coach /> : <Navigate to='/unauthorized' />} />
							<Route path='director/*' element={user?.isDirector === 'true' ? <Director /> : <Navigate to='/unauthorized' />} />
							<Route path='unauthorized/*' element={<Unauthorized />} />
						</>
						<Route path='/*' element={<Home />} />
						<Route path='/login' element={<SignIn />} />
						<Route path='/register' element={<SignUp />} />
					</Routes>
				</Router>

				{!isLoggedIn && <GoogleOneTap setIsLoggedIn={setIsLoggedIn} />}
			</GoogleOAuthProvider>
		</AuthContext.Provider>
	)
}

export default App
