"use strict";
/*eslint-disable */

const express = require('express');
const router = express.Router();

const roomController = require('../controllers/roomController')
const userController = require('../controllers/userController')


router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.post('/addRoom', roomController.addRoom);
//router.put('/editRoom', roomController.editRoom);
router.delete('/deleteRoom', roomController.deleteRoom);


module.exports = router;