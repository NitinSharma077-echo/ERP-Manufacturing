const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemCode: {
        type: String,
        required: true,
        unique: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    itemCategory: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Item", ItemSchema)
