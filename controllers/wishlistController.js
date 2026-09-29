import Wishlist from "../models/wishlistModel.js";

export const getWishlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      return res.status(404).json({
        success: true,
        wishlistItems: [],
      });
    }
    res.status(200).json({
      success: true,
      wishlistItems: wishlist.wishlistItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const saveWishlist = async (req, res) => {
  try {
    const { userId, wishlistItems } = req.body;
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId: userId },
      {
        userId: userId,
        wishlistItems: wishlistItems,
      },
      {
        new: true,
        upsert: true
      }
    );
    res.status(200).json({
      success: true,
      wishlistItems: wishlist.wishlistItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};  


