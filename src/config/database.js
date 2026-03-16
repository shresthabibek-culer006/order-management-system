const mongoose = require('mongoose')
const { DB_URL } = require('./config')

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL)
    console.log("MongoDB Connected 💋")
  } catch (error) {
    console.error("MongoDB Error 👎", error)
    process.exit(1)
  }
}

module.exports = connectDB