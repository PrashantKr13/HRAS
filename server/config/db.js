const mongoose = require("mongoose");
const dotenv = require("dotenv");

const uri =
  "mongodb+srv://hras12345:hras12345@hras0.bqzljyw.mongodb.net/roomData?retryWrites=true&w=majority&appName=Hras0";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
