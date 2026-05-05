import mongoose from "mongoose";
const { Schema } = mongoose;

const UserDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  address: String,
  pin: String,
  landmark: String
}, { timestamps: true });


export default UserDetails;