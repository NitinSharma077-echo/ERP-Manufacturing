const express = require("express");
const router = express.Router();
const { productController, getproductController } = require("../controller/production.controller");

router.post("/product", productController);
router.get("/test", (req, res) => {
    res.send("test");
})
router.get("/products", getproductController);

module.exports = router;
