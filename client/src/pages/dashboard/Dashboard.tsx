import {useUser} from "@clerk/clerk-react"

const Dashboard = () => {
    //Access user details using one of the clerks hooks
    const {user} = useUser()
  return (
    <div className="dashboard-container">
        <div className="div"><h1>Welcome {user?.firstName}! here are your finances</h1></div>
        <div className="div"></div>
    </div>
  )
}

export default Dashboard