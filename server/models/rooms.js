"use strict";

const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, default: 0 },
    size: { type: Number, default: 0 },
    capacity: { type: Number, default: 0 },
    pets: { type: Boolean, default: false },
    breakfast: { type: Boolean, default: false },
    featured: { type: String, default: false },
    description: { type: String, default: "No description" },
    extras: [String],
    images: [String]
}, {
    versionKey: false
});

const Model = mongoose.model('Room', roomSchema);
module.exports = Model;

