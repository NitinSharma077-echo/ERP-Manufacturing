const mongoose = require("mongoose");
const SalesSchema = new mongoose.Schema({
    sales_id: {
        type: Number,
        required: true,
        unique: true
    },
    sales_quantity: {
        type: Number,
        required: true
    },
    sales_price: {
        type: Number,
        required: true
    },
    sales_date: {
        type: Date,
        required: true
    },
    sales_status: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Sales", SalesSchema);