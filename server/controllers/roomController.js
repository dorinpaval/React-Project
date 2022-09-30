const Room = require('../models/rooms');
const { ObjectId } = require('mongodb');



exports.addRoom = async (req, res, next) => {
    const room = await new Room(req.body).save();
    res.status(200).json(room);
};

exports.deleteRoom = async (req, res, next) => {
    let room = await Room.findById(new ObjectId(req.body.roomId));
    if (room) {
        if (req.body.roomId === room._id.toString()) {
            console.log("fafa", req.body.roomId,"\n",room._id.toString());
            await Room.findByIdAndDelete(new ObjectId(req.body.roomId));
            res.send("Deleted")
        }
    }
    else res.send("Try again");
}