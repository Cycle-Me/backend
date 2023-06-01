import Users from "../models/user_model.js";
import argon2 from "argon2";
import {response} from "express";


export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({

        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
        console.log(error)
    }
}

export const getUserById = async(req, res) => {
    try {
        const users = await Users.findOne({
            attributes:['uuid','name','email','role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
        console.log(error)
    }
}

export const createUser = async(req, res) =>{
    const {name, email, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Register Berhasil, data telah dimasukan ke database"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
