import React from 'react'
import TextField from '@mui/material/TextField';


function SignupStep1() {
  return (
    <div className="signup-form-box1"> 
      <div className="signup-form-box2">

      <TextField
          
          id="filled-required1"
          label=" Email"
          type="email"
          variant="filled"
          color="info"
        />
        <TextField
          
          id="filled-required2"
          label="Password"
          type="password"
          variant="filled"
          color="info"
        />
      <TextField
          id="filled-password-input3"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          color="info"
        />
        <div>
          <h5 className='signup-form-wrong'>* wronghasdad</h5>
          <h5 className='signup-form-wrong'>* wronghasdad</h5>
          <h5 className='signup-form-wrong'>* wronghasdad</h5>
          <h5 className='signup-form-wrong'>* wronghasdad</h5>
          <h5 className='signup-form-wrong'>* wronghasdad</h5>
        </div>
        <TextField
          id="filled-password-input3"
          label="Phone"
          type="phone"
          autoComplete="current-password"
          variant="filled"
          color="info"
        />
      </div>
    </div>
  )
}

export default SignupStep1