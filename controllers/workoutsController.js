const router = require("express").Router();
const db = require("../models/index");
const path = require("path");

const Workout = db.sequelize.import(path.resolve(__dirname,"../models/workoutModel.js"));
const Activity = db.sequelize.import(path.resolve(__dirname,"../models/activityModel.js"));

//Get all workouts by id
router.get("/workouts", async(req, res) => {
    const workouts = await Workout.findAll({
        where: {
            deleted: 0
        },
        include: [
            {
                model: Activity,
                as: "Activities",
                where: { deleted: false}
            }
        ]
    })
    res.json({ workouts })
});


module.exports = router