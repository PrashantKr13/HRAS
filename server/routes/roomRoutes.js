const {getRoomData} = require("../controllers/roomControllers")
const router = require("express").Router();

router.get("/roomData/:data", getRoomData);

module.exports = router;