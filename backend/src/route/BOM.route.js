const express = require("express");
const route = express.Router();
const { createBOM, getBOM } = require("../controller/BOM.controller");

route.post("/createBOM", createBOM);
route.get("/getBOM", getBOM);

module.exports = route;
