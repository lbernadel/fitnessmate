const router = require("express").Router();
const path = require("path");
const moment = require("moment");
const db = require("../models");

//Menu Pages
//// Home/Dash
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/home.html"))
});

////Go to workouts
router.get("/workouts", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/allWorkouts.html"))
});

////Go to activities
router.get("/activities", async(req, res) => {
    res.sendFile(path.join(__dirname,"../public/allActivities.html"))
});

////Go enter new workout
router.get("/workouts/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newWorkout.html"))
});

////Go enter new activity
router.get("/activities/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newActivity.html"))
});


// router.post("/workouts", (req, res) => {
//     ///split on comma then trim so that activities are saved into array
//     const newWorkout = {}
//     newWorkout.date = req.body.date
//     newWorkout.activities = req.body.activities.trim().split(", ")
    
//     Workout.create(newWorkout)
//     .then(() => {
//         res.redirect("/workouts?success=workout saved")
//     })
//     .catch(err => {
//         res.json(err)
//     });
// });

// router.get("/workouts/resume", (req, res) => {
//     res.sendFile(path.join(__dirname, "../resumeWorkout.html"))
// });


module.exports = router