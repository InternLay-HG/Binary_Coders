import mongoose, { Schema } from "mongoose";
import { type } from "os";
const athleteSchema = new Schema({
    name:{
    type:String,
    required:true,
    trim:true,
    } ,
    email: {
    type:String,
    required:true,
    trim:true,
    },
    Age:{
    type:Number,
    required:true,
    },
    gender:{
    type:String,
    required:true,
    enum: ['male', 'female','others'],
    },
    Height:{
    type:Number,
    required:true,
    },
    Weight:{
    type:Number,
    required:true,
    },
    Blood_group:{
    type:String,
    required:true,
    },
    healthStatus:{
        injuryRisk: { 
            type: String ,
            enum:["low","Medium","high"]
        },  
        injuryHistory:[{
             type: Schema.Types.ObjectId,
             ref: 'Injuries',
    }]},
    performanceMetrics:[{
         type: Schema.Types.ObjectId,
         ref:'Performance'
    }],
    sports:[
        {
            type:String
        }
    ],
    teams:[
        {
            type:Schema.Types.ObjectId,
            ref:'Team'
        }
    ],
    trainingSchedule:[
        {
          title: { type: String, required: true }, // e.g., "Strength Training Session"
          type: { type: String, required: true }, // e.g., "Strength training", "Cardio"
          date: { type: Date, required: true },
          startTime: { type: String, required: true }, // e.g., "10:00 AM"
          endTime: { type: String, required: true }, // e.g., "11:00 AM"
          location: { type: String }, // e.g., "Gym A"
          notes: { type: String } // additional details
        }
    ]

   


});



export const Athlete = mongoose.model('Athlete', athleteSchema);