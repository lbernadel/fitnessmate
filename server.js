//necessary npm packages
const express = require("express");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 4000;
const app = express();

//routers
const staticRouter = require("./controllers/staticController");
const workoutRouter = require("./controllers/workoutsController");
const activityRouter = require("./controllers/activityController")
const db = require("./models/index");


// Static assets
app.use(express.static(path.join(__dirname, "/public")));
// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));


// Routes
app.use(staticRouter);
app.use("/api/workouts", workoutRouter);
app.use("/api/activities", activityRouter);

// Wildcard route to catch any random paths not in defined routes
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/home.html"))
});

//Synchronize my schema. Connect to db either in production or whatever port is setup for dev
db.sequelize.sync({ force: process.env.NODE_ENV !== "production" }).then(() => {
    app.listen(PORT, () => {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
