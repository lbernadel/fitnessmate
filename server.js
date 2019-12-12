const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workoutsModel")
const app = express();

app.use(logger("dev"));

// Express Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routes
app.use(express.static("public"));

// Connect to MongoDB. If deployed, use production db; otherwise, use local db.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {useNewUrlParser: true});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/home.html"))
});

app.get("/workouts/new", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/newWorkout.html"))
});

app.post("/workouts/new", (req, res) => {
    Workout.create(req)
        .then(Workout => {
            res.json(Workout)
        })
});

app.get("/workouts/continue", (req, res) => {
    res.sendFile(path.join(__dirname, "./resumeWorkout.html"))
});

app.put("/workouts/continue", (req, res) => {

});

// Wildcard route to catch any random paths not above
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/home.html"))
});


app.listen(PORT, () => {
    console.log(`==== Server is running at http://localhost:${PORT} ====`)
});