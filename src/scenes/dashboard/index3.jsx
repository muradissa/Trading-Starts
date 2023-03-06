import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import PostBuy from "../post/PostBuy";
import PostSell from "../post/PostSell";
import PostInfo from "../post/PostInfo"
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const listPostTypes = [
    'Info',
    'Buy',
    'Sell',   
];
const listGroups = [
    'Global',
    'My Group',
    'Group 1',
    'Group 2',
    'Group 3',   
];
const listTradingTypes = [
    'Stock',
    'CryptoCurenncy',  
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const Dashboard = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [postTypes, setPostTypes] = React.useState([]);
    const [groups, setGroups] = React.useState([]);
    const [tradingTypes, setTradingTypes] = React.useState([]);
  
    const handleChangePostTypes = (event) => {
      const {target: { value },} = event;
      setPostTypes( typeof value === 'string' ? value.split(',') : value, );
    };

    const handleChangeGroups = (event) => {
        const {target: { value },} = event;
        setGroups(typeof value === 'string' ? value.split(',') : value,);
    };
    
    const handleChangeTradingTypes = (event) => {
        const { target: { value }, } = event;
        setTradingTypes( typeof value === 'string' ? value.split(',') : value,);
    };

    return (
        <Box m="20px" >
            <Box display="flex" justifyContent="space-between"  alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            <Grid container  direction="row" spacing={2} style={{paddingTop:"1vh" ,maxWidth:"70%"}}>        
                
                <Grid item xs={4} md={3} >  
                    <div>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel id="demo-multiple-chip-label" sx={{
                                    color: colors.primary[100],}}>Types</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={postTypes}
                                onChange={handleChangePostTypes}
                                input={<OutlinedInput id="select-multiple-chip" label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                sx={{
                                    color: colors.primary[100],
                                    backgroundColor: colors.primary[700],
                                    '.MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[700],
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[500],
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[500],
                                    },
                                    '.MuiSvgIcon-root ': {
                                      fill: colors.primary[100],
                                    }
                                  }}
                            >
                            {listPostTypes.map((name) => (
                                
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={postTypes.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>        
                
                <Grid item xs={4} md={3} >  
                    <div>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel id="demo-multiple-chip-label3">Trading</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label3"
                                id="demo-multiple-chip3"
                                multiple
                                value={tradingTypes}
                                onChange={handleChangeTradingTypes}
                                input={<OutlinedInput id="select-multiple-chip3" label="Chip" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                sx={{
                                    color: colors.primary[100],
                                    backgroundColor: colors.primary[700],
                                    '.MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[700], 
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[500],          
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[500],
                                    },
                                    '.MuiSvgIcon-root ': {
                                      fill: colors.primary[100],
                                    }
                                  }}
                            >
                            {listTradingTypes.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, tradingTypes, theme)}
                                    >
                                        {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>           
                </Grid>
                
                <Grid item xs={4} md={6} >  
                    <div>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel id="demo-multiple-chip-label2">Groups</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label2"
                                id="demo-multiple-chip2"
                                multiple
                                value={groups}
                                onChange={handleChangeGroups}
                                input={<OutlinedInput id="select-multiple-chip2" label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                sx={{
                                    color: colors.primary[100],
                                    backgroundColor: colors.primary[700],
                                    '.MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[700],
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[500],
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: colors.yellowAccent[500],
                                    },
                                    '.MuiSvgIcon-root ': {
                                      fill: colors.primary[100],
                                    }
                                  }}
                            >
                            {listGroups.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={groups.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                              </MenuItem>
                                
                            ))}
                            </Select>
                        </FormControl>
                    </div>            
                </Grid>
            
            </Grid>
         
            <Box style={{maxWidth:"70%"}}>
                <PostBuy ></PostBuy>
                <PostSell ></PostSell>
                <PostInfo ></PostInfo>
            </Box>
            
        </Box>
    );
}
export default Dashboard