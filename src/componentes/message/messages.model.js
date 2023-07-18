
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const messageSchema = new Schema ({
    user : {
        type : Schema.ObjectId,
        ref : 'Users',
        required : true
    },
    message : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        required : true,
    },
    chat : {
        type : Schema.ObjectId,
        ref: 'Chats',
        required : true
    }
})


const messageModel = mongoose.model('Message', messageSchema)

module.exports = messageModel;