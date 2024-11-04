import mongoose, { Schema } from "mongoose";
const PerformanceSchema = new Schema({
    sports:{
        type: String,
        required: true
    },
    player:{
        type: Schema.Types.ObjectId,
        ref:'Athlete',
    },
    team:{
        type: Schema.Types.ObjectId,
        ref:'Team',
    },
    performance:{
        type: Number,
        required: true
    },
    Endurance:{
        type: Number,
        required:true
    },
    Discipline:{
        type:Number,
        required:true
    },
    Consistancey:{
        type:Number,
        required:true
    },
});



export const Performance = mongoose.model('Performance', PerformanceSchema);