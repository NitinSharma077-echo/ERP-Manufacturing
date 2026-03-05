const Purchase = require("../modules/purchase/purchase.model");

const purchaseController = async (req, res) => {
    try {
        const {
            purchaseOrderId,
            purchaseOrderDate,
            purchaseOrderStatus,
            purchaseOrderCost,
            purchaseOrderTime
        } = req.body;

        if (
            purchaseOrderId === undefined ||
            purchaseOrderDate === undefined ||
            purchaseOrderStatus === undefined ||
            purchaseOrderCost === undefined ||
            purchaseOrderTime === undefined
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newPurchase = await Purchase.create({
            purchaseOrderId,
            purchaseOrderDate,
            purchaseOrderStatus,
            purchaseOrderCost,
            purchaseOrderTime
        });

        res.status(201).json({
            message: "Purchase created successfully",
            data: newPurchase
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getpurchaseController = async (req, res) => {
    try {
        const purchases = await Purchase.find();

        res.status(200).json({
            totalRecords: purchases.length,
            data: purchases
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { purchaseController, getpurchaseController };