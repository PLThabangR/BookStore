import { useUser } from "@clerk/clerk-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import {toast} from "react-hot-toast";

//Create userRecord interface
interface FinancialRecord{
    _id?:string; //This id comes from the mongoDB thats y we make it optional
    userId:string;
    date:string;
    description:string;
    amount:number
    category:string;
    paymentMethod:string;
}
//My context is based on this interface
interface FinancialRecordContextType{
    records:FinancialRecord[]; //This array holds multiple financial records
    addRecord:(record:FinancialRecord) => void //We use this function to send data to the backend it returns void
    updateRecord:(id:string,newRecord:FinancialRecord) => void //Its partial becase we wont send the id for mongo DB
   deleteRecord:(id:string) => void
}


//Create context based on Financial Record type
export const FinancialRecordContext = createContext<FinancialRecordContextType| undefined>(undefined);

//We are now creating a component that will be our provider
export const FinancialRecordProvider:React.FC<{children:React.ReactNode}>=({children}) =>{
    //Grab the user id from Clerk
   const {user} =  useUser()
    //Create states
    ///This is the method in react we use to create a State
    const [records,setRecord] = useState<FinancialRecord[]>([]);//Initializing emty array

    //Ftech user records by ID
    const fetchUserRecordById =async()=>{
        //Return this if no user
        if(!user) return "No user"
          //console.log(user?.firstName)      
        const response = await fetch(`http://localhost:5000/financial-records/getRecordsByUserId/${user?.id}`) 

        try{
            if(response.ok){
                const records = await response.json()
                setRecord(records)
                console.log("User return",records)
               
            }
           
        }catch(e){
            toast.error("Cannot fetch records");
        }
    }

    //We want this function to be called on render
    useEffect(()=>{
        fetchUserRecordById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    //Implement the function to  Create new record 
const addRecord = async (record:FinancialRecord) =>{
    //Use the fetch API
   const response= await fetch("http://localhost:5000/financial-records/post",{method:"Post",
        //When sending data to a web server, the data has to be a string.
        body:JSON.stringify(record), //Convert a JavaScript object into a string with JSON.stringify()
        headers: {
            "Content-Type": "application/json",
          },
    })

    try{
        //If Response is success
        if(response.ok){
            toast.success("Record Created")
            const newRecord = await response.json();//Get the response in json format
            setRecord(prev =>[...prev,newRecord]) //Update the records array
            toast.success("Record Created")
        }
    }catch(err){
            toast.error("Cannot Create new record")
    }
}
//Update Record
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateRecord=async(id:any,newRecord:FinancialRecord)=>{
  //Return this if no user
        if(!user) return "No user"
    //Use the UpdateAPI
 const response= await fetch(`http://localhost:5000/financial-records/updateRecordByID/${id}`,{method:"PUT",
    //When sending data to a web server, the data has to be a string.
    body:JSON.stringify(newRecord), //Convert a JavaScript object into a string with JSON.stringify()
    headers: {
        "Content-Type": "application/json",
      },
})
//Handle the returned promise
try{
    //If Response is success
    if(response.ok){
        console.log("Are we reaching here")
        const newRecord = await response.json();//Get the response in json format
        setRecord(newRecord)
        toast.success("Record Updated")
    }


}catch(err){
      
        toast.error("No data Return from the promise")
}
   }
    //Delete Record
   const deleteRecord = async (id:string)=>{
      //Use the fetch API
   const response= await fetch(`http://localhost:5000/financial-records/deleteRecord/${id}`,{method:"DELETE",
})

try{
    //If Response is success
    if(response.ok){
        const deleteRecord = await response.json();//Get the response in json format
        setRecord((prev)=>prev.filter(record=> record._id!==deleteRecord._id)) //Return values which are not equal to de deleted
        toast.success("Record Deleted")
    }


}catch(err){
    toast.success("Record cannot be deleted")
}
   }

    return (<FinancialRecordContext.Provider value={{records,addRecord,updateRecord,deleteRecord}}>
        {children}
    </FinancialRecordContext.Provider>)
};


//Create a custom hook to use the provider and  make it accessable to children components
export const useFinancialRecords=()=>{
    const context = useContext<FinancialRecordContextType| undefined>(FinancialRecordContext);

    //Throw error if this hook is assed by outsider component
    if(!context){
        throw new Error(
            "Use financialRecord must be used within Financial provider"
        )
    }
    return context
}
