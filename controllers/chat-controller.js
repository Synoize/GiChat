const ChatModel = require('../models/chat-model');

const chatPost = async (req, res) =>{
    try {
        const response = req.body;
        await ChatModel.create(response);
        if(response){
            console.log("message send successful");
        }
        return res.status(200).json({ message: "message send successful"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "message not delivered"});
    }
}

 
// Get All Chats Logic
const chatView = async( req, res) =>{
    try {
        const chat = await ChatModel.find();
        console.log(chat);
        
        if(!chat || chat.length === 0){
            return res.status(404).json({message: "No Chats Found"});
        }
        return res.status(200).json(chat);
    } catch (error) {
        next(error);
    }
}


// User Delete Logic
const deleteChatById = async(req, res) => {
    try {
        const id = req.params.id;
        await ChatModel.deleteOne({_id: id});
        return res.status(200).json({message: "Chat Deleted Successfully"});
    } catch (error) {
        next(error);
    }
}

module.exports = {chatPost, chatView, deleteChatById};