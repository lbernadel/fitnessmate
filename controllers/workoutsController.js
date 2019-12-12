const router = require("express").Router();
//import model
const Workout = require("../models/workoutsModel");

router.post("/new", (req, res) => {
    console.log(req.body)
    
    Workout.create(req.body)
    .then(plan => {
        res.json(plan)
    })
    .catch(err => {
        res.json(err)
    });
});

router.get("/resume", (req, res) => {

})

router.put("/resume", (req, res) => {

});

router.put("/resume/:id", (req, res) => {

});


module.exports = router