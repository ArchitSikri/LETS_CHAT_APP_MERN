const express = require("express");
const { sendMsg } = require("../controller/message.controller");
const isAuthenticated = require("../Middlewares/auth.middleware");


const router = express.Router();

router.route("/sendmsg/:id").post(isAuthenticated, sendMsg)

module.exports = router;