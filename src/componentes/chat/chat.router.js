const { Router } = require('express')
const controller = require('./chat.controller')


const route = Router()

route.get('/', async (req, res) => {
    const chats = await controller.getChats()
    res.json({
        ok : true,
        chats
    })
})

route.get('/:id', async (req, res) => {
    const { id } = req.params
    const chat = await controller.getChat(id)
    if(chat == false){
        return res.json({ok : false, chat : 'cannot found chat'})
    }
    res.json({ok : true, chat})
})

route.post('/', async (req, res) => {
    const users = req.body
    const chat = await controller.addChat(users)
    if(chat == false){
        return res.json({ok : false, chat : 'cannot created chat'})
    }
    res.json({ok : true, chat})
})







module.exports = route