import mongoose, { Schema } from "mongoose";
import { type } from "os";

const matchSchema = new Schema({
  date: { type: Date, required: true },
  startTime: { type: String, required: true },  
  endTime: { type: String },  
  location: { type: String, required: true },  
  team1: { type: Schema.Types.ObjectId, ref: 'Team', required: true },  
  team2: { type: Schema.Types.ObjectId, ref: 'Team', required: true },  
  team1Score: { type: Number, default: 0 },  
  team2Score: { type: Number, default: 0 },  
  result: { type: String, enum: ["Team1 Win", "Team2 Win", "Draw"], required: true }, 
  highlights: { type: String }, 
  referee: { type: String },  
  spectators: { type: Number, default: 0 }, 
  video:{type:String }

});

export const Match = mongoose.model('Match', matchSchema);
