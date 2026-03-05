const mongoose = require("mongoose");
const MaintainanceSchema = new mongoose.Schema({
    Machine_id: {
        type: Number,
        unique: true,
        required: true
    },
    Machine_work: {
        type: String,
        required: true
    },
    machine_available: {
        type: Boolean,
        required: true
    },
    machine_cost: {
        type: Number,
        required: true
    },
    machine_time: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Maintainance", MaintainanceSchema);