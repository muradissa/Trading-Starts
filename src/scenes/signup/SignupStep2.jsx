import React from 'react'
import TextField from '@mui/material/TextField';

function SignupStep2() {
  return (
    <div className="signup-form-box1"> 
      <div className="signup-form-box3">
        <div className="signup-form-box4">
          <TextField   
            id="filled-required4"
            label="First Name"
            type="Name"
            variant="filled"
            color="info"
          />
          <TextField   
            id="filled-required5"
            label="Last Name"
            type="Name"
            variant="filled"
            color="info"
          />
        </div>
        <div className="signup-form-box5">
          <TextField   
            id="filled-required4"
            label="Birthday"
            type="Name"
            variant="filled"
            color="info"
          />
          <TextField   
            id="filled-required5"
            label="Gender"
            type="city"
            variant="filled"
            color="info"
          />
          <TextField   
              id="filled-required4"
              label="Country"
              type="Name"
              variant="filled"
              color="info"
            />
        </div>
        
        {/* <div className="signup-form-box5">
          
         
        </div> */}
        <div className="signup-form-box5">
           <TextField   
            id="filled-required5"
            label="City"
            type="city"
            variant="filled"
            color="info"
          />
          <TextField   
            id="filled-required4"
            label="Address1"
            type="address"
            variant="filled"
            color="info"
          />
          <TextField   
            id="filled-required5"
            label="Address2"
            type="address"
            variant="filled"
            color="info"
          />
        </div>
      </div>
    </div>
  )
}

export default SignupStep2