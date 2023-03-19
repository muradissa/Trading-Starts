import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function SignupStep1() {

  const [formEmail, setEmail] = useState("");
  const [formPassword1, setPassword1] = useState('');
  const [formPassword2, setPassword2] = useState('');
  const [formPhone, setPhone] = useState('');
  const [value, setValue] = useState()

  const setTextEmail = (event)=> {
    setEmail(event.target.value)
  }
  const setTextPassword1 = (event)=> {
    setPassword1(event.target.value)
  }
  const setTextPassword2 = (event)=> {
    setPassword2(event.target.value)
  }
  const setTextPhone= (event)=> {
    setPhone(event.target.value)
  }
  
  
  const checkEmail = () => {
    if(isEmailValid(formEmail)){

    }
  }
  
  function isEmailValid(email) {
    // Regular expression to validate email address format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isNumeric(str) {   
    if (str == null || str.length === 0) 
      return false;  
    for (let i = 0; i < str.length; i++) 
      if (isNaN(parseInt(str[i]))) 
        return false;   
    return true;
  }

  const checkPasswords = () =>{
    if(formPassword1 === formPassword2)   
      if(containsNumbers(formPassword1))  
        if(containsSpecialChars(formPassword1))  
          if(formPassword1.length >=10) 
            if(containsUppercase(formPassword1) && containsLowercase(formPassword1))
              return true;
    return false; 
  }
  function containsNumbers(str) {
    return /\d/.test(str);
  }
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  function containsLowercase(str) {
    return /[a-z]/.test(str);
  }
  function contains10Characters(str) {
    return str.length >=10;
  }

  return (
    <div className="signup-form-box1"> 
      <div className="signup-form-box2">
        <TextField  
          id="filled-required1"
          label=" Email"
          type="email"
          name="email"
          // autoComplete="email"
          variant="filled"
          color="info"
          onChange={setTextEmail}
        />
        <TextField
          
          id="filled-required2"
          label="Password"
          type="password"
          variant="filled"
          color="info"
          onChange={setTextPassword1}
        />
        <TextField
          id="filled-password-input3"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          color="info"
          onChange={setTextPassword2}
        />
        <div>
          <h5 className='signup-form-wrong' style={{color:isEmailValid(formEmail)?"green":"#cc0000"}}>
            * Valid email 
          </h5>
          <h5 className='signup-form-wrong' style={{color:contains10Characters(formPassword1)?"green":"#cc0000"}}>
            * At least 10 characters 
          </h5>
          <h5 className='signup-form-wrong' style={{color:(containsUppercase(formPassword1)&&containsLowercase(formPassword1))?"green":"#cc0000"}}>
            * A mixture of both uppercase and lowercase letters
          </h5>
          <h5 className='signup-form-wrong' style={{color:containsNumbers(formPassword1)?"green":"#cc0000"}}>
            * A mixture of letters and numbers 
          </h5>
          <h5 className='signup-form-wrong' style={{color:containsSpecialChars(formPassword1)?"green":"#cc0000"}}>
            * Inclusion of at least one special character, e.g., ! @ # ? "
          </h5>
          <h5 className='signup-form-wrong' style={{color:(formPassword1===formPassword2)&&formPassword2!==""?"green":"#cc0000"}}>
            * The 2 password is not the same
          </h5>
        </div>
        <TextField
          id="filled-password-input3"
          label="Phone"
          type="phone"
          autoComplete="current-password"
          variant="filled"
          color="info"
          onChange={setTextPhone}
        />
        {/* <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}/> */}
      </div>
    </div>
  )
}

export default SignupStep1




/**
 * material ui phone number with country code
import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { PhoneInput } from "material-ui-phone-number";

const countries = [
  { code: "+1", label: "United States" },
  { code: "+44", label: "United Kingdom" },
  { code: "+91", label: "India" },
  // Add more countries as needed
];

function PhoneInputWithCountryCode() {
  const [country, setCountry] = useState(countries[0]);

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  return (
    <PhoneInput
      defaultCountry={country.code}
      regions="north-america, europe, asia"
      disableDropdown={false}
      variant="outlined"
      label="Phone number"
      fullWidth
      margin="normal"
      countrySelectProps={{
        value: country,
        onChange: handleCountryChange,
      }}
      inputProps={{
        name: "phone",
        required: true,
        autoFocus: true,
      }}
    >
      <TextField select>
        {countries.map((option) => (
          <MenuItem key={option.code} value={option}>
            {option.label} ({option.code})
          </MenuItem>
        ))}
      </TextField>
    </PhoneInput>
  );
}

export default PhoneInputWithCountryCode;

 */