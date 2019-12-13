const router = require("express").Router();
const Workout = require("../models/workoutsModel");
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/home.html"))
});

router.get("/workouts/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newWorkout.html"))
});

router.get("/workouts", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/allWorkouts.html"))
});

router.post("/workouts", (req, res) => {
    ///split on comma then trim so that activities are saved into array
    const newWorkout = {}
    newWorkout.date = req.body.date
    newWorkout.activities = req.body.activities.trim().split(", ")
    
    console.log(newWorkout)

    Workout.create(newWorkout)
    .then(() => {
        res.redirect("/workouts?success=workout saved")
    })
    .catch(err => {
        res.json(err)
    });
});

router.get("/workouts/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "../resumeWorkout.html"))
});

module.exports = router