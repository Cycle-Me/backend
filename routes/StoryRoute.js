import express from "express";
import {
    getStory,
    getStoryById,
    createStory,
    updateProduct,
    deleteProduct
} from "../controllers/Story.js";
import {verifyUser} from "../middleware/AuthUser.js";
import imgUpload from "../config/imgUpload.js";
import multer from 'multer';
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB file size limit
    },
});

const router = express.Router();

router.get('/stories', verifyUser, getStory);
router.get('/stories/:id', verifyUser, getStoryById);
router.post('/create-stories', verifyUser, upload.single('attachment'), imgUpload.uploadToGcs, createStory);
router.patch('/update-stories/:id', verifyUser, updateProduct);
router.delete('/delete-stories/:id', verifyUser, deleteProduct);



export default router;
