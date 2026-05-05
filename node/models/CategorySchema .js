import mongoose from "mongoose";

const {Schema}= mongoose;

const CategorySchema = new mongoose.Schema({
  cat_name: String
}, { timestamps: true });


export default Category;