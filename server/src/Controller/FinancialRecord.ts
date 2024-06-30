import express,{Request,Response} from "express";
import FinancialRecordModel from "../Model/FinancialRecord";



export const addRecord =async(req:Request,res:Response)=>{
 
    try{
        console.log(new Date())
        //Get the new record from the body URL
        const newRecord= req.body
        //Create new record in the database
        const record = new FinancialRecordModel(newRecord)
        //Save the record
        const saveRecord = await record.save();
        //Give user responds
        res.status(200).json({
            success:false,
            message:"Record created",
            saveRecord
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Cannot Create new record",
            err
        })
    }

}

export const getRecords =async(req:Request,res:Response)=>{
    
try{
    
    //Grab the user ID
    const userID = req.params.userID
    console.log("User id",userID)
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

export const updateRecords=async(req:Request,res:Response)=>{
    try{
       //find the record id
       const id= req.params.id;
       //This link is going Throug
       console.log("*****************")

        //Get the new record from the body URL
        const newRecord= req.body
        //Find and update record in the database
        const record = await FinancialRecordModel.findByIdAndUpdate(id,newRecord,{new:true,runValidators:true,useFindAndModify:false})
        
        //If Id is not found
        if(!record){
            return res.status(404).json({
                success:false,
                message:`Record not found`
            })
        }
        //Give user responds
        res.status(200).json({
            success:true,
            message:"Record updated",
           record
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Cannot update record",
            err
        })
    }

}

export const deleteRecord=async(req:Request,res:Response)=>{
    try{
        //find the record id
      //  const id= req.params.id;
        //Find by id and delete
        const record = await FinancialRecordModel.findById(req.params.id)
         
         //If Id is not found
         if(!record){
             return res.status(404).json({
                 success:false,
                 message:`Record not found`
             })
         }
         //Deleted the record and return the updated record
         await record.deleteOne();
         //Give user responds
         res.status(200).json({
             success:true,
             message:"Record deleted",
            record
         })
 
     }catch(err){
         res.status(500).json({
             success:false,
             message:"Cannot Create new record",
             err
         })
     }

}










