import { NavLink } from 'react-router-dom'
import apiUrl from '../../../config'
import { useAuth } from '../../App'

function Home() {
	const user = useAuth()
	console.table(user)

	function googleLogin(e) {
		e.preventDefault()
		const role = e.target.elements.role?.value
		window.location.href = `${apiUrl}/auth/google?role=${role}`
	}

	return (
		<>
			<h1>Landing page</h1>
			<nav>
				<ul>
					<li>
						<NavLink to='/' exact>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/login'>Login</NavLink>
					</li>
					<li>
						<NavLink to='/register'>Register</NavLink>
					</li>
					<li>
						<NavLink to='/fan'>Fan</NavLink>
					</li>
					<li>
						<NavLink to='/athlete'>Athlete</NavLink>
					</li>
					<li>
						<NavLink to='/coach'>Coach</NavLink>
					</li>
					<li>
						<NavLink to='/director'>Director</NavLink>
					</li>
				</ul>
			</nav>

			<form onSubmit={googleLogin}>
				<div>
					<input type='radio' id='fan' value='fan' name='role' defaultChecked />
					<label htmlFor='fan'>Fan</label>
					<input type='radio' id='athlete' value='athlete' name='role' />
					<label htmlFor='athlete'>Athlete</label>
					<input type='radio' id='coach' value='coach' name='role' />
					<label htmlFor='coach'>Coach</label>
					<input type='radio' id='director' value='director' name='role' />
					<label htmlFor='director'>Director</label>
				</div>
				<br />
				<button>Login with Google</button>
			</form>
			{user?.id ? <p>Welcome, {user.name}!</p> : <p>Plz login to continue</p>}
		</>
	)
}

export default Home
