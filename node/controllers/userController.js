import mongoose from "mongoose";
import UserModel from "../models/UserSchema.js";
export const createUser = async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, mobile } = req.body;

    const newUser = new UserModel({ name, email, mobile });

    await newUser.save();

    res.status(200).json({
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {
    console.error(error);
  }
};
export const fetchUsers = async (req, res) => {
    try {
        const data = await UserModel.find();
        res.status(200).json(data);

    } catch (error) {
        console.error(error);
    }
};


export const findUserById = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await UserModel.findById(id);

        if (!data) {
            return res.status(404).json({ msg: "User not found!" });
        }

        res.status(200).json(data);

    } catch (error) {
        console.error(error);
    }
};



export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid User ID format!" });
        }

        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found!" });
        }

        return res.status(200).json({
            msg: "User deleted successfully",
            deletedId: id
        });

    } catch (error) {
        console.error(error);
    }
};



export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, mobile, isBlocked, isBanned } = req.body;

        await UserModel.updateOne(
            { _id: id },
            { name, email, mobile, isBlocked, isBanned }
        );

        res.status(200).json({
            msg: "User updated successfully"
        });

    } catch (error) {
        console.error(error);
    }
};



export const blockUser = async (req, res) => {
    try {
        const { id } = req.params;

        await UserModel.updateOne(
            { _id: id },
            { isBlocked: true }
        );

        res.status(200).json({
            msg: "User blocked successfully"
        });

    } catch (error) {
        console.error(error);
    }
};



export const banUser = async (req, res) => {
    try {
        const { id } = req.params;

        await UserModel.updateOne(
            { _id: id },
            { isBanned: true }
        );

        res.status(200).json({
            msg: "User banned successfully"
        });

    } catch (error) {
        console.error(error);
    }
};