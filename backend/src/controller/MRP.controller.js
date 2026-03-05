const MRP = require("../modules/MRP/mrp.model");

const createMRP = async (req, res) => {
    try {
        const { materialId, requiredQuantity, orderDate } = req.body;
        if (!materialId || !requiredQuantity || !orderDate) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const mrp = new MRP({ materialId, requiredQuantity, orderDate });
        await mrp.save();
        res.status(201).json({ message: "MRP created successfully", data: mrp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMRP = async (req, res) => {
    try {
        const mrps = await MRP.find();
        res.status(200).json({ message: "MRP fetched successfully", data: mrps });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createMRP, getMRP };
