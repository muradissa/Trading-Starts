import React , {useState} from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';


export default function StrategyRadioGroup({chooseStrategy}) {

    const [value, setValue] = React.useState('');


    const handleRadioChange = (event) => {
        setValue(event.target.value);
        chooseStrategy(parseInt(event.target.value))
    };

    return (
        <div style={{width:"100%",margin:"0 auto"}}>
            
        <FormControl>
            
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleRadioChange}
                defaultValue="1"
                // style={{background:"#aa0033"}}
                >
                <FormControlLabel value="1" control={<Radio sx={{color: "#ffffff",'&.Mui-checked': {color: "#11ffff",},}}/>} label="Strategy 1" />
                <FormControlLabel value="2" control={<Radio sx={{color: "#ffffff",'&.Mui-checked': {color: "#11ffff",},}}/>} label="Strategy 2" />
                <FormControlLabel value="3" control={<Radio sx={{color: "#ffffff",'&.Mui-checked': {color: "#11ffff",},}}/>} label="Strategy 3" />
                <FormControlLabel value="4" control={<Radio sx={{color: "#ffffff",'&.Mui-checked': {color: "#11ffff",},}}/>} label="Strategy 4" />
                <FormControlLabel value="5" control={<Radio sx={{color: "#ffffff",'&.Mui-checked': {color: "#11ffff",},}}/>} label="Strategy 5" />
            </RadioGroup>
        </FormControl>
        </div>
    );
}
