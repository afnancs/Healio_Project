const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    // اسم صاحب الكارت / المستخدم
    cardholderName: {
      type: String,
      required: true,
      trim: true
    },

    // اسم الدكتور
    doctorName: {
      type: String,
      required: true,
      trim: true
    },

    // مبلغ الدفع
    amount: {
      type: Number,
      required: true,
      min: 1
    },

    // طريقة الدفع
    paymentMethod: {
      type: String,
      required: true,
      enum: ["Visa", "PayPal"]
    },

    // رقم الكارت (يفضل يتخزن masked فقط)
    cardNumber: {
      type: String,
      required: true
    },

    // تاريخ الانتهاء
    expiryDate: {
      type: String,
      required: true
    },

    // حالة الدفع
    status: {
      type: String,
      default: "paid",
      enum: ["paid", "pending", "failed"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Payment", paymentSchema);