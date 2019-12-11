const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

// Express Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("views"))

mongoose.connect(process.env.Mongodb_uri || "mongodb://localhost/fitnessdb", {useNewUrlParser: true})




app.listen(PORT, () => {
    console.log(`==== Server is running at https://localhost:${PORT} ====`)
})