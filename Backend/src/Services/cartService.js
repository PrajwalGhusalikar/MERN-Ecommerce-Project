const CartItem = require("../Models/cartItemModel");
const Cart = require("../Models/cartModel");
const Product = require("../Models/productModel");

const createCart = async (userId) => {
  try {
    const cart = new Cart({ user:userId }); //note why object of cart
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserCart = async (userId) => {

  try {
    let cart = await Cart.findOne({ user: userId });
    let cartItems = await CartItem.find({ cart: cart._id }).populate({path:"products", strictPopulate: false }); //note why cart._id and why to populate product
    cart.cartItems = cartItems;
    let totalPrice = 0;
    let totalItems = 0;
    let totalDiscountedPrice = 0;

    for (let cartItems of cart.cartItems) {
      totalPrice = totalPrice + cartItems.price;
      totalDiscountedPrice = totalDiscountedPrice + cartItems.discountedPrice;
      totalItems = totalItems + cartItems.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.discount = totalPrice - totalDiscountedPrice;
    cart.totalItems = totalItems;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addCartItem = async (userId, req) => {
  try {
    let cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);
    const isProductPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId: userId,
    });

    if (!isProductPresent) {
      const cartItems = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountedPrice: product.discontedPrice,
      });

      const createdCartItem = await cartItems.save();
      cart.cartItems.push(createdCartItem); //note: It gives array
      await cart.save();

      return "Item Added To Cart";
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createCart, findUserCart, addCartItem };
