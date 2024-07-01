import {useUser} from "@clerk/clerk-react"
import FinancialList from "./FinancialList"
import FinancialRecordForm from "./FinancialRecordForm"
import { useFinancialRecords } from "../../contexts/financialRecord"
import Navbar from "./Navbar"


const Dashboard = () => {
    //Access user details using one of the clerks hooks
    const {user} = useUser()
    const {records} = useFinancialRecords()
    let totalAmount=0;
     records.forEach((record)=>{
      totalAmount+=record.amount;
    })
     
  return (
    <div className="dashboard-container">
      
      
        <div className="div"><h1>Welcome {user?.firstName}! here are your finances</h1></div>
       
       <FinancialRecordForm/>
       <FinancialList/>
      <p>Total amount spent :<b> R{totalAmount} </b> </p>
       
       
    
    </div>
  )
}

export default Dashboard