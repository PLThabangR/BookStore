import React, { Children, createContext, useState } from "react";

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


//Create context
export const FinancialRecordContext = createContext<FinancialRecordContextType| undefined>(undefined);

//We are now creating a component that will our provider
export const FinancialRecordProvider({children,} :{children:React.ReactNode;}) =>{
    //Create states
    ///This is the method in react we use to create a State
    const [records,setRecord] = useState<FinancialRecord[]>([]);

    //Create the function to  Create new record 
const addRecord = (record:FinancialRecord) =>{

}
    return (<FinancialRecordContext.Provider value={{records,addRecord}}>
        {""}
        {children}
    </FinancialRecordContext.Provider>)
}


//Create a custom hook to use the provider
