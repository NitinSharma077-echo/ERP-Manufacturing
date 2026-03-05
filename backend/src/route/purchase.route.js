const express = require("express");
const route = express.Router();
const { purchaseController, getpurchaseController } = require("../controller/purchase.controller");

route.post("/purchase", purchaseController);
route.get("/purchases", getpurchaseController);

module.exports = route;