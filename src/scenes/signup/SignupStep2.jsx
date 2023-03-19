import React,{useState,useMemo} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import countryList from 'react-select-country-list'
import { maxHeight } from '@mui/system';

function SignupStep2() {
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('')
  const options = useMemo(() => countryList().getData(), []);

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  }

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
               variant="filled"
                id="date1"
                label="Birthday"
                type="date"
                defaultValue="2000-01-31"
                fullWidth
                color="info"
                InputLabelProps={{
                  shrink: true,
                }}
            />
           
            <FormControl fullWidth  color="info">
              <InputLabel id="demo-simple-select-label"> Gender </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="filled"
                color="info"
                fullWidth
                value={gender}
                label="Gender"
                onChange={handleChangeGender}
                
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'other'}>Other</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth color="info">
              <InputLabel id="demo-simple-select-label2">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select2"
                value={country}
                label="Country"
                onChange={handleChangeCountry}
                variant="filled"
                style={{maxHeight:"30vh"}}
                
              >
                {options.map(option => {
                    return (
                      <MenuItem key={option.key} value={option.value}>
                        {option.label}
                      </MenuItem>
                    )
                  })}
              </Select>
            </FormControl>
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