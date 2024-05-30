const express = require("express");

const { upload } = require("../multer.js");
const { createBanner, getBanners, getBanner } = require("./controller.js");
const { getProducts } = require("../product/controller.js");
const router = express.Router();
router.post("/", upload.array("photo"), createBanner);
router.get("/", getBanners);
router.get("/:id", getBanner);

module.exports = router;
