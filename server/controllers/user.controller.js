import { asyncHandler, ApiResponse } from "../helper/index.js";
import { User } from "../models/user.model.js";
import { sendVerificationEmail } from "../helper/mail.js";

const RegisterUser = asyncHandler(async (req, res) => {
  try{  
    const { name, email, password, role } = req.body;

  // Validate required fields
  if ([name, email, password, role].some((field) => !field?.trim())) {
    throw new ApiResponse(400, {}, "All fields are required");
  }

  // Validate email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@iiitranchi\.ac\.in$/;
  if (!emailRegex.test(email)) {
    throw new ApiResponse(400, {}, "Invalid Email address");
  }
  // Check if user already exists
  const existingUser = await User.findOne({ email:email,isVerified:true });
  if (existingUser) {
    throw new ApiResponse(400, {}, "User with the same email already exists");
  }

  // Create the user
  const user = await User.create({ name, email, password });
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
  const verificationCode = await sendVerificationEmail(email, name);
  user.verificationcode=verificationCode;
  await user.save();

  // Respond with success message
  return res
    .status(200)
    .json(new ApiResponse(200, {userid:user._id}, "verification code is send to your email"));
}
catch(error){
  console.log("the error during registertion is ",error)
  return res.status(500).json(new ApiResponse(500,{},error.message));
};
});

const verifyEmail=asyncHandler(async(req,res)=>{
  try{

    const verificationCode=req.body.verificationCode;
    const userid=req.body.userid;
    const user = await User.findOne({ _id:userid});
    if (!user) {
      throw new ApiResponse(404, {}, "User not found");
    }
    if(user.verificationcode!=verificationCode){
      throw new ApiResponse(400, {}, "Invalid verification code");
    }
    user.isVerified=true;
    await user.save();
    return res
    .status(200)
    .json(new ApiResponse(200, {user}, "verification  is completed successfully"));

  }
  catch(error){
    console.log(error)
     throw new ApiResponse(500,{},error.message||"failed to verify the email");
  }
})

const generateRefereshTokens = async(userId) =>{
  try {
      const user = await User.findById(userId)
      const refreshToken = user.generateRefreshToken()
      user.refreshToken = refreshToken
      await user.save({ validateBeforeSave: false })
  
      return { refreshToken}


  } catch (error) {
      throw new ApiResponse(500,{}, "Something went wrong while generating referesh and access token")
  }
}

const loginuser=asyncHandler(async(req,res)=>{
  try{
    const {email,password}=req.body;
    if( !email){
      throw new ApiResponse(400,{}, "email is required")
    }
    if(!password){
      throw new ApiResponse(400,{},"Password is required")
    }
    const user=await User.findOne({email:email,isVerified:true})
    if(!user){
      throw new ApiResponse(400,{},"User not found")
    }
    const iscorrectPassword=await user.isPasswordCorrect(password)
    if(!iscorrectPassword){
      throw new ApiResponse(400,{},"Password is incorrect")
    }
    const {refreshToken , accessToken }=await generateRefereshTokens(user._id);
    const logedUser=await User.findById(user._id).select("-password -refreshToken");
    if(!logedUser){
       throw new ApiResponse(500,{}," login failed ")
    }
    const options = {
      httpOnly: true,
      secure: true
    }
    return res.status(200)
    .cookie("jwt", refreshToken, options)
    .json(
      new ApiResponse(200,{},"Login successful")
      )

  }
  catch(error){
    //  console.log("error during the login ",error)
     return res.status(500) .json(new ApiResponse(500,{},error.message||"failed to login the user"));
  }
})

const getcurrentuser=asyncHandler(async(req,res)=>{
  try{
    const user=await User.findById(req.user._id).select("-password -refreshToken -verificationcode");
    if(!user){
      throw new ApiResponse(500,{}," failed to get the user")
    }
    return res.status(200).json(new ApiResponse(200,user,"User found"))
    
  }
  catch(error){
    console.log("the error during geting current user",error);
    return res.status(500).json(new ApiResponse(500,{},error.message||"failed to get the current user"))
  }
})


export { RegisterUser,verifyEmail,loginuser ,getcurrentuser};
