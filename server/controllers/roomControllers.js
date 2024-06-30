const Room = require("../models/roomModel")

module.exports.getRoomData = async (req, res, next) => {
    try {
        console.log(req.params.data);
        const rooms = await Room.find({"Room Type": req.params.data});
        console.log(rooms);
        return res.json(rooms);
    } catch (error) {
        next(error);
    }
}