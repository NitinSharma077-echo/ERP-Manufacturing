const express = require("express");
const route = express.Router();
const { createsales, getsales } = require("../controller/sales.controller");
console.log("Sales route loaded");
route.post("/createsales", createsales);
route.get("/getsales", getsales);
route.get("/test", (req, res) => {
    res.send("Sales Route")
})

module.exports = route;
