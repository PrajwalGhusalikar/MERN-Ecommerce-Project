const CartItem = require("../Models/cartItemModel");
const { findById } = require("../Models/cartItemModel");
const userService = require("../Services/userService");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("cart item not found: ", cartItemId);
    }

    const user = await userService.getUserById(item.userId);
    if (!user) {
      throw new Error("cart item not found: ", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.prica = item.quantity * item.product.price;
      item.discountedPice = item.quantity * item.product.discountedPice;
      const updatedCartItem = await item.save();
      return updateCartItem;
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

    if (user._id.toString() === cartItem.userId.toString()) {
      await CartItem.findByIdAndDelete(cartItemId);
    }

    throw new Error("You cant remove another user item");
  } catch (error) {
    throw new Error(error.message);
  }
};

const findCartItemById = async (cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);

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
