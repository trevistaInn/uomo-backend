import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
{
  _id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  date: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  cartItems: [
    {
      style: String,
      price: Number,
      quantity: Number,
      discount: Number,
      image: String,
      selectedSize: String,
      selectedColor: String,
    },
  ],
  subtotal: {
    type: Number,
    required: true,
  },
  vat: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  customer: {
    firstName: String,
    lastName: String,
    companyName: String,
    country: String,
    streetAddress: String,
    townCity: String,
    postCode: String,
    province: String,
    phone: String,
    email: String,
    saveAddress: Boolean,
    orderNotes: String,
  },
  status: {
    type: String,
    default: 'Placed',
  },

  tracking: {
    type: [
      {
      status: {
        type: String,
        enum: ['Placed',
          'Confirmed',
          'Packed',
          'Shipped',
          'Out for Delivery',
          'Delivered',
          'Cancelled',
          'Returned Requested',
          'Returned',
        ],
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
    ],
        default: [
          {
            status: 'Placed',
            date: Date.now,
          }
        ]
      }
  },
{
  timestamps: true,
}
);

const Order = mongoose.model('Order', orderSchema);
export default Order;