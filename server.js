const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3030;
const app = express();

// Static assets
app.use(express.static(path.join(__dirname, "/public")));
// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Importing routes
app.use("/", require("./controllers/staticController"));
app.use("/api/workouts", require("./controllers/workoutsController"));

// Wildcard route to catch any random paths not in defined routes
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/home.html"))
});

// Connect to MongoDB. If deployed, use production db; otherwise, use local db.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {useNewUrlParser: true});

app.listen(PORT, () => {
    console.log(`==== Server is running at http://localhost:${PORT} ====`)
});