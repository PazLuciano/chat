

const { connect } = require('mongoose');

const configConnection = {
    url : 'mongodb://127.0.0.1:27017/prueba',
    options : {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }
}

const mongoDBconnection = async () => {
    try {
        await connect(configConnection.url, configConnection.options);
        console.log('Estamos conectados!!');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    configConnection,
    mongoDBconnection
}