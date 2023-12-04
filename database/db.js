const mongoose = require("mongoose");
const env = require("dotenv").config();

mongoose
    .connect(process.env.DATABASE_URL)

    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err.message);
    });


const db = mongoose.connection;


module.exports = mongoose;


