const router = require("express").Router();
const db = require("../models/index");
const path = require("path");

//Get all activities a->z
router.get("/activities", async(req, res) => {
  const activities = await Activity.findAll({
      where: {
          deleted: 0
      }
  })
  res.json({ activities })
});
