const { Router } = require("express");
const productRoutes = require("./productRoute");
const userRoutes = require("./userRoute");
const orderRoutes = require("./orderRoute");
const paymentRoutes = require("./paymentRoute");

const router = Router();

router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/payment", paymentRoutes);
router.use("/user", userRoutes);

module.exports = router;
