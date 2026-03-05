const mongoose = require("mongoose");

const MRPSchema = new mongoose.Schema({
    materialId: { type: String, required: true },
    requiredQuantity: { type: Number, required: true },
    orderDate: { type: Date, required: true },
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("MRP", MRPSchema);
