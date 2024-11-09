import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App'
import { GoogleOAuthProvider, useGoogleOneTapLogin } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<App />
	// </StrictMode>
)
