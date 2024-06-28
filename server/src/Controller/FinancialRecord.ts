import express,{Request,Response} from "express";
import FinancialRecordModel from "../Model/FinancialRecord";



export const addRecord =async()=>{
 


}

export const getRecords =async(req:Request,res:Response)=>{
    
try{
    //Grab the user ID
    const userID = req.params.userID
    //Find all record in the financial model by user id
    const records = await FinancialRecordModel.find({userId:userID})
   //If the array is eqauls to zero 
    if(records.length===0){
        return res.status(404).send(
            "No records found"
        )
    }
    //IF record is found return this
   res.status(200).send(records)


}catch(err){
    res.status(500).send(err);
}

}










