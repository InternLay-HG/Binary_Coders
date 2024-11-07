import mongoose, { Schema } from "mongoose";
const FanSchema = new Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
favoriteTeams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
favoritePlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Athlete' }],

});



export const Fan = mongoose.model('Fan', FanSchema);


