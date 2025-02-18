//Configuración de la base de datos a través de mongoose

const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error(error);
        throw new Error("Error al iniciar la Base de datos");
    }
};

module.exports = dbConnection;
