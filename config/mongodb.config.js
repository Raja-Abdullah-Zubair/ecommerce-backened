const mongoose = require ("mongoose");
const connectMongoDB = async () => {
      const mongoUri = process.env.MONGODB_URI;

      if(!mongoUri) {
            throw new Error("MONGODB_URI IS MISSING IN ENVIROMENT VARIABLES");
      }

      await mongoose.connect(mongoUri, {
            dbName: "App_db"
      })

      console.log("MongoDB connected successfully");
};

module.exports = { connectMongoDB };
