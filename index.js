import {PORT} from './constants.js'
import {app} from './app.js'


app.listen(PORT, ()=>{
    console.log("Server is listening");
    
})