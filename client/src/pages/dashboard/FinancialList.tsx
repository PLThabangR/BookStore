import { useFinancialRecords } from "../../contexts/financialRecord"
import Table from 'react-bootstrap/Table';
import { Link,useNavigate } from 'react-router-dom';


const FinancialList = () => {
  //use FinancialRecords
  const {records} = useFinancialRecords()
  //use navigate
  const navigate = useNavigate()
//HandleUpdate
const handleUpdate=(id:string)=>{

      navigate(`updateRecord/${id}`)
}
 
  //USe this function to render data
  const  tableData=records.map((a,i)=>{ 
    return (
    <tr key={i}>
      <td>{i+1}</td>
           <td>{a.description}</td>
            <td>{a.date}</td>
            <td>R{a.amount}</td>
            <td>{a.paymentMethod}</td>  
            <td>{a.category}</td>
            <td><button type="button" className="btn btn-outline-info" onClick={()=>{handleUpdate(a._id)}}>Edit</button></td>
            <td> <button type="button" className="btn btn-outline-danger">Delete</button></td>
          </tr>
          )
    
  })
  return (
    <>
    <Table className="table table-striped" >
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {records.length> 0 ? tableData : <><h1>No records</h1></>}
        
        </tbody>
      </Table>
      
    
    </>
  )
}

export default FinancialList