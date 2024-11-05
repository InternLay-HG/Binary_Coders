import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  eventType: { type: String, enum: ["Game", "Practice"], required: true }, 
  date: { type: Date, required: true },  
  startTime: { type: String, required: true },  
  endTime: { type: String },  
  location: { type: String, required: true },  
  teamsInvolved: [{ type: Schema.Types.ObjectId, ref: 'Team' }],  
  description: { type: String },  
  notes: { type: String }, 
  status: { type: String, enum: ["Scheduled", "Completed", "Canceled"], default: "Scheduled" }  // Status of the event
});

export const Event = mongoose.model('Event', eventSchema);
