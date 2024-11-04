import mongoose, { Schema } from "mongoose";
const PerformanceSchema = new Schema({
    
    sports:{type: String,required: true},
    player:{type: Schema.Types.ObjectId, ref:'Athlete',},
    dateRecorded: { type: Date, required: true }, // The date the metric was recorded
    metricName: { type: String, required: true },  // e.g., "Speed", "Endurance"
    metricValue: { type: Number, required: true }, // Numeric value of the metric
    unitOfMeasurement: { type: String } ,// e.g., "kg", "seconds", "meters"
});
export const Performance = mongoose.model('Performance', PerformanceSchema);