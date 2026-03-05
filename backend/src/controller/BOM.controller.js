const BOM = require("../modules/BOM/bom.model");

const createBOM = async (req, res) => {
    try {
        const { productId, materials, totalCost } = req.body;
        if (!productId || !materials || !totalCost) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const bom = new BOM({ productId, materials, totalCost });
        await bom.save();
        res.status(201).json({ message: "BOM created successfully", data: bom });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBOM = async (req, res) => {
    try {
        const boms = await BOM.find();
        res.status(200).json({ message: "BOM fetched successfully", data: boms });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createBOM, getBOM };
