import { GoogleLogin } from '@react-oauth/google'
import apiUrl from '../../config'

function GoogleOneTap({ setIsLoggedIn }) {
	return (
		<div class='invisible '>
			<GoogleLogin
				class='invisible '
				onSuccess={async (response) => {
					await fetch(`${apiUrl}/auth/google-one-tap`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ credential: response.credential }),
						credentials: 'include',
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
