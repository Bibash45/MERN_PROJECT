const express = require("express");
const {
  postOrder,
  orderList,
  orderDetails,
  userOrders,
  updateStatus,
} = require("../controllers/orderController");
const router = express.Router();

router.post("/postorder", postOrder);
router.get("/orderlist", orderList);
router.get("/orderdetails/:id", orderDetails);
router.get("/userorders/:userId", userOrders);
router.put("/updatestatus/:id", updateStatus);

module.exports = router;
