const express = require('express');

const  { mongoDBconnection } = require('./src/database/mongo.config')
const messageRoutes = require('./src/componentes/message/messages.router')
const userRoutes = require('./src/componentes/usuarios/user.router')
const chatRoutes = require('./src/componentes/chat/chat.router')


const app = express()
const PORT = 3000;
app.use(express.json())
app.use(express.urlencoded({extended : false}))

const conectDB = async () => {
    await mongoDBconnection()
}

conectDB()

app.use('/message', messageRoutes)
app.use('/user', userRoutes)
app.use('/chat', chatRoutes)

app.use('/', (req, res) => {
    res.status(404).json({
        ok : false,
        message : 'notfound'
    })
})





app.listen(PORT, (req, res) => {
    console.log(`Corriendo por el puerto ${PORT}`);
})