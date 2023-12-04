const sensors = require("../models/sensor");

// setInterval(async () => {
// module.exports.create;
// }, 30000);
// 
module.exports.create = async (req, res) => {
    const { sensor, location, temperature, pressure, humidity, timeStamp } = req.body;
    try {
        const data = {
            sensor: sensor,
            location: location,
            temperature: temperature,
            pressure: pressure,
            humidity: humidity,
            timeStamp: new Date().toISOString(),
        };
        const result = await sensors.create(data);

        if (!result) {
            return res.status(400).json({
                message: "no data created ",
            });
        }
        return res.status(200).json(data);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

module.exports.data = async (req, res) => {
    const { sensor, location, temperature, pressure, humidity, timeStamp } =
        req.body;
    try {
        const data = await sensors.find().sort({ timeStamp: -1 }).limit(1);


        if (!data) {
            return res.status(400).json({
                message: "no data found ",
            });
        }

        // res.render("home", { re: data });

        return res.status(200).json(data);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
