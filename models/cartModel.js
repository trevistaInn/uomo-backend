import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  cartItems: [cartItemSchema]
},
{
  timestamps: true,
});

export default mongoose.model('Cart', cartSchema);