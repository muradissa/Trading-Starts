
import React, { useState, useMemo } from 'react';
import { ColorModeContext, tokens } from "../../theme";

// import Select from 'react-select'
import countryList from 'react-select-country-list'
import 'moment-timezone';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import LockIcon from '@mui/icons-material/Lock';
import ChangeEmailDialog from './ChangeEmailDialog';
import ChangePasswordDialog from './ChangePasswordDialog';
import ChangePhoneDialog from './ChangePhoneDialog';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('')
  const options = useMemo(() => countryList().getData(), []);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)
  // Dialogs
  const [openPhoneDialog, setOpenPhoneDialog] = React.useState(false);
  const [openEmailDialog, setOpenEmailDialog] = React.useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = React.useState(false);



  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  
  function handleSave() {
    setLoading(true);
  }
  function handleSave2() {
    setLoading(true);
  }

  const handleClickOpenEmailDialog = () => {
    setOpenEmailDialog(true);
  };
  const handleCloseEmailDialog = () => {
    setOpenEmailDialog(false);
  };

  const handleClickOpenPasswordDialog = () => {
    setOpenPasswordDialog(true);
  };
  const handleClosePasswordDialog = () => {
    setOpenPasswordDialog(false);
  };

  const handleClickOpenPhoneDialog = () => {
    setOpenPhoneDialog(true);
  };
  const handleClosePhoneDialog = () => {
    setOpenPhoneDialog(false);
  };

  return (
    <div variant="p-dark">
      
          <Grid container  direction="row" spacing={3} style={{paddingTop:"5vh" ,}}>
            <Grid item xs={0} md={3}/>   
            <Grid item xs={12} md={3}>    
              <TextField
                margin="normal"
                fullWidth
                required       
                id="firstName"
                label="* First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                color="info"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="normal"
                fullWidth
                required      
                id="lstaName"
                label="* last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                color="info"
              />
            </Grid>
            
          </Grid>
          <Grid container  direction="row" spacing={3} style={{paddingTop:"1vh"}} >
            <Grid item xs={0} md={3}/>   
            <Grid item xs={12} md={2}>    
              <TextField
                margin="normal"
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2000-01-31"
                fullWidth
                color="info"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>    
              <FormControl fullWidth margin="normal" color="info">
                <InputLabel id="demo-simple-select-label"> Gender </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
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
            </Grid>
            <Grid item xs={12} md={2}>
            <FormControl fullWidth margin="normal" color="info">
              <InputLabel id="demo-simple-select-label2">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                  id="demo-simple-select2"
                  value={country}
                  label="Country"
                  onChange={handleChangeCountry}
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
            </Grid>
          </Grid>
          <Grid container  direction="row" spacing={3} style={{paddingTop:"1vh" ,}}>
            <Grid item xs={0} md={3}/>   
            <Grid item xs={12} md={2}>
              <TextField
                margin="normal"
                fullWidth
                required      
                id="city"
                label="* City"
                name="city"
                autoComplete="city"
                autoFocus
                color="info"
              />
            </Grid>
            <Grid item xs={12} md={2}>    
              <TextField
                margin="normal"
                fullWidth
                required       
                id="address1"
                label="* Address 1"
                name="address1"
                autoComplete="address1"
                autoFocus
                color="info"
              />
            </Grid>
            <Grid item xs={12} md={2}>    
              <TextField
                margin="normal"
                fullWidth
                required       
                id="address2"
                label="* Address 2"
                name="address2"
                autoComplete="address2"
                autoFocus
                color="info"
              />
            </Grid>    
          </Grid>
          <Grid container  direction="row" spacing={3} style={{paddingTop:"3vh" ,}} justifyContent="center" alignItems="center">
            <Grid item xs={0} md={2}/>
            <Grid item xs={0} md={3}  >
           
              <Button
                color="secondary"
                onClick={handleSave}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                
                >
                Save
              </Button> 
               
            </Grid>    
          </Grid>    
          <Grid container  direction="row"  style={{paddingTop:"5vh" ,}}>
            <Grid item xs={0} md={3}/>
            <Grid item xs={12} md={3}>  
              <TextField
                  margin="normal"
                  fullWidth
                  required       
                  id="phone"
                  label="* Phone Number"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  color="info"
                  disabled="false"   
                />
            </Grid>
            <Grid item xs={6} md={2} justifyContent="center" alignItems="center" display="-webkit-inline-box;">    
              <Button
                color="secondary"
                onClick={handleClickOpenPhoneDialog}
                loading={loading}
                loadingPosition="start"
                variant="contained"
                          
                >
                Change Phone 
              </Button>                
            </Grid>
          </Grid>   
          <Grid container  direction="row"  style={{paddingTop:"1vh" ,}}>
            <Grid item xs={0} md={3}/>   
            <Grid item xs={12} md={3} >
              <TextField
                margin="normal"
                fullWidth
                required      
                id="email"
                label="* Email"
                name="email"
                disabled="false" 
                // autoComplete="email"
                autoFocus
                color="info"
              />
            </Grid>
            <Grid item xs={6} md={2} justifyContent="center" alignItems="center" display="-webkit-inline-box;">    
              <Button
                color="secondary"
                onClick={handleClickOpenEmailDialog}
                loading={loading}
                loadingPosition="start"
                variant="contained"             
                >
                Change Email
              </Button>                
            </Grid> 
              
          </Grid>
          <Grid container  direction="row"  style={{paddingTop:"1vh" ,}}>
            <Grid item xs={0} md={3}/>
            <Grid item xs={12} md={3}>  
              <TextField
                  margin="normal"
                  fullWidth
                  required       
                  id="password"
                  label="* Password"
                  name="password"
                  // autoComplete="password"
                  autoFocus
                  color="info"
                  disabled="false"
                  value="***************" 
                />
            </Grid>
            <Grid item xs={6} md={2} justifyContent="center" alignItems="center" display="-webkit-inline-box;">    
              <Button
                color="secondary"
                onClick={handleClickOpenEmailDialog}
                loading={loading}
                loadingPosition="start"
                // startIcon={<SaveIcon />}
                variant="contained"             
                >
                Change Password
              </Button>                
            </Grid>           
          </Grid>
          
          <ChangeEmailDialog 
            openEmailDialog={openEmailDialog}
            handleCloseEmailDialog={handleCloseEmailDialog}  
          />
          <ChangePasswordDialog 
            openPasswordDialog={openPasswordDialog}
            handleClosePasswordDialog={handleClosePasswordDialog}
          />
          <ChangePhoneDialog 
            openPhoneDialog={openPhoneDialog}
            handleClosePhoneDialog={handleClosePhoneDialog}
          />
        

    </div>

  );
};


export default GeneralInfoForm;