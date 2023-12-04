const { mongoose } = require("./database/db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const sensor = require("./routes/sensor.router");

// app.set("view engine", "ejs");
// app.set("views", "views");
const cors = require("cors");

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sensor);



app.listen(process.env.PORT, () => {
    console.log(`server is on ${process.env.PORT}`);
});

