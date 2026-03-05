const mongoose = require("mongoose");
const PurchaseSchema = new mongoose.Schema({
    purchaseOrderID: {
        type: Number,
        require: true,
        unique: true
    },
    purchaseQuantity: {
        type: Number,
        require: true
    },
    purchasePrice: {
        type: Number,
        require: true
    },
    purchaseDate: {
        type: Date,
        require: true
    },
    purchaseStatus: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Purchase", PurchaseSchema);   
