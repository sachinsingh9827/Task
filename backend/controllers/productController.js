const product = require("../models/productModel");

// CREATE PRODUCT ----- ADMIN
const createProduct = async (req, res) => {
  try {
    const data = await product.create(req.body);
    return res.json({ message: true, data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// GET ALL PRODUCT ----- admin
const getAdminProducts = async (req, res) => {
  try {
    const products = await product.find({});
    return res.status(200).json({ success: true, products });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// GET ALL PRODUCT API
const getAllProduct = async (req, res) => {
  const resultPerPage = 4;
  const productsCount = await product.countDocuments();
  let skip = resultPerPage * (req.query.page - 1);
  // let conditions={
  //   ...req.query.name&&{ name: req.query.name },
  //   ...req.query.category&&{
  //     category: req.query.category,
  //   }
  // }
  try {
    // search by name
    if (req.query.name) {
      const products = await product.find({
        name: { $regex: req.query.name.trim(), $options: "i" },
      });
      return res.status(200).send({ message: "filter by name", products });
    }
    // search by category
    if (req.query.category) {
      const products = await product.find({
        category: req.query.category,
      });
      return res.status(200).send({ message: "filter by category", products });
    }
    // search by price
    if (req.query.price) {
      const products = await product.find({
        price: { $gt: `${req.query.price.gt}`, $lt: `${req.query.price.lt}` },
      });
      return res.status(200).json({ message: "price filter", products });
    }
    const products = await product.find().limit(resultPerPage).skip(skip);
    return res
      .status(200)
      .json({
        message: "all products",
        products,
        resultPerPage,
        productsCount,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET PRODUCT IN DETAIL
const getProductDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await product.findById(id);
    if (!products) {
      return res.status(401).json({ message: "product not found" });
    }
    return res.status(200).json({ message: true, products });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// DELETE api
const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await product.findById(id);

    if (!products) {
      return res.status(200).json("product not found");
    }
    await products.deleteOne();
    return res.status(200).json("item deleted");
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
// admin update product
const updateProduct = async (req, res) => {
  try {
    let products = await product.findById(req.params.id);
    if (!products) {
      res.status(400).json({ message: "product not found" });
    }
    products = await product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// create review
const createProductReview = async (req, res) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  try {
    const products = await product.findById(productId);
    const isReviewed = products.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    console.log(!!isReviewed);
    if (!!isReviewed) {
      products.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      products.reviews.push(review);
      products.noOfReviews = products.reviews.length;
    }

    let avg = 0;

    products.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    products.ratings = avg / products.reviews.length;

    await products.save({ validateBeforeSave: false });
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
// get product reviews
const getProductReview = async (req, res) => {
  try {
    const products = await product.findById(req.query.id);
    if (!products) {
      return res.status(200).json({ message: "no product found" });
    }
    return res
      .status(200)
      .json({ message: "products are", reviews: products.reviews });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
// delete review
const deleteReview = async (req, res) => {
  try {
    const products = await product.findById(req.query.productId);
    if (!products) {
      return res.status(200).json({ message: "product not found " });
    }
    await products.reviews.remove(req.query.id);

    let avg = 0;

    products.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    let ratings = 0;

    if (products.reviews.length === 0) {
      ratings = 0;
    } else {
      products.ratings = avg / products.reviews.length;
    }

    products.noOfReviews = products.reviews.length;

    await products.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = {
  getAllProduct,
  createProduct,
  removeProduct,
  getAdminProducts,
  getProductDetails,
  updateProduct,
  createProductReview,
  getProductReview,
  deleteReview,
};
