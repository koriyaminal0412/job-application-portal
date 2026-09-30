const express = require("express");

const { uploadResume } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
  "/resume",
  protect,
  upload.single("resume"),
  uploadResume
);

module.exports = router;