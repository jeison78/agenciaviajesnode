import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
//Tener acceso a los valores de la variable de entorno(dotenv)
dotenv.config()

// const db = new Sequelize('agenciaviajes', 'root', '', {
const db = new Sequelize(process.env.DATABASE_URL, {
    
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;