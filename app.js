require("dotenv").config();
const express = require("express");
const products = require("./products");
const { User } = require("./models/user.model");
const { Product } = require("./models/product.model");

const { connectMongoDB } = require("./config/mongodb.config");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");

});

app.get("/products", (req, res) => {

  res.json(products);
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password
    });

    res.status(200).json({
      message: "User created successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: error
    });
  }
});



app.post("/auth/logIn", (req, res) => {

});

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Server startup failed:", error.message);
  process.exit(1);
});