import mongoose, { Schema } from "mongoose";
import { type } from "os";
const CoachSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    sport: { type: String, required: true },
    teamId:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    athlete: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Athlete' }],
    yearsOfExperience: { type: Number, required: true },
    rating: { type: Number, default: 0 }, 
    numberOfRatings: { type: Number, default: 0 },
    description: { type: String }, 
    strengths: [{ type: String }], 
    achievements: [{
        awardType: { type: String }, 
        description: { type: String }, 
      }],
    studentReviews: [{
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete' },
      rating: { type: Number },
      review: { type: String },
      date: { type: Date, default: Date.now },
    }],
    contact_number:{type:Number}
});



export const Coach = mongoose.model('Coach', CoachSchema);