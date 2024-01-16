import { useState } from 'react'
import './App.css'

function App() {


  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmit(true);
    if(field.firstName!="" && field.lastName!="" && field.email!="" && field.phoneNumber!="" && field.phoneNumber.length==10){
      setValidate(true)
    }
  }


  return (
    <>
    <h1>Kalvium form</h1>
      <form className='registration-form' onSubmit={handleSubmit}>
      <div>
        {validate ? <h3>Registration Successfull</h3>:""}
      </div>
        <input id='first-name' className='form-inputs' type="text" value={field.firstName} placeholder='First name' onChange={(e)=>setField({...field, firstName:e.target.value})}/>
        {submitted == true && field.firstName == ""? <p>Enter your first name</p>:null}
        <input id='last-name' className='form-inputs' type="text" value={field.lastName} placeholder='Last name' onChange={(e)=>setField({...field, lastName:e.target.value})}/>
        {submitted == true && field.lastName == ""? <p>Enter your Last name</p>:null}
        <input id='email' className='form-inputs' type="text" value={field.email} placeholder='Email' onChange={(e)=>setField({...field, email:e.target.value})}/>
        {submitted == true && field.email == ""? <p>Enter your Email</p>:null}
        <input id='phone-number' className='form-inputs' type="text" value={field.phoneNumber} placeholder='Phone Number' onChange={(e)=>setField({...field, phoneNumber:e.target.value})}/>
        {submitted == true && field.phoneNumber == ""? <p>Enter your Phone Number</p>:null}
        {submitted == true && field.phoneNumber.length != 10? <p>Enter a valid phone number</p>:null}
        <button id='reg-btn' type='submit'> Register </button>
      </form>
    </>
  )
}

export default App
