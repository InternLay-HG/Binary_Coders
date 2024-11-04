import mongoose, { Schema } from "mongoose";
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
    unique:true,
    lowercase:true,
    },
    Age:{
    type:Number,
    },
    gender:{
    type:String,
    enum: ['male', 'female','others'],
    },
    Height:{
    type:Number,
    },
    Weight:{
    type:Number,
    },
    Blood_group:{
    type:String,
    },
    Injuries:[{
    type: Schema.Types.ObjectId,
    ref: 'Injuries',
    }],
    Performance:[{
    type: Schema.Types.ObjectId,
    ref:'Performance'
    }],
    Team:[
    {
        type:Schema.Types.ObjectId,
        ref:"Team"
    }
   ],
   Backups:[{
    type:Schema.Types.ObjectId,
    ref:"Team"
   }]
   


});



export const Athlete = mongoose.model('Athlete', athleteSchema);