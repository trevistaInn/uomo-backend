import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(200).json({
        success: true,
        cartItems: [],
      });
    }

    const cartItems = [];

    for (const item of cart.cartItems) {
      const cartItem = await Product.findById(item._id);
      cartItems.push(cartItem);
    }
    return res.status(200).json({
      success: true,
      cartItems: cartItems,
    });
  } catch (error) {
    console.error("Get cart error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const saveCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { cartItems } = req.body;

    if (!Array.isArray(cartItems)) {
      return res.status(400).json({
        success: false,
        message: "cartItems must be an array",
      });
    }

    const cart = await Cart.findOneAndUpdate(
      { userId },
      {
        userId,
        cartItems,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      cartItems: cart.cartItems,
    });
  } catch (error) {
    console.error("Save cart error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};