const mongoose = require("mongoose");

const WorkoutsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "Must choose a date"]
    },
    activities: {
        type: Array,
        required: [true, "Must enter an activity"]
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Workout =  mongoose.model("Workout", WorkoutsSchema);

module.exports = Workout;