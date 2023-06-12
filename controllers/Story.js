import User from "../models/UserModel.js";
import Story from "../models/StoryModel.js";
import imgUpload from "../config/imgUpload.js";
import {Op} from "sequelize";


export const getStory = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Story.findAll({
                attributes:['uuid','description', 'attachment'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else if (req.role === "user"){
            response = await Story.findAll({
                attributes:['uuid','description', 'attachment'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getStoryById = async(req, res) =>{
    try {
        const story = await Story.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!story) return res.status(404).json({msg: "Story tidak ditemukan!"});
        let response;
        if(req.role === "admin"){
            response = await Story.findOne({
                attributes:['uuid','description','attachment'],
                where:{
                    id: story.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else if (req.role === "user"){
            response = await Story.findOne({
                attributes:['uuid','description','attachment'],
                where:{
                    [Op.and]:[{id: story.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createStory  = async(req, res) =>{
    // const {description} = req.body;
    // var imageUrl = '';
    //
    // try {
    //     if (req.file && req.file.cloudStoragePublicUrl) {
    //         data.imageUrl = req.file.cloudStoragePublicUrl
    //     } else {
    //         throw new Error('No File Uploaded!');
    //     }
    //     await imgUpload.uploadToGcs(req, res);
    //     await multer.single('attachment')
    //     const createdStory = await Story.create({
    //         description: description,
    //         attachment: imageUrl,
    //         userId: req.userId,
    //     });
    //
    //     res.status(201).json({ msg: 'Record Created Successfully', story: createdStory });
    //
    // } catch (error) {
    //     res.status(500).json({ msg: error.message });
    // }


    const {description} = req.body;
    let imageUrl = '';

    if (req.file && req.file.cloudStoragePublicUrl) {
        imageUrl = req.file.cloudStoragePublicUrl
    }

    try {
        // await Story.create({
        //     description: description,
        //     attachment: imageUrl,
        //     userId: req.userId
        const createdStory = await Story.create({
            description: description,
            attachment: imageUrl,
            userId: req.userId
        });
        res.status(201).json({msg: "Story posted Successfuly", createdStory});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// export const createStory = async (req, res) => {
//     const { description } = req.body;
//     let attachmentUrl = '';
//
//     if (req.file && req.file.cloudStoragePublicUrl) {
//         attachmentUrl = req.file.cloudStoragePublicUrl;
//     }
//
//     try {
//         // Call the uploadToGcs function to upload the image to Google Cloud Storage
//         await imgUpload.uploadToGcs(req.file); // Pass the req.file object or any other necessary arguments
//
//         await Story.create({
//             description: description,
//             attachment: attachmentUrl,
//             userId: req.userId,
//         });
//
//         res.status(201).json({ msg: 'Product Created Successfully' });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// };

export const updateProduct = async(req, res) =>{
    // try {
    //     const product = await Product.findOne({
    //         where:{
    //             uuid: req.params.id
    //         }
    //     });
    //     if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
    //     const {name, price} = req.body;
    //     if(req.role === "admin"){
    //         await Product.update({name, price},{
    //             where:{
    //                 id: product.id
    //             }
    //         });
    //     }else{
    //         if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
    //         await Product.update({name, price},{
    //             where:{
    //                 [Op.and]:[{id: product.id}, {userId: req.userId}]
    //             }
    //         });
    //     }
    //     res.status(200).json({msg: "Product updated successfuly"});
    // } catch (error) {
    //     res.status(500).json({msg: error.message});
    // }
}

export const deleteProduct = async(req, res) =>{
    // try {
    //     const product = await Product.findOne({
    //         where:{
    //             uuid: req.params.id
    //         }
    //     });
    //     if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
    //     const {name, price} = req.body;
    //     if(req.role === "admin"){
    //         await Product.destroy({
    //             where:{
    //                 id: product.id
    //             }
    //         });
    //     }else{
    //         if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
    //         await Product.destroy({
    //             where:{
    //                 [Op.and]:[{id: product.id}, {userId: req.userId}]
    //             }
    //         });
    //     }
    //     res.status(200).json({msg: "Product deleted successfuly"});
    // } catch (error) {
    //     res.status(500).json({msg: error.message});
    // }
}




