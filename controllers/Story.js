import User from "../models/UserModel.js";
import Story from "../models/StoryModel.js";
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
    const {description} = req.body;
    let imageUrl = '';

    if (req.file && req.file.cloudStoragePublicUrl) {
        imageUrl = req.file.cloudStoragePublicUrl
    }

    try {

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


export const editStories = async(req, res) =>{
    try {
        const story = await Story.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!story) return res.status(404).json({msg: "Story tidak ditemukan!"});
        const {description, attachment} = req.body;
        if(req.role === "admin"){
            await Story.update({description, attachment},{
                where:{
                    id: story.id
                }
            });
        }else if (req.role === "user"){
            if(req.userId !== story.userId) return res.status(403).json({msg: "Servis tidak bisa diakses!"});
            await Story.update({description, attachment},{
                where:{
                    [Op.and]:[{id: story.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Your Story has been updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteStories = async(req, res) =>{
    try {
        const story = await Story.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!story) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {description, attachment} = req.body;
        if(req.role === "admin"){
            await Story.destroy({
                where:{
                    id: story.id
                }
            });
        }else if (req.role === "user"){
            if(req.userId !== story.userId) return res.status(403).json({msg: "Servis tidak bisa diakses!"});
            await Story.destroy({
                where:{
                    [Op.and]:[{id: story.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Your Story has been deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}




