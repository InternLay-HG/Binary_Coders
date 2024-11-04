import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const userSchema = new Schema({
    name:{
    type:String,
    required:true,
    trim:true,
   } ,
   email: {
    type:String,
    required:true,
    trim:true,
    unique:true,
    lowercase:true,
   },
   password:{
    type:String,
    required:[true ,"password is required"]
   },
   picture:{
      type:String,
   },
   isAthlete:{
    type:Boolean,
    default:false,
   },
   isCoach:{
    type:Boolean,
    default:false,
   },
   isDirector:{
    type:Boolean,
    default:false,
   },
   isFan:{
    type:Boolean,
    default:false,
   },
   refreshToken:{
           type:String
   }
},{timestamps:true});

userSchema.pre("save", async function(next) {
    try {
      if (!this.isModified("password")) return next();
      const salt =await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });
userSchema.methods.isPasswordCorrect = async function(password) {
    try{
        return await bcrypt.compare(password,this.password);
    }
    catch(error){
         console.log("something went wrong during comparing the password ",error)
         throw error;
    }
};
userSchema.methods.generateRefreshToken = function() {
    return jwt.sign({
      _id: this._id
    }, process.env.REFRESH_TOKEN_SECRET, 
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    });
};

export const User = mongoose.model('User', userSchema);