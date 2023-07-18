

const userModel = require('./user.model')

async function getUsers(){
    try {
        const users = await userModel.find()
        // console.log(users);
        return users 
        
    } catch (error) {
        console.log(error);
    }
}

async function createUser(user){
    try {
        const usuario = await userModel.create(user);
        // console.log(user);
        return user
    } catch (error) {
        return false
    }
}

module.exports = {
    getUsers,
    createUser
}