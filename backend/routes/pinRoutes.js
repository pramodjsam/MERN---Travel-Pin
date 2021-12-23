const express = require("express");
const Pin = require("../models/Pin");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newPins = new Pin(req.body);

    const savedPin = await newPins.save();

    res.status(201).json(savedPin);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find({});

    res.status(200).json(pins);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
