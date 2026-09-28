const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    }
  },
  {
    timestamps: true
  }
);

const  = mongoose.model("User", userSchema);
module.exports = { User };