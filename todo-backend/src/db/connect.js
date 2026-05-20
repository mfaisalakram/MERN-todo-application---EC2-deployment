const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    console.log("Connecting with:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
  }
};

module.exports = connectDatabase;