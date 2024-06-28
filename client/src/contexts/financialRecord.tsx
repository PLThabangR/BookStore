import React, { createContext, useContext, useState } from "react";

//Create userRecord interface
interface FinancialRecord{
    id?:string; //This id comes from the mongoDB thats y we make it optional
    userId:string;
    date:Date;
    description:string;
    amount:number
    category:string;
    paymentMethod:string;
}
//My context is based on this interface
interface FinancialRecordContextType{
    records:FinancialRecord[]; //This array holds multiple financial records
    addRecord:(record:FinancialRecord) => void //We use this function to send data to the backend it returns void
  //  updateRecord:(id:string,newRecord:FinancialRecord) => void //Its partial becase we wont send the id for mongo DB
   // deleteRecord:(id:string) => void
}


//Create context based on Financial Record type
export const FinancialRecordContext = createContext<FinancialRecordContextType| undefined>(undefined);

//We are now creating a component that will be our provider
export const FinancialRecordProvider({children}:{children:React.ReactNode;}) =>{
    //Create states
    ///This is the method in react we use to create a State
    const [records,setRecord] = useState<FinancialRecord[]>([]);

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
            const newRecord = await response.json();//Get the response in json format
            setRecord(prev =>[...prev,newRecord]) //Update the records array
        }


    }catch(err){
            console.log("No data Return from the promise")
    }



}
    return (<FinancialRecordContext.Provider value={{records,addRecord}}>
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
