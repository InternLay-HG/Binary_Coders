import mongoose, { Schema } from "mongoose";
const teamSchema = new Schema({
   TeamName:{type:String,required:true},
   sport: { type: String, required: true },
   athletes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Athlete' }],
   captain:{type:Schema.Types.ObjectId,ref:'Athlete'},
   coaches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coach' }],
   schedule: [
      {
        eventTitle: { type: String, required: true },  // e.g., "Quarter-Finals", "Practice Session"
        eventType: { type: String, enum: ["Game", "Practice", "Meeting"], required: true }, 
        eventDate: { type: Date, required: true },
        startTime: { type: String }, 
        endTime: { type: String },    
        location: { type: String },   
        opponentTeam: { type: String }, 
        notes: { type: String } 
      }
    ],
      // Performance Analytics
  performanceAnalytics: [
   {
     matchid:{type:Schema.Types.ObjectId,ref:"Match"},
     matchDate: { type: Date, required: true }, 
     opponentTeam: { type: String, required: true }, 
     result: { type: String, enum: ["Win", "Loss", "Draw"], required: true },
     teamScore: { type: Number, required: true }, 
     opponentScore: { type: Number, required: true },
     highlights: { type: String } 
   }
 ],
 teamRank: { type: Number },
 seasonStats: {
   gamesPlayed: { type: Number, default: 0 },
   wins: { type: Number, default: 0 },
   losses: { type: Number, default: 0 },
   draws: { type: Number, default: 0 }
 },
 budget: {
  totalBudget: { type: Number, required: true },  
  remainingBudget: { type: Number, default: 0 }, 
  allocatedBudget: { 
    type: Map, 
    of: Number, 
    default: {} 
  },  
  expenses: [
    {
      description: { type: String, required: true },  // Description of the expense
      amount: { type: Number, required: true },       // Amount spent
      date: { type: Date, default: Date.now },        // Date of the expense
      category: { type: String }                      // Category of expense, e.g., "travel", "food"
    }
  ]
}


});



export const Team = mongoose.model('Team', teamSchema);