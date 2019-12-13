const mongoose = require("mongoose");

const WorkoutsSchema = new mongoose.Schema({
    date: {
        type: String,
        match: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
        required: [true, "Date must be in format of YYYY-MM-DD"]
    },
    activities: {
        type: Array,
        required: [true, "Must enter an activity"]
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Workout =  mongoose.model("Workout", WorkoutsSchema);

module.exports = Workout;