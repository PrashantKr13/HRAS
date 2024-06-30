const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    "Room Type": String,
    "Room No": String,
    "Alloted Beds": Number,
    "Empty Beds": Number
}, {collection: "roomData_collections"});

module.exports = mongoose.model("rooms", roomSchema);