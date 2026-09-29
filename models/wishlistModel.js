import mongoose from "mongoose";

const wishlistItemSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  image: String,
  style: String,
  type: String,
  color: [String],
  size: [String],
  price: Number,
  quantity: {
    type: Number,
    min: 1,
    },
});

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,   
    },
    wishlistItems: [wishlistItemSchema],
},
{
    timestamps: true,
});

export default mongoose.model('Wishlist', wishlistSchema);

