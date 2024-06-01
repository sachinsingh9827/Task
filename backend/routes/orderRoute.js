const express = require("express");
const {
  newOrder,
  getSingleOrder,
  getAllOrders,
} = require("../controllers/orderController");
const router = express.Router();

router.post("/newOrder", newOrder);
router.get("/getOrderDetails/:id", getSingleOrder);
router.get("/getAllOrders", getAllOrders);

module.exports = router;
