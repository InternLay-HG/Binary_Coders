import  { OAuth2Client} from 'google-auth-library'
import dotenv from 'dotenv';
dotenv.config();

const client = new OAuth2Client(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	'http://localhost:5000/auth/google/callback'
)

export {client}