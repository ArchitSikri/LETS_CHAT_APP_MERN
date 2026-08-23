const { Conversation } = require("../models/conversation.model");
const { Msg } = require("../models/MSGS.MODEL.JS");

const sendMsg = async(req,res) => {
  try{  
    const senderId = req.id;
    const receiverId = req.params.id;
    const {message} = req.body;

    let gotconversation = await Conversation.findOne({
        participants:{$all : [senderId , receiverId]},
    });

    if(!gotconversation){
        gotconversation = await Conversation.create({
            participants : [senderId , receiverId] ,
            messages : []
    })}
    const newMsg = await Msg.create({
        sendId: senderId,
        receiverId,
        message
    });
    if(newMsg){
        gotconversation.messages.push(newMsg._id)
        await gotconversation.save();
    }
    return res.status(201).json(newMsg);
  }
  catch(err){
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { sendMsg };