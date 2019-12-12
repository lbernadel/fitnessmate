const mongoose = require("mongoose");

const WorkoutsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Must enter a workout name"]
    },
    date: {
        type: Date,
        required: [true, "Must choose a date"]
    },
    activity: {
        type: String,
        required: [true, "Must choose an activity"]
    },
    duration: {
        type: Number,
        required: [true, "Must input a workout duration in minutes"]
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Workout =  mongoose.model("Workout", WorkoutsSchema);

module.exports = Workout;