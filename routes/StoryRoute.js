import express from "express";
import {
    getStory,
    getProductById,
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
router.get('/stories/:id', verifyUser,  getProductById);
router.post('/create-stories', verifyUser, upload.single('attachment'), imgUpload.uploadToGcs, createStory);
// router.post("/insertrecord", multer.single('attachment'), imgUpload.uploadToGcs, (req, res) => {
//     const name = req.body.name
//     const notes = req.body.notes
//     var imageUrl = ''
//
//     if (req.file && req.file.cloudStoragePublicUrl) {
//         imageUrl = req.file.cloudStoragePublicUrl
//     }
//
//     const query = "INSERT INTO records (name, notes, attachment) values (?, ?, ?)"
//
//     connection.query(query, [name, notes, imageUrl], (err) => {
//         if (err) {
//             res.status(500).send({message: err.sqlMessage})
//         } else {
//             res.send({message: "Insert Successful"})
//         }
//     })
// })
router.patch('/update-stories/:id', verifyUser, updateProduct);
router.delete('/delete-stories/:id', verifyUser, deleteProduct);



export default router;
