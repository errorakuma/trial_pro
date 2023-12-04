const express = require("express");
const router = express.Router();

const SC = require("../controllers/sensordata.controller")

// create 

router.post("/", SC.create)

// fetch data 

router.get("/data", SC.data)
module.exports = router;
