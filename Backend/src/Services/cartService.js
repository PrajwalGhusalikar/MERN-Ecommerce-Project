const Cart = require("../Models/cartModel")

const createCart = async(user)=>{
    try {
        const cart = new Cart({user})  //note why object of cart
        const createdCart = await cart.save()
        return createdCart
    }
    catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {createCart}