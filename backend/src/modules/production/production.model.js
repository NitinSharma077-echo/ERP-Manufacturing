const mongoose = require("mongoose");
const ProductionSchema = new mongoose.Schema({
    productionID: {
        type: Number,
        unique: true,
        required: true
    },
    productionQuantity: {
        type: Number,
        required: true
    },
    productionDate: {
        type: Date,
        required: true
    },
    productionStatus: {
        type: Boolean,
        required: true
    },
    ProductionCost: {
        type: Number,
        required: true
    },
    ProductionTime: {
        type: Date,
        required: true
    },
    ProductionTime: {}
})

module.exports = mongoose.model("Production", ProductionSchema);
