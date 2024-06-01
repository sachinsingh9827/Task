require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
// import routes
const products = require("./routes/productRoutes");
const order = require("./routes/orderRoute");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
//cors middleware
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

//connection with mongoose
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

cloudinary.config({
  cloud_name: process.env.Cloudinary_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// use routes as middleware
app.use("/api", products);
app.use("/api", order);

// listening  a server
app.listen(process.env.PORT, () => {
  console.log(`server running port ${process.env.PORT}`);
});
