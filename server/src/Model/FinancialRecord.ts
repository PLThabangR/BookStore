import mongoose from "mongoose";
//Create userRecord interface
interface FinancialRecord{
    userId:string;
    date:Date;
    description:string;
    category:string;
    paymentMethod:string;
}

//Schema
const financeRecoordSchema= new mongoose.Schema({

})