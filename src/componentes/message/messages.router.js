
const { Router } = require('express')
const controller = require('./messages.controller')
const route = Router()



route.get('/', async (req, res) => {
    const { chat, user } = req.query
    if(user){
        const messages = await controller.getMessagesByUser(user)
        console.log(messages);
        if(!messages || messages.length == 0){
            return res.json({ ok : false, messages : 'There isnt message with that user'})
        }
        return res.json({ok : true, messages})
    }
    if(chat){
        const messages = await controller.getMessagesByChat(chat)
        if(!messages || messages.length == 0){
            return res.json({ ok : false, messages : 'There isnt message with that chat'})
        }
        console.log(messages);
        return res.json({ok : true, messages})
    }
    const messages = await controller.getMessages()
    res.json({
        ok : true, 
        messages,
    })

})

route.post('/', (req, res) => {
    const body = req.body
    controller.addMessage(body.user, body.message, body.chat)
    .then((re) => { 
        console.log('devuelve:', re)
        return res.json({
            ok : true, message : 'message added correctly'
    })
    })
    .catch((e) => {
        return res.json({
            ok : false,
            error : e
        })
    })
    // if(message){
    //     return res.json({ ok : true, message : 'message added correctly'})
    // }
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;
    const message = await controller.getIdMessage(id)
    if(!message) return res.json({ok : false, message : 'could not find message with that id'})
    res.json({
        ok : true,
        message
    })
})

route.get('/user/:user', async (req, res) => {
    const { user } = req.params;
    const messages = await controller.getMessagesByUser(user)
    if(messages.length == 0){
        return res.json({ ok : false, messages : 'There isnt message with that user'})
    }
    res.json({ok : true, messages})
})






module.exports = route