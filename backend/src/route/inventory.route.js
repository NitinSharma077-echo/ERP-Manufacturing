const express = require("express");
const router = express.Router();
console.log("Inventory route loaded");
const { addInventory, getInventory, updateInventory, deleteInventory } = require("../controller/inventory.controller");

router.post("/addInventory", addInventory)
router.get("/getInventory", getInventory)
router.put("/updateInventory", updateInventory)
router.delete("/deleteInventory", deleteInventory)

module.exports = router;