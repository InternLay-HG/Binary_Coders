
import { asyncHandler,ApiResponse } from "../helper/index.js";
import jwt from 'jsonwebtoken'
import { User } from "../models/user.model.js";

export const verifyJWT=asyncHandler(async (req,res,next)=>{
  try{
    const token= req.cookies?.jwt || req.header("Authorization")?.replace("Bearer","");
   if(!token){
     return res.status(401).json(new ApiResponse(401,{},"Unauthorized request")) 
   }
   const decodedToken=jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
   const user= await User.findById(decodedToken?._id).select(" -password -refreshToken")
   if(!user){
    return res.status(401).json(new ApiResponse(401,{},"Invalid refreshToken")) 
    
  }
  req.user =user;
  next()
  }
  catch(error){
    return res.status(401).json(new ApiResponse(401,{},error?.message || "Invalid refreshToken ")) 
    
  }
})