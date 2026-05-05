import express from "express";

import {
    createUser,
    fetchUsers,
    findUserById,
    deleteUserById,
    updateUserById,
    blockUser,
    banUser
} from "../controllers/userController.js"; 

const router = express.Router();

router.post("/", createUser);
router.get("/", fetchUsers);
router.get("/:id", findUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);
router.put("/block/:id", blockUser);
router.put("/ban/:id", banUser);

export default router;