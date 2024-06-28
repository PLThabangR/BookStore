import express,{Express} from "express";
import mongoose from "mongoose";
import { financialRouter } from "./Routes/financialRecord";

//Instace of express
const app : Express = express()
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json())

//MongoDB connection using vsCode url
const  mongoURl :string = "mongodb+srv://thabang:thabang@finance.0snlwxc.mongodb.net/"

// Using VsCode url to connect with mongo DB
//mongoose.connect(mongoURl).then(()=> console.log("Connected to MONGODB")).catch((err)=>console.log("Cannot connect to MONGODB",err))

app.use("/Financial-Records",financialRouter)
app.listen(port,()=>{
    console.log(`Server running on por ${port}`)
})