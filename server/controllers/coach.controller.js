import { asyncHandler, ApiResponse } from "../helper/index.js";
import { Coach } from "../models/coach.model.js";
import { User } from "../models/user.model.js";


const generateCoachAccount=asyncHandler(async(req,res)=>{
    try{
      const { sport } = req.body;
      const user=await User.findById(req.user._id);
      if(!user){
        return res.status(500).josn( new ApiResponse(500,{}," failed to get the user"))
      }
      if(user.isCoach === "True"){
          const coach=await Coach.findOne({email:user.email});
          if(!coach){
            coach=await Coach.create({email:user.email,name:user.name});  
          }
          coach.sport=sport;
          await coach.save();
          return res.status(200).json(new ApiResponse(200,{coachId:coach._id},"Coach account created"))
        
      }
      else{
        return res.status(400).json(new ApiResponse(400,{},"User  is not a Coach"))
      }
    }
    catch(error){
      console.log("the error during geting current user",error);
      return res.status(500).json(new ApiResponse(500,{},error.message||"failed to get the current user"))
    }
})

const getCoachDetails = asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      
      if (!user) {
        return res.status(500).json(new ApiResponse(500, {}, "Failed to get the user"));
      }
  
      if (user.isCoach === "True") {
        const coach = await Coach.findOne({ email: user.email })
          .populate({
            path: 'teamId',
            select: 'TeamName', 
          })
          .populate({
            path: 'athlete',
            select: 'name email', 
          })
          .populate({
            path: 'studentReviews.studentId',
            select: 'name', 
          });
  
        if (!coach) {
          return res.status(400).json(new ApiResponse(400, {}, "Coach account is not found"));
        }
  
        // Prepare and format the response with enriched data
        const responseData = {
          coach: {
            name: coach.name,
            email: coach.email,
            sport: coach.sport,
            yearsOfExperience: coach.yearsOfExperience,
            rating: coach.rating,
            numberOfRatings: coach.numberOfRatings,
            description: coach.description,
            strengths: coach.strengths,
            contact_number: coach.contact_number,
            achievements: coach.achievements,
            teams: coach.teamId.map(team => ({ id: team._id, name: team.name })),
            athletes: coach.athlete.map(athlete => ({
              id: athlete._id,
              name: athlete.name,
              email: athlete.email,
            })),
            studentReviews: coach.studentReviews.map(review => ({
              studentId: review.studentId?._id,
              studentName: review.studentId?.name,
              rating: review.rating,
              review: review.review,
              date: review.date,
            }))
          }
        };
  
        return res.status(200).json(new ApiResponse(200, responseData, "Coach account details retrieved successfully"));
        
      } else {
        return res.status(400).json(new ApiResponse(400, {}, "User is not a Coach"));
      }
    } catch (error) {
      console.log("Error fetching coach details:", error);
      return res.status(500).json(new ApiResponse(500, {}, error.message || "Failed to get the current user"));
    }
  });
  

export {
    generateCoachAccount,getCoachDetails
}