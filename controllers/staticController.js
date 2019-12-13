const router = require("express").Router();
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

router.get("/workouts/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "../resumeWorkout.html"))
});

module.exports = router