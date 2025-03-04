const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {
  const { text } = req.body;

  try {
    // Send text to ML model for generating sign gestures
    const response = await axios.post("http://localhost:5001/text-to-gesture", { text });

    res.json({ gesture: response.data.gesture });
  } catch (error) {
    res.status(500).json({ error: "Error converting text to gesture" });
  }
});

module.exports = router;
