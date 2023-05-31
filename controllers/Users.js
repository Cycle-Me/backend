import Users from "../models/user_model.js";
import bcrypt from "bcrypt";
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error)
    }
}

export const register = async(req, res) => {
    const {name, email, password, confPassword} = req.body;
    if (password !== confPassword) return res.status(400).json
}
