const mongoose = require("mongoose")
require('dotenv').config()

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:3001/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log("MongoDB Connected")
};

module.exports = connectDB