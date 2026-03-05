const mongoose = require("mongoose");

const BOMSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    materials: { type: Array, required: true },
    totalCost: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("BOM", BOMSchema);
