const express = require("express");
const Maintain = require("../modules/maintenance/maintenance.model");

const router = express.Router();
console.log("Maintenance Route Loaded");

router.post("/", async (req, res) => {
    try {
        const {
            Machine_id,
            Machine_work,
            machine_available,
            machine_cost,
            machine_time
        } = req.body;

        if (
            Machine_id === undefined ||
            Machine_work === undefined ||
            machine_available === undefined ||
            machine_cost === undefined ||
            machine_time === undefined
        ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newMaintain = new Maintain({
            Machine_id,
            Machine_work,
            machine_available,
            machine_cost,
            machine_time
        });

        await newMaintain.save();

        res.status(201).json({
            message: "Maintenance created successfully",
            data: newMaintain
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const maintains = await Maintain.find();
        res.status(200).json({
            totalRecords: maintains.length,
            data: maintains
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedMaintain = await Maintain.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedMaintain) {
            return res.status(404).json({ message: "Maintenance not found" });
        }

        res.status(200).json({
            message: "Maintenance updated successfully",
            data: updatedMaintain
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedMaintain = await Maintain.findByIdAndDelete(req.params.id);

        if (!deletedMaintain) {
            return res.status(404).json({ message: "Maintenance not found" });
        }

        res.status(200).json({
            message: "Maintenance deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/available/filter", async (req, res) => {
    try {
        const status = req.query.status === "true";

        const machines = await Maintain.find({
            machine_available: status
        });

        res.status(200).json({
            total: machines.length,
            data: machines
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/analytics/total-cost", async (req, res) => {
    try {
        const result = await Maintain.aggregate([
            {
                $group: {
                    _id: null,
                    totalCost: { $sum: "$machine_cost" }
                }
            }
        ]);

        res.status(200).json({
            totalMaintenanceCost: result[0]?.totalCost || 0
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;