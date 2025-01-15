import {ENVIRONMENT_MODE, PORT} from './constants.js'
import {app} from './app.js'
import { connectDB, sequelize } from './config/db.js';


//connect db
connectDB();

//sync DB
if(ENVIRONMENT_MODE === "DEV"){
    async () => {
        await sequelize.sync({alter:true})
        console.log("database synchronized");
        
    }
}

app.listen(PORT, ()=>{
    console.log("Server is listening");
})