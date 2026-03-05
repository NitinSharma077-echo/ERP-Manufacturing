const Finance = require("../modules/finance/finance.model");


// CREATE FINANCE RECORD
const createFinance = async (req, res) => {
    try {
        const {
            transactionType,
            category,
            amount,
            paymentMethod,
            reference,
            description,
            department,
            status
        } = req.body;

        // Generate a transactionId if not provided
        const transactionId = req.body.transactionId || `FIN-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        if (!transactionType || !category || !amount || !paymentMethod) {
            return res.status(400).json({
                message: "Required fields missing: transactionType, category, amount, paymentMethod"
            });
        }

        // Check if DB is connected
        if (require("mongoose").connection.readyState !== 1) {
            return res.status(503).json({
                message: "Database not connected. Please check if your IP is whitelisted in MongoDB Atlas.",
                tip: "Go to MongoDB Atlas > Network Access > Add Current IP Address"
            });
        }

        const finance = new Finance({
            transactionId,
            transactionType,
            category,
            amount,
            paymentMethod,
            reference,
            description,
            department,
            status
        });

        await finance.save();

        res.status(201).json({
            message: "Finance record created",
            data: finance
        });

    } catch (error) {
        console.error("Finance Create Error:", error.message);
        const isTimeout = error.message.includes("timed out") || error.message.includes("buffering");
        res.status(isTimeout ? 503 : 500).json({
            message: isTimeout ? "Connection timed out. Ensure your IP is whitelisted in MongoDB Atlas." : error.message,
            error: error.message
        });
    }
};



// GET ALL FINANCE RECORDS
const getAllFinance = async (req, res) => {
    try {

        const records = await Finance.find().sort({ date: -1 });

        res.status(200).json({
            message: "Finance records fetched",
            data: records
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



// FILTER FINANCE (BY CATEGORY / TYPE / DEPARTMENT)
const filterFinance = async (req, res) => {
    try {

        const { category, transactionType, department } = req.query;

        let filter = {};

        if (category) filter.category = category;
        if (transactionType) filter.transactionType = transactionType;
        if (department) filter.department = department;

        const records = await Finance.find(filter);

        res.status(200).json({
            message: "Filtered finance data",
            data: records
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



// UPDATE FINANCE RECORD
const updateFinance = async (req, res) => {
    try {

        const { id } = req.params;

        const updated = await Finance.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                message: "Finance record not found"
            });
        }

        res.status(200).json({
            message: "Finance updated successfully",
            data: updated
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



// DELETE FINANCE RECORD
const deleteFinance = async (req, res) => {
    try {

        const { id } = req.params;

        const deleted = await Finance.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Finance record not found"
            });
        }

        res.status(200).json({
            message: "Finance record deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



module.exports = {
    createFinance,
    getAllFinance,
    filterFinance,
    updateFinance,
    deleteFinance
};