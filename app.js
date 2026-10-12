const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});