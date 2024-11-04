import mongoose, { Schema } from "mongoose";
const teamSchema = new Schema({
   TeamName:{
    type:String,
    required:true,
   },
   Playes: [
    {
        type:Schema.Types.ObjectId,
        ref:'Athlete',
    }
   ],
   Backups:[{
    type:Schema.Types.ObjectId,
    ref:"Athlete"
   }],
   sports:{
      type:String,
      required:true
   },
   captain:{
      type:Schema.Types.ObjectId,
      ref:'Athlete'
   },
//    coach:{
//     type:Schema.Types.ObjectId,
//     ref:'Coach'
//    },
   Performance:[{
    type: Schema.Types.ObjectId,
    ref:'Performance'
   }],
   


});



export const Team = mongoose.model('Team', teamSchema);