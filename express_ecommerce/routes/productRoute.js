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

router.post(
  "/postproduct",
  upload.single("product_image"),
  productValidation,
  validation,
  postProduct
);
router.get("/productlist", productList);
router.get("/productdetails/:id", productDetail);
router.put("/updateproduct/:id", upload.single("product_image"), updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;
