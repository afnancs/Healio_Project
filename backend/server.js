const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const User = require("./models/User");
const Booking = require("./models/Booking");
const Payment = require("./models/Payment");

dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/backend-status", (req, res) => {
  res.send(`
    <h1>🚀 Healio Backend</h1>
    <p>Server is running successfully ✅</p>
    <p>MongoDB connected and ready.</p>
  `);
});

app.post("/api/auth/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.create({ fullName, email, password });

    res.status(201).json({
      message: "User created successfully ✅",
      user
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/bookings", async (req, res) => {
  try {
    const { patientName, doctorName, date, time, paymentMethod } = req.body;

    if (!patientName || !doctorName || !date || !time) {
      return res.status(400).json({ message: "Missing booking data" });
    }

    const booking = await Booking.create({
      patientName,
      doctorName,
      date,
      time,
      paymentMethod
    });

    res.status(201).json({
      message: "Booking saved successfully ✅",
      booking
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/payments", async (req, res) => {
  try {

    const {
      cardholderName,
      doctorName,
      amount,
      paymentMethod,
      cardNumber,
      expiryDate
    } = req.body;

    if (
      !cardholderName ||
      !doctorName ||
      !amount ||
      !paymentMethod ||
      !cardNumber ||
      !expiryDate
    ) {
      return res.status(400).json({
        message: "Missing payment data"
      });
    }

    const payment = await Payment.create({
      cardholderName,
      doctorName,
      amount,
      paymentMethod,
      cardNumber,
      expiryDate,
      status: "paid"
    });

    res.status(201).json({
      message: "Payment saved successfully ✅",
      payment
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});

app.get("/api/payments", async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});