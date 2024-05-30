const express = require("express");
const { createProduct, getProducts, getProduct, getProductByCategory } = require("./controller");
const { upload } = require("../multer.js");
const router = express.Router();
router.post("/", upload.array("photos"), createProduct);
router.get("/",getProducts);
router.get("/:id",getProduct);
router.get("/productCategory/:category",getProductByCategory);

module.exports = router;
