const CartItem = require("../Models/cartItemModel");
const { findById } = require("../Models/cartItemModel");
const userService = require("../Services/userService");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  console.log("cartItemId from updatecart", cartItemId);
  try {
    const cartItem = await findCartItemById(cartItemId);
    if (!cartItem) {
      throw new Error("cart item not found: ", cartItemId);
    }
    console.log("cartItem.userId",cartItem)
    const user = await userService.getUserById(cartItem.userId);
  
    if (!user) {
      throw new Error("user for cart not found ", userId);
    }
    if(!cartItem.product.discountedPrice){
      cartItem.product.discountedPrice =   cartItem.price
    }
    if (user._id.toString() === userId.toString()) {
      cartItem.quantity = cartItemData.quantity;
      cartItem.price = cartItem.quantity * cartItem.product.price;
      cartItem.discountedPrice =
        cartItem.quantity * cartItem.product.discountedPrice;
      const updatedCartItem = await cartItem.save();
      return updatedCartItem;
    } else {
      throw new Error(
        "unable to update this item                                                               "
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.getUserById(userId);
    console.log("cartitem.userId", cartItem.userId);
    console.log("user._id", user._id);
    if (user._id.toString() === cartItem.userId.toString()) {
      return await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("You cannot access another users cart");
  } catch (error) {
    throw new Error(error.message);
  }
};

const findCartItemById = async (cartItemId) => {
  try {
    const cartItem = await CartItem.findById(cartItemId).populate("product");

    if (cartItem) {
      return cartItem;
    } else {
      throw new Error("Cart Item not found By Id", cartItemId);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateCartItem, removeCartItem, findCartItemById };
