const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(200).json({ message: "Transaction saved successfully!" });
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ message: "Error saving transaction." });
  }
});

module.exports = router;
