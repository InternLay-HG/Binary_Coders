import mongoose, { Schema } from "mongoose";

const PerformanceSchema = new Schema({
  athlete: { 
    type: Schema.Types.ObjectId, 
    ref: 'Athlete', 
    required: true 
  },
  sport: { 
    type: String, 
    required: true,
  },
  eventType: { 
    type: String, 
    enum: ['match', 'practice', 'training', 'other'], 
    default: 'other' 
  },
  dateRecorded: { 
    type: Date, 
    default: Date.now, 
    required: true 
  },
  metrics: [
    {
      metricName: { 
        type: String, 
        required: true 
      },  // e.g., "Speed", "Endurance", "Goals Scored"
      metricValue: { 
        type: Number, 
        required: true 
      }, // e.g., 5.4, 15
      unitOfMeasurement: { 
        type: String, 
        required: true 
      } // e.g., "seconds", "meters", "points"
    }
  ],

    notes: { 
      type: String, 
      trim: true 
    } // Additional observations or comments on the performance

});

export const Performance = mongoose.model('Performance', PerformanceSchema);
