const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true
    },
    doctorName: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      default: 0
    },
    method: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "paid"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Payment", paymentSchema);