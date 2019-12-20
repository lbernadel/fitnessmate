const router = require("express").Router();
//import model
const Workout = require("../models/workoutsModel");

// Get all workouts
router.get("/", async (req, res) => {
    const plans = await Workout.find({}).sort({ date: -1 }).lean()
    res.send(plans)
});

router.put("/:planDate", async (req, res, next) => {
    try {
        const planDate = req.params.date;
        let id = req.body._id,
        addActivities = req.body.activities.trim().split(", ");

        const newPlan = await Workout.findByIdAndUpdate({_id: id, date: planDate}, {activities: addActivities},
            {new: true, upsert: false, runValidators: true})
        
        res.send(newPlan)
    } catch(error) {
        return next(new Error(error.message))
    }
});


module.exports = router