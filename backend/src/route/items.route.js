const express = require("express");
const route = express.Router();
const Item = require("../modules/items/items.model.js");

route.post("/additems", async (req, res) => {
    try {
        const {
            itemName,
            itemCode,
            itemQuantity,
            itemPrice,
            itemCategory
        } = req.body;

        if (
            !itemName ||
            !itemCode ||
            itemQuantity === undefined ||
            itemPrice === undefined ||
            !itemCategory
        ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newItem = new Item({
            itemName,
            itemCode,
            itemQuantity,
            itemPrice,
            itemCategory
        });

        await newItem.save();

        res.status(201).json({
            message: "Item created successfully",
            data: newItem
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

route.get("/allitems", async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({
            total: items.length,
            data: items
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

route.get("/filteritems", async (req, res) => {
    try {
        const { category } = req.query;

        if (!category) {
            return res.status(400).json({ message: "Category query is required" });
        }

        const items = await Item.find({ itemCategory: category });

        res.status(200).json({
            total: items.length,
            data: items
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


route.put("/updateitems/:id", async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({
            message: "Item updated successfully",
            data: updatedItem
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

route.delete("/deleteitems/:id", async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({
            message: "Item deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = route;