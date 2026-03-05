const express = require("express");
const route = express.Router();
const { createMRP, getMRP } = require("../controller/MRP.controller");

route.post("/createMRP", createMRP);
route.get("/getMRP", getMRP);

module.exports = route;
