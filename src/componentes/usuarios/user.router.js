const { Router } = require('express')
const controller = require('./user.controller')
const route = Router()


route.get('/', async (req, res) =>{
    const users = await controller.getUsers()
    res.json({
        ok : true,
        users
    })
})

route.post('/', async (req, res) => {
    const user = req.body
    const created = await controller.createUser(user);
    console.log(created);
    if(created){
        return res.json({ok : true, user : created})
    }
    return res.json({ ok : false, user : 'cannot created user'})
} )







module.exports = route 