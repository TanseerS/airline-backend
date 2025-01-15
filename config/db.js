import Sequelize from 'sequelize'
import {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} from '../constants.js'


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

//authenticate
const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log("database authenticated");
    
  } catch (error) {
    console.log(error);
    
  }
}

export {sequelize, connectDB}