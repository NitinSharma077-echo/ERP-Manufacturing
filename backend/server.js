require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const userRoute = require("./src/route/user.route");
const salesRoute = require("./src/route/sales.route.js");
const productionRoute = require("./src/route/production.route");
const purchaseRoute = require("./src/route/purchase.route");
const maintainanceRoute = require("./src/route/maintainance.route");
const itemsRoute = require("./src/route/items.route.js");
const inventoryRoute = require("./src/route/inventory.route.js");
const financeRoute = require("./src/route/finance.route.js");
const bomRoute = require("./src/route/BOM.route.js");
const mrpRoute = require("./src/route/MRP.route.js");

app.use(express.json());
app.use(cors());

mongoose.set("bufferCommands", false);

mongoose.connect(process.env.MONGO_URI, {
    bufferCommands: false
})
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err.message);
        if (err.message.includes("ETIMEDOUT") || err.message.includes("whitelist")) {
            console.error("👉 TIP: This is likely an IP Whitelist issue. Go to MongoDB Atlas > Network Access > Add Current IP Address.");
        }
    });

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/user", userRoute);
app.use("/api/sales", salesRoute);
app.use("/api/production", productionRoute);
app.use("/api/purchase", purchaseRoute);
app.use("/api/maintainance", maintainanceRoute);
app.use("/api/items", itemsRoute);
app.use("/api/inventory", inventoryRoute);
app.use("/api/finance", financeRoute);
app.use("/api/bom", bomRoute);
app.use("/api/mrp", mrpRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
