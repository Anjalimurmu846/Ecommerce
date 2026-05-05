import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  org_price: Number,
  desc: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  sub_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory"
  }
});


const Product = mongoose.model("Product", ProductSchema);


export default Product;