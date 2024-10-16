const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  dateTime: { type: String, required: true },
  author: { type: String, required: true },
  sum: { type: Number, required: true },
  category: { type: String, required: true },
  comment: { type: String },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
