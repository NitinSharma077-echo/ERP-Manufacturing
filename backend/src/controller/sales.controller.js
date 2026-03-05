const Sales = require("../modules/sales/sales.model");
const createsales = async (req, res) => {
    try {

        if (!Array.isArray(req.body)) {
            return res.status(400).json({
                message: "Send data as an array"
            });
        }

        const sales = await Sales.insertMany(req.body);

        res.status(201).json({
            message: "Multiple sales created successfully",
            data: sales
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getsales = async (req, res) => {
    try {
        const sales = await Sales.find();
        res.status(200).json({ message: "Sales fetched successfully", sales });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = { createsales, getsales };