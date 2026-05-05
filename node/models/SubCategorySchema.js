import mongoose from "mongoose";
 const {Schema}= mongoose;
 const SubCategorySchema = new mongoose.Schema({
  cat_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  name: String
}, { timestamps: true });


 export default SubCategory;