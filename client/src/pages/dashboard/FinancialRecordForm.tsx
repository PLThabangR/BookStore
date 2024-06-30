import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFinancialRecords } from '../../contexts/financialRecord';



const FinancialRecordForm = () => {
  //Setup the state
  const [description,setDescrition]=useState<string>('')
  const [amount,setAmount]=useState<string>('')
  const [category,setCategory]=useState<string>('')
  const [paymentMethod,setPaymentMethod]=useState<string>('')

  //Call the custom hook
  const {addRecord}= useFinancialRecords()

  //USe the clerk hook to get user id
  const {user} = useUser();
  
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  //Handle submit method
  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
   const finalDate = getDate()

    //Data
    const newRecord={
      userId:user?.id ?? "", //If this Id is empty we put a empty string
      date: finalDate,
      description: description,
      //Convert amount to a float
      amount:parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod
    }
    console.log(newRecord)
    //pass info to the database by calling addRecord function
    addRecord(newRecord)
    window.location.reload();
    clearForm()
}

const clearForm =()=>{
setAmount("")
setCategory("")
setDescrition("")
setPaymentMethod("")
}
  return (
    <>
         <Form onSubmit={handleSubmit}>
      <FloatingLabel
      controlId='description'
      label="Description"
      className='mb-3'
      >
        <Form.Control type="text" placeholder="Enter description" required value={description} onChange={(e)=>setDescrition(e.target.value)}/>
        
        </FloatingLabel>

        <FloatingLabel
      controlId='amount'
      label="Amount"
      className='mb-3'
      >
        <Form.Control type="number" placeholder="Amount" required value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      </FloatingLabel>
      
      <Form.Select aria-label="Default select example" value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option>Category</option>
      <option value="Food">Food</option>
      <option value="Rent">Rent</option>
      <option value="Salary">Salary</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Other">Other</option>
    </Form.Select>
    <br></br>
   
    <Form.Select aria-label="Default select example"value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
      <option>Payment Method</option>
      <option value="Food">Credit Card</option>
      <option value="Rent">Cash</option>
      <option value="Salary">Bank Transfer</option>
      
   

    </Form.Select>

      <br></br>

      <Button className="btn btn-success" type="submit">
        Add record
      </Button>
    </Form>
    <br></br>
    </>
  )
}

export default FinancialRecordForm