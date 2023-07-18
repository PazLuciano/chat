
const { model } = require('mongoose')
const messageModel = require('./messages.model')


function addMessage(user, message, chat){
    return new Promise((response, reject) => {
        if (!user || !message || !chat) {
            reject('Falta user o message')
        }else {
            const messageComplete = {
                user, 
                message,
                chat,
                date : new Date()
            }
            messageModel.create(messageComplete)
            response(messageComplete)
        }
    })
}

async function getMessages(){
    try {
        const messages = await messageModel.find().populate('user')
        return messages
    } catch (error) {
        console.log('error l27',error);
    }
}

async function getIdMessage(id){
    try {
        const message = await messageModel.find({_id  : id}).populate('user')
        // console.log(message); 
        return message
    } catch (error) {
     console.log(error.message); 
     return false
    }
}

async function getMessagesByUser(user){
try {
    const messages = await messageModel.find({user : user}).populate('user')
    return messages
} catch (error) {
    console.log(error);
}
}

async function getMessagesByChat(chat){
    try {
        const messages = await messageModel.find({chat : chat}).populate('user')
        return messages
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getMessagesByChat,
    addMessage,
    getMessages,
    getIdMessage,
    getMessagesByUser
}