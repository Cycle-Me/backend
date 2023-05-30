// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Capstone Cycle-Me' });
// });
//
// module.exports = router;


import express from "express";
import {getUsers} from "../controllers/Users.js";
const router = express.Router();

router.get('/users', getUsers);

export default router;
