require('dotenv').config()
const mongoose = require('mongoose')
const db_url = process.env.DB_URL
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(db_url)
    console.log("MongoDB Connected 💋")
  } catch (error) {
    console.error("MongoDB Error ❌", error)
    process.exit(1)
  }
}

module.exports = connectDB

