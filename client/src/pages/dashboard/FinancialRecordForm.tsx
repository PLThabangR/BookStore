import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const FinancialRecordForm = () => {
  //Setup the state
  const [description,setDescrition]=useState<string>('')
  const [amount,setAmount]=useState<string>('')
  const [category,setCategory]=useState<string>('')
  const [paymentMethod,setPaymentMethod]=useState<string>('')

  //USe the clerk hook to get user id
  const {user} = useUser();
  console.log(user.id)

  //Handle submit method
  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    //Data
    const newRecord={
      userId:user?.id,
      date: new Date(),
      description: description,
      //Convert amount to a float
      amount:parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod
    }
    console.log(newRecord)
    //pass info to the database by calling addRecord function
    //AddRecord(newRecord)
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" placeholder="Enter description" required value={description} onChange={(e)=>setDescrition(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Amount:</Form.Label>
        <Form.Control type="number" placeholder="Amount" required value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      </Form.Group>
      
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

      <Button variant="primary" type="submit">
        Add record
      </Button>
    </Form>
    
    </>
  )
}

export default FinancialRecordForm