const mongoose = require("mongoose");

const msgModel = new mongoose.Schema({
    sendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Msg = mongoose.model("Msg", msgModel);

module.exports = { Msg };