const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "confirmed", "cancelled"]
    },
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
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    paymentMethod: {
      type: String,
      default: "unknown"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Booking", bookingSchema);