import {useUser} from "@clerk/clerk-react"
import FinancialList from "./FinancialList"
import FinancialRecordForm from "./FinancialRecordForm"


const Dashboard = () => {
    //Access user details using one of the clerks hooks
    const {user} = useUser()
  return (
    <div className="dashboard-container">
        <div className="div"><h1>Welcome {user?.firstName}! here are your finances</h1></div>
       
       <FinancialRecordForm/>
       <FinancialList/>
      
       
       
    
    </div>
  )
}

export default Dashboard