import dotenv from "dotenv"
import {app} from "./app.js"
import connectDB from "./db/index.js"

dotenv.config()

connectDB()
.then(()=>{
       app.on("error",(error)=>{
           console.log("he server connection error : ",error)
           throw error
       })

      const port =process.env.PORT || 5000;
      app.listen( port,()=>{
           console.log(` the server is running at the port : ${port}`)
       })
})
.catch((error)=>{
    console.log("MONGO db connection failed !!! ",error);
})