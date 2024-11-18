import { GoogleLogin } from '@react-oauth/google'
import apiUrl from '../../config'

function GoogleOneTap({ setIsLoggedIn }) {
	return (
		<div className='invisible '>
			<GoogleLogin
				onSuccess={async (response) => {
					await fetch(`${apiUrl}/auth/google-one-tap`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ credential: response.credential }),
						credentials: 'include',
						redirect: 'follow',
					})
					setIsLoggedIn(true)
				}}
				onError={() => {
					console.log('Login Failed')
				}}
				useOneTap
				// auto_select
				hosted_domain='iiitranchi.ac.in'
			/>
		</div>
	)
}

export default GoogleOneTap