require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const stripeRouter = require("./routes/stripe");
const cors = require("cors");

const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to mongoDB");
};
connectToMongo();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/checkout", stripeRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("hello backend server is running");
});
