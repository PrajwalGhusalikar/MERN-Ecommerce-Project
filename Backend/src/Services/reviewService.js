const Reviews = require("../Models/reviewModel");

const productService = require("../Services/productService");

const createReview = async (req, user) => {
  const product = await productService.findProductById(req.productId);

  const review = new Reviews({
    product: product._id,
    user: user._id,
    review: req.review,
    createdAt: new Date(),
  });
  console.log("review", review)
  product.reviews.push(review);
  await product.save();
  return await review.save();
};

const getAllReview = async (producId) => {
  return await Reviews.find({ product: producId }).populate("user");
};

module.exports = {
  createReview,
  getAllReview,
};
