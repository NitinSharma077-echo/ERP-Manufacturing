const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    inventoryID: {
        type: Number,
        unique: true,
        required: true
    },
    inventoryQuantity: {
        type: Number,
        required: true
    },
    inventoryPrice: {
        type: Number,
        required: true
    },
    inventoryDate: {
        type: Date,
        required: true
    },
    inventoryStatus: {
        type: Boolean,
        required: true
    },
    inventoryCategory: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema);