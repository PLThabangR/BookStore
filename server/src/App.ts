import express,{Express} from "express";
import mongoose from "mongoose";
import { financialRouter } from "./Routes/financialRecord";
import cors from "cors"

//Instace of express
const app : Express = express()
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json())
app.use(cors())

//MongoDB connection using vsCode url
const  mongoURl :string = "mongodb+srv://thabang:thabang@finance.0snlwxc.mongodb.net/"

// Using VsCode url to connect with mongo DBc
mongoose.connect(mongoURl).then(()=> console.log("Connected to MONGODB")).catch((err)=>console.log("Cannot connect to MONGODB",err))

app.use("/financial-records",financialRouter)
app.listen(port,()=>{
    console.log(`Server running on por ${port}`)
})