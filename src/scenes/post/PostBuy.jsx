import Header from "../../components/Header";
import { useContext,useState,useEffect } from "react";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { ProSidebarProvider , Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link,NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import ReviewsIcon from '@mui/icons-material/Reviews';
//import "react-pro-Sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
const PostBuy = (props) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {typePost,setTypePost} = useState("info"); // buy , sell
    const {group,setGroup} = useState("myGroup");
    const {typeMarket,setTypeMarket} = useState("cryptoCurrency");
    const {name,setName} = useState("BTCUSDT");
    const {fullName,setFullName} = useState("murad");
    useEffect(() => {
        
        
      },[]);

    return (
        <>
        
        <Box m="20px" border="3px solid green" borderRadius="8px" maxWidth="100%" padding="5px" style={{color:colors.primary[100] ,background:colors.primary[700]}}>
            <Grid container  direction="row" spacing={2} style={{paddingTop:"1vh" ,}}>       
                <Grid item xs={4} md={1} >    
                    <img
                        width="35px"
                        height="35px"
                        align="right"
                        src={`../../assets/imgGif2.gif`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                </Grid>
                <Grid item xs={12} md={4} margin="auto" textAlign="center">
                    <Typography 
                        variant="h4" 
                        align="left"
                        alignContent="center"
                        style={{ cursor: "pointer"}}
                        value={fullName}
                        >
                            
                    </Typography>
                    
                </Grid>
                <Grid item xs={12} md={5} align="center" margin="auto" textAlign="center">
                    <Typography variant="h5" ><b style={{ cursor: "pointer"}}>BTCUSDT | 18005$ | cryptoCurrency </b> </Typography>
                </Grid>
                
                <Grid item xs={12} md={2} color="yellow" margin="auto" textAlign="center" style={{ cursor: "pointer"}}>
                    <Typography variant="h5"  align="right" >132427 <StarBorderOutlinedIcon/></Typography>                
                </Grid>              
            </Grid>
            <Grid container  direction="row" spacing={2} style={{paddingTop:"1vh" ,}}>                     
                <Grid item xs={4} md={4} margin="auto" textAlign="center">
                    <Typography variant="h6" >Stop lose : 17,500</Typography>
                </Grid>
                <Grid item xs={4} md={4} align="center" margin="auto" textAlign="center">
                    <Typography variant="h6">Target 1 : 19,000</Typography>
                </Grid>
                <Grid item xs={4} md={4} margin="auto" textAlign="center" >
                    <Typography variant="h6">Target 2 :  19,500 </Typography>       
                </Grid>   
            </Grid>
            <Divider/>
            <Box m="20px" border="1px solid green" borderRadius="8px" maxWidth="100%" padding="5px" >
                <p style={{fontSize:"1.1em"}}>  
                    Line 68:17:   'useRef' is defined but never used             no-unused-vars
                    Line 103:10:  'error' is assigned a value but never used     no-unused-vars
                    Line 104:10:  'loading' is assigned a value but never used   no-unused-vars
                    Line 105:9:   'navigate' is assigned a value but never used  no-unused-vars
                </p>
                <Stack direction="row" spacing={2} m="5px">
                    <Button variant="contained" startIcon={<StarOutlinedIcon />} style={{color:"white" ,background:colors.primary[800]}} >
                        Star
                    </Button>
                    <Button variant="contained" startIcon={<StarOutlinedIcon />} style={{color:"yellow" ,background:colors.primary[800]}} >
                        Star
                    </Button>
                    <Button variant="contained" endIcon={<ReviewsIcon />} style={{color:colors.primary[100] ,background:colors.primary[800]}}>
                        Comment
                    </Button>
                </Stack>
            </Box> 
        </Box>
        
        
        </>
    );
}
export default PostBuy