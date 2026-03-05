const prod = require("../modules/production/production.model");

const productController = async (req, res) => {
    try {
        const {
            productionID,
            productionQuantity,
            productionDate,
            productionStatus,
            ProductionCost,
            ProductionTime
        } = req.body;

        if (
            productionID === undefined ||
            productionQuantity === undefined ||
            productionDate === undefined ||
            productionStatus === undefined ||
            ProductionCost === undefined ||
            ProductionTime === undefined
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const product = await prod.create({
            productionID,
            productionQuantity,
            productionDate,
            productionStatus,
            ProductionCost,
            ProductionTime
        });

        res.status(201).json({
            message: "Product created successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getproductController = async (req, res) => {
    try {
        const product = await prod.find();

        res.status(200).json({
            totalRecords: product.length,
            data: product
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { productController, getproductController };