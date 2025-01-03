const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: String, required: true },
}); 

const ChatModel = new model("Chat", chatSchema);

module.exports = ChatModel;