const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sensordata = new Schema({
    sensor: String,
    location: String,
    temperature: Number,
    pressure: Number,
    humidity: Number,
    timeStamp: String,
});

module.exports = mongoose.model("sensordata", sensordata);
