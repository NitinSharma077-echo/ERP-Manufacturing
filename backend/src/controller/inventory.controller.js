const Inventory = require("../modules/inventory/inventory.model");
console.log("Inventory controller loaded");

const addInventory = async (req, res) => {
    try {
        const { inventoryID, inventoryQuantity, inventoryPrice, inventoryCategory, inventoryDate, inventoryStatus } = req.body;
        if (!inventoryID || !inventoryQuantity || !inventoryPrice || !inventoryCategory || inventoryDate === undefined || inventoryStatus === undefined) {
            return res.status(400).json({ message: "All fields are required (inventoryID, inventoryQuantity, inventoryPrice, inventoryCategory, inventoryDate, inventoryStatus)" });
        }
        const inventory = new Inventory({
            inventoryID,
            inventoryQuantity,
            inventoryPrice,
            inventoryCategory,
            inventoryDate,
            inventoryStatus
        });
        await inventory.save();
        res.status(201).json({ message: "Inventory added successfully", data: inventory });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

const getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.status(200).json({ message: "Inventory fetched successfully", data: inventory });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Inventory updated successfully", data: inventory });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Inventory deleted successfully", data: inventory });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { addInventory, getInventory, updateInventory, deleteInventory };   