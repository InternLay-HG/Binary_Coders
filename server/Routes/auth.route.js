import { Router } from "express";
import { User } from "../models/user.model.js";
import { asyncHandler,ApiResponse } from "../helper/index.js";
import { client } from "../helper/auth.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const router=Router()

// Route for Google OAuth Login
router.get('/google', (req, res) => {
	const authUrl = client.generateAuthUrl({
		scope: ['profile', 'email'],
		redirect_uri: `http://localhost:5000/auth/google/callback`,
        state: JSON.stringify({ role: req.query.role }),

	})
	res.redirect(authUrl)
})


const RegisterWithGoogle = asyncHandler(async (req, res) => {
	try{ 
  
	  const { role } = JSON.parse(req.query.state);

	  const { tokens } = await client.getToken(req.query.code)
	  client.setCredentials(tokens)
	  const payload = (
			  await client.verifyIdToken({
				  idToken: tokens.id_token,
				  audience: process.env.GOOGLE_CLIENT_ID
			  })
		  ).getPayload()
	 
	// Validate email
	const emailRegex = /^[a-zA-Z0-9._%+-]+@iiitranchi\.ac\.in$/;
	 if (!emailRegex.test(payload.email)) {
	   throw new ApiResponse(400, {}, "Invalid Email address");
	 }
  
	  let user = await User.findOne({ email: payload.email})
	  if (!user) {
		user=	await  User.create({
		  name: payload.name,
		  email: payload.email,
		  picture: payload.picture,
		})
		  }
	  if (!user) {
		throw new ApiResponse(500, {}, "User creation failed");
	  }

	 // Map roles to boolean fields
	 const roleMapping = {
	  fan: "isFan",
	  athlete: "isAthlete",
	  coach: "isCoach",
	  admin: "isAdmin",
	  };
	// Set the role if valid
	const roleField = roleMapping[role];
	if (roleField) {
	  user[roleField] = true;
	} else {
	  throw new ApiResponse(400, {}, "Invalid role provided");
	}
	await user.save();

     console.log("the user is ",user)
	const token = jwt.sign(
	  {
		id: user._id,
		role: role,
	  },
	  process.env.REFRESH_TOKEN_SECRET,
	  { expiresIn: '30d' }
	)
  
	// Set JWT token as an HTTP-only cookie
	res.cookie('jwt', token, {
	  httpOnly: true,
	  secure: false,
	  sameSite: 'strict',
	})

	  res.redirect(`${process.env.FRONTEND_URL}/`)

	 }
  catch(error){
	console.error('Error during Google authentication:', error)
	return res.status(500).json(new ApiResponse(500,{},error.message));
  };
});

router.route("/google/callback").get(RegisterWithGoogle)

export default router
