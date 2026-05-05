import mongoose from "mongoose";
 const {Schema}=mongoose;

 const CartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: { type: Number, default: 1 },
  isOrdered: { type: Boolean, default: false }
}, { timestamps: true });

const Cart = mongoose.model("Cart", CartSchema);
 export default Cart;