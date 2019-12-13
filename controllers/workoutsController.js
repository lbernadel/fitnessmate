const router = require("express").Router();
//import model
const Workout = require("../models/workoutsModel");

// Get all workouts
router.get("/", async (req, res) => {
    const plans = await Workout.find({}).lean()
    res.send(plans)
});

router.put("/:planDate", (req, res) => {
    const date = req.params.date;

    Workout.findOne({date: date}, "date activities", (err, plan) => {
        if(err){
            res.send(err)
        }else {
            console.log(plan)
            // plan = {};

            // plan.date = req.Workout.date;
            // plan.activities = req.Workout.activities.join(", ");

            // res.send(plan)
        }
    });
});


module.exports = router