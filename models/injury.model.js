import mongoose, { Schema } from "mongoose";
const InjuriesSchema = new Schema({
    type:{
    type:String,
    required:true,
    },
    description:{
        type:String,
    },
    start_date:{
     type:Date,
     required:true,
    },
    end_date:{
    type:Date,
    required:true,
    },
    magitude:{
    type:Number,
    required:true,
   }
});



export const Injuries = mongoose.model('Injuries', InjuriesSchema);