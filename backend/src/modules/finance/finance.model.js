const mongoose = require("mongoose");

const FinanceSchema = new mongoose.Schema({

    transactionId: {
        type: String,
        required: true,
        unique: true
    },

    transactionType: {
        type: String,
        enum: ["income", "expense"],
        required: true
    },

    category: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: ["cash", "bank", "upi", "card"],
        required: true
    },

    reference: {
        type: String
    },

    description: {
        type: String
    },

    department: {
        type: String,
        enum: ["sales", "purchase", "production", "maintenance", "salary", "inventory"]
    },

    status: {
        type: Boolean,
        default: true
    },

    date: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true, bufferCommands: false });

module.exports = mongoose.model("Finance", FinanceSchema);