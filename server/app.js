"use strict";
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/hotelRouters')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', userRouter);

app.use((err, req, res, next) => {
    res.status(500).json("Successful connexted");
});

mongoose.connect('mongodb://localhost:27017/pavstel')
    .then(() => {
        app.listen(3000, () => { console.log('welcome to PavStel Hotel') })
    })