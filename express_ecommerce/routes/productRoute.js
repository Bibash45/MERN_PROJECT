const express = require("express");
const {
  postProduct,
  productList,
  productDetail,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const upload = require("../middleware/fileupload");
const router = express.Router();
const { productValidation, validation } = require("../validation/validator");
const {
  requireSignin,
  requireAdmin,
} = require("../controllers/userController");

router.post(
  "/postproduct",
  requireSignin,
  requireAdmin,
  upload.single("product_image"),
  productValidation,
  validation,
  postProduct
);
router.get("/productlist", productList);
router.get("/productdetails/:id", productDetail);
router.put(
  "/updateproduct/:id",
  requireSignin,
  requireAdmin,
  upload.single("product_image"),
  updateProduct
);
router.delete("/deleteproduct/:id", requireSignin, requireAdmin, deleteProduct);

module.exports = router;
