import dotenv from 'dotenv'
dotenv.config({path:'./.env'})

const PORT = process.env.PORT
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const ENVIRONMENT_MODE = process.env.ENVIRONMENT_MODE


export {
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    ENVIRONMENT_MODE,

}