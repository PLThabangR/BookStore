import { useFinancialRecords } from "../../contexts/financialRecord"
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

const FinancialList = () => {
  //use FinancialRecords
  const {records} = useFinancialRecords()
  const navigate = useNavigate();

  const updateRecords=()=>{
    //Navigate to update /
    navigate("/")
  }
  //USe this function to render data
  const  tableData=records.map(a=>{ 
    return <tr key={a._id}>
            <td>{a.description}</td>
            <td>{a.date}</td>
            <td>R{a.amount}</td>
            <td>{a.category}</td>
            <td>{a.paymentMethod}</td>  
            <td> <Link to={`/updateTask/${a._id}`}><button type="button" className="btn btn-outline-info"onClick={()=>null}>Edit</button></Link></td>
           <td> <button type="button" className="btn btn-outline-danger"onClick={()=>null}>Delete</button></td>
          </tr>
    
  })
  return (
    <>
    <Table className="table table-striped" >
        <thead>
          <tr>
            
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        
        </tbody>
      </Table>
      
    
    </>
  )
}

export default FinancialList