const express = require("express");
const router = express.Router();

const {
    createFinance,
    getAllFinance,
    filterFinance,
    updateFinance,
    deleteFinance
} = require("../controller/finance.controller");

router.post("/createFinance", createFinance);
router.get("/getFinance", getAllFinance);
router.get("/filterFinance", filterFinance);
router.put("/updateFinance/:id", updateFinance);
router.delete("/deleteFinance/:id", deleteFinance);

module.exports = router;
