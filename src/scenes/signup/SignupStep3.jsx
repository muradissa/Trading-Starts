import React,{useState} from 'react'
import TextField from '@mui/material/TextField';


function SignupStep3() {

  const [formEmailCode, setEmailCode] = useState('');

  const setTextEmailCode= (event)=> {
    setEmailCode(event.target.value)
  }

  return (
    <div className="signup-form-box1"> 
      <div className="signup-form-box2">
          <h4>Enter the code that you recevied in your email :</h4>
            <TextField
            id="filled-password-code"
            label="Code"
            type="phone"
            variant="filled"
            color="info"
            onChange={setTextEmailCode}
          />
      </div>
    </div>
  )
}

export default SignupStep3