import mongoose, { Schema } from "mongoose";
const InjuriesSchema = new Schema({
    name:{
    type:String,
    required:true,
    } ,
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