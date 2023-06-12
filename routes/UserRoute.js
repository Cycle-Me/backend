import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js";
import {verifyUser, adminOnly} from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser, getUsers);
router.get('/users/:id', verifyUser, getUserById);
router.post('/register', createUser);
router.patch('/update/:id', verifyUser, updateUser);
router.delete('/delete/:id', verifyUser, adminOnly, deleteUser);

export default router;
