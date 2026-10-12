const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    category: "Electronics",
    brand: "Dell",
    description: "Powerful laptop for work, study and entertainment.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 500,
    category: "Electronics",
    brand: "Samsung",
    description: "Modern smartphone with a high-quality display and camera.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 3,
    name: "Headphones",
    price: 80,
    category: "Electronics",
    brand: "Sony",
    description: "Wireless headphones with clear sound and comfortable design.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 150,
    category: "Electronics",
    brand: "Apple",
    description: "Smart watch with fitness tracking and notifications.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 5,
    name: "Camera",
    price: 900,
    category: "Electronics",
    brand: "Canon",
    description: "Professional camera for photography and video recording.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 45,
    category: "Gaming",
    brand: "Logitech",
    description: "High-performance gaming mouse with accurate tracking.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },
  {
    id: 7,
    name: "Gaming Keyboard",
    price: 70,
    category: "Gaming",
    brand: "Razer",
    description: "Mechanical gaming keyboard with RGB lighting.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    id: 8,
    name: "Gaming Chair",
    price: 220,
    category: "Furniture",
    brand: "Secretlab",
    description: "Comfortable gaming chair designed for long sessions.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6"
  },
  {
    id: 9,
    name: "Running Shoes",
    price: 120,
    category: "Fashion",
    brand: "Nike",
    description: "Lightweight running shoes for everyday training.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 10,
    name: "Leather Jacket",
    price: 180,
    category: "Fashion",
    brand: "Zara",
    description: "Stylish leather jacket with a modern design.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
  },
  {
    id: 11,
    name: "T-Shirt",
    price: 25,
    category: "Fashion",
    brand: "Adidas",
    description: "Comfortable cotton T-shirt for casual wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 12,
    name: "Jeans",
    price: 60,
    category: "Fashion",
    brand: "Levis",
    description: "Classic denim jeans with a comfortable fit.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d"
  },
  {
    id: 13,
    name: "Backpack",
    price: 55,
    category: "Accessories",
    brand: "Nike",
    description: "Durable backpack suitable for school, work and travel.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  },
  {
    id: 14,
    name: "Sunglasses",
    price: 40,
    category: "Accessories",
    brand: "Ray-Ban",
    description: "Classic sunglasses with a stylish frame.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 15,
    name: "Wrist Watch",
    price: 130,
    category: "Accessories",
    brand: "Casio",
    description: "Elegant wrist watch suitable for everyday use.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
  },
  {
    id: 16,
    name: "Wallet",
    price: 35,
    category: "Accessories",
    brand: "Fossil",
    description: "Compact leather wallet with multiple card slots.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
  },
  {
    id: 17,
    name: "Coffee Maker",
    price: 100,
    category: "Home",
    brand: "Philips",
    description: "Easy-to-use coffee maker for fresh coffee at home.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6"
  },
  {
    id: 18,
    name: "Table Lamp",
    price: 45,
    category: "Home",
    brand: "IKEA",
    description: "Modern table lamp for your bedroom or office.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
  },
  {
    id: 19,
    name: "Sofa",
    price: 650,
    category: "Furniture",
    brand: "IKEA",
    description: "Comfortable modern sofa for your living room.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
  },
  {
    id: 20,
    name: "Office Desk",
    price: 250,
    category: "Furniture",
    brand: "IKEA",
    description: "Simple and spacious desk for work and study.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd"
  },
  {
    id: 21,
    name: "Bluetooth Speaker",
    price: 75,
    category: "Electronics",
    brand: "JBL",
    description: "Portable speaker with powerful wireless sound.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
  },
  {
    id: 22,
    name: "Tablet",
    price: 350,
    category: "Electronics",
    brand: "Apple",
    description: "Lightweight tablet for entertainment and productivity.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
  },
  {
    id: 23,
    name: "Monitor",
    price: 280,
    category: "Electronics",
    brand: "LG",
    description: "Large high-resolution monitor for work and gaming.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
  },
  {
    id: 24,
    name: "Air Fryer",
    price: 110,
    category: "Kitchen",
    brand: "Philips",
    description: "Easy air fryer for preparing crispy meals with less oil.",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62"
  },
  {
    id: 25,
    name: "Water Bottle",
    price: 20,
    category: "Fitness",
    brand: "Hydro Flask",
    description: "Reusable insulated bottle for keeping drinks cold.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
  },
  {
    id: 26,
    name: "Yoga Mat",
    price: 30,
    category: "Fitness",
    brand: "Nike",
    description: "Soft and durable yoga mat for workouts and exercise.",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2"
  },
  {
    id: 27,
    name: "Football",
    price: 35,
    category: "Sports",
    brand: "Adidas",
    description: "Durable football suitable for training and matches.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55"
  },
  {
    id: 28,
    name: "Basketball",
    price: 30,
    category: "Sports",
    brand: "Spalding",
    description: "Professional-style basketball with excellent grip.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc"
  },
  {
    id: 29,
    name: "Travel Suitcase",
    price: 140,
    category: "Travel",
    brand: "Samsonite",
    description: "Strong and spacious suitcase for your travels.",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87"
  },
  {
    id: 30,
    name: "Perfume",
    price: 90,
    category: "Beauty",
    brand: "Dior",
    description: "Premium fragrance with a long-lasting elegant scent.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
  }
];

module.exports = products;