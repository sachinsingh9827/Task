const express = require("express");
const router = express.Router();

// import product Controllers
const {
  getAllProduct,
  createProduct,
  removeProduct,
  getAdminProducts,
  getProductDetails,
  updateProduct,
  createProductReview,
  getProductReview,
  deleteReview,
} = require("../controllers/productController");

// methods
router.get(
  "/getAdminProduct",

  getAdminProducts
);
router.get("/getProduct", getAllProduct);
router.get("/getProduct/:id", getProductDetails);
router.post(
  "/admin/createProduct",

  createProduct
);
router.delete(
  "/admin/deleteProduct/:id",

  removeProduct
);
router.put("/admin/updateProduct/:id", updateProduct);
router.post("/review", createProductReview);
router.get("/review", getProductReview);
router.delete("/review", deleteReview);

module.exports = router;
