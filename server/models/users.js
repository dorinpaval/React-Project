"use strict";
/*eslint-disable */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: Number,
    gender: String,
    isAdmin: { type: String, default: "no" }
}, {
    versionKey: false
});

const Model = mongoose.model('User', userSchema);
module.exports = Model;

