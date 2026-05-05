import mongoose from "mongoose";

const {Schema}=mongoose;
const OrderSchema = new mongoose.Schema({
  order_id: String,

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  cart_items: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      qty: Number
    }
  ],

  amount: Number,

  isDelivered: { type: Boolean, default: false },
  isCancelled: { type: Boolean, default: false }

}, { timestamps: true });


 export default OrderSchema;