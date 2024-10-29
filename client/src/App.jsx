import React, { useEffect, useState } from 'react'

const Dashboard = () => {
	const [user, setUser] = useState({})

	useEffect(() => {
		;(async () => {
			const response = await fetch('http://localhost:5000/getuser', {
				credentials: 'include'
			})

			const data = await response.json()

			if (!response.ok) {
				console.error(data.message)
				return
			}

			console.log(data)
			setUser(data)
		})()
	}, [])

	function googleLogin() {
		window.location.href = 'http://localhost:5000/auth/google'
	}

	// not working
	// function logout() {
	// 	const cookie = new Cookies()
	// 	cookie.remove('jwt')
	// }

	return (
		<>
			<h1>Dashboard</h1>
			{user?.id ? <p>Welcome, {user.name}!</p> : <p>Plz login to continue</p>}
			<button onClick={googleLogin}>Login with Google</button>
			{/* <button onClick={logout}>Logout</button> */}
		</>
	)
}

export default Dashboard
