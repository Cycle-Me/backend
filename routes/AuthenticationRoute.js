import express from "express";
import {Login,Logout,Me} from "../controllers/Authentication.js"

const router = express.Router();

router.get('/me', Me);
router.post('/Login', Login);
router.delete('/Logout', Logout);

export default router;



