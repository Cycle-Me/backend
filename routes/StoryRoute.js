import express from "express";
import {
    getStory,
    getMyStory,
    getStoryById,
    createStory,
    editStories,
    deleteStories
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
router.get('/stories/me', verifyUser, getMyStory);
router.get('/stories/:id', verifyUser, getStoryById);
router.post('/stories/create', verifyUser, upload.single('attachment'), imgUpload.uploadToGcs, createStory);
router.patch('/stories/edit/:id', verifyUser, editStories);
router.delete('/stories/delete/:id', verifyUser, deleteStories);



export default router;
