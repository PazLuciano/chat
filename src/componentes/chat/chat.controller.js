

const chatModel = require('./chat.model')

async function addChat(users){
    try {
        if(users?.users && Array.isArray(users.users)){
            console.log(users);
            const chat = await chatModel.create(users)
            console.log('chaat', chat);
            return chat
        }
        return false

    } catch (error) {
        return false
    }
}

async function getChats(){
    try {
        const chats = await chatModel.find().populate('users')
        return chats
    } catch (error) {
        console.log(error);  
    }
}

async function getChat(id){
    try {
        const chat = await chatModel.find({
            _id : id
        }).populate('users')
        return chat
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = {
    addChat,
    getChat,
    getChats
}