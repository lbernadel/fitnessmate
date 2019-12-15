const router = require("express").Router();
//import model
const Workout = require("../models/workoutsModel");

// Get all workouts
router.get("/", async (req, res) => {
    const plans = await Workout.find({}).sort({ date: -1 }).lean()
    res.send(plans)
});

router.put("/:planDate", async (req, res) => {
    const planDate = req.params.date;
    let id = req.body._id,
    addActivities = req.body.activities.trim().split(", ");
    newPlan = {}
    newPlan._id = id,
    newPlan.date = planDate,
    newPlan.activities = addActivities
    console.log(newPlan)
    // let comboActivities = await Workout.findOneAndUpdate({_id: id, date: planDate},
    //      addActivities, {new: true, upsert: true},
    //      (err, plan) => {
    //     if(err){
    //         res.send(new Error(err.message))
    //     }else{
    //         let x = addActivities;
    //         let y = plan.activities;
    //         let z;
    //         function combine(x, y){
    //             return [].concat(x, y)
    //         }
    //         z = combine(x, y);
    //         return z
    //     }
    //     plan = {
    //         _id: _id,
    //         date: date,
    //         activities: z
    //     }
    // }).lean()
    // res.send(comboActivities)

    // Workout.findOne({date: date}, "date activities", (err, plan) => {
    //     if(err){
    //         res.send(err)
    //     }else {
    //         console.log(plan)
    //         // plan = {};

    //         // plan.date = req.Workout.date;
    //         // plan.activities = req.Workout.activities.join(", ");

    //         // res.send(plan)
    //     }
    // });
});


module.exports = router