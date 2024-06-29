import { useFinancialRecords } from "../../contexts/financialRecord"
import Table from 'react-bootstrap/Table';

const FinancialList = () => {
  const {records} = useFinancialRecords()
  const  tableData=records.map(a=>{ 

    return <tr key={a._id}>
            <td>{a.description}</td>
            <td>{a.date}</td>
            <td>R{a.amount}</td>
            <td>{a.category}</td>
            <td>{a.paymentMethod}</td>  
          </tr>
    
  })
  return (
    <>
    <Table striped bordered hover variant="dark">
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