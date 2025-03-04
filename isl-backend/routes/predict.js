const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("video"), async (req, res) => {
  try {
    const videoPath = req.file.path;

    // Send video to ML server for processing
    const response = await axios.post("http://localhost:5001/predict", {
      videoPath,
    });

    // Delete video after processing
    fs.unlinkSync(videoPath);

    res.json({ text: response.data.text });
  } catch (error) {
    res.status(500).json({ error: "Error processing video" });
  }
});

module.exports = router;
