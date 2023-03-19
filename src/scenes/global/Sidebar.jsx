import React,{ useState, useContext} from "react";
import { ProSidebarProvider , Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link,NavLink,useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import { useAuth } from "../../contexts/AuthContext"

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';

const Item = ({ title, to, icon, selected, setSelected ,isCollapsed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { logout } = useAuth()
  // const handleLogout = ()=>{
  //   console.log("logout")
    
  //   // navigate("/")  
  // }

  if(selected === title && title==="Logout"){
    logout()
  }
  return (
    <NavLink to={to} >
        <MenuItem

            active={selected === title}
            style={{
                // color: colors.grey[200],
                maxHeight: "40px",
                // color: selected !== title ? colors.primary[100] : "",
                background: selected !== title ? undefined : colors.primary[900],
                borderRadius:"15px",
                // hover: {background: colors.redAccent[800],color: colors.primary[200]},       
            }}
            onClick={() => {
              setSelected(title);
              if(title ==='Dark/Light Theme'){
                colorMode.toggleColorMode()

              }
            }}
            icon={icon}
            
            // sx={{"& *:hover":{background:colors.grey[200]  }}}
            >
            {!isCollapsed &&
                <Typography>{title}</Typography>
            }  
        </MenuItem>
    </NavLink>
  );
};

const Sidebar = ({changeStatusMenu}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate ()
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { logout } = useAuth()
  const handleLogout = ()=>{
    console.log("logout")
    logout()
    navigate("/")  
  }
  // useEffect(() =>changeStatusMenu,isCollapsed)
  return (
    <Box   width={isCollapsed ? "80px" : "280px"} background={colors.primary[400]}  sx={{
        minHeight: "100vh",
        position: 'fixed',
        overflowX: 'hidden',
        zIndex:'1',
        
        background: `${colors.primary[700]} !important`,
        "& .css-ewdv3l": {
          background: `${colors.primary[700]} !important`,
        },
        "& .MuiBox-root": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menuitem-root .ps-menu-button": {
            maxHeight: "40px !important",
            borderRadius:"15px !important",
            backgroundColor: "transparent !important",
            color:'#f0f0f0 !important',
        },"& .ps-menu-button":{
          // margin :"5px 5px"
        },
        "& .ps-menuitem-root:hover": {
          color: `${colors.primary[100]} !important`,
          //color:'#3e4396 !important',
          borderRadius:"15px !important", 
          // backgroundColor: `${colors.primary[500]} !important`, 
          background: `${colors.primary[500]} !important`, 
          // backgroundColor:'#ff0000 !important'

        },
        "& .ps-menuitem-root.active": {
          color: "#868dfb !important",
          background: `${colors.grey[400]} !important`,
        },"& .ps-menu-button:hover":{
           backgroundColor: `${colors.primary[500]} !important`, 

        }
      }}>
      <ProSidebarProvider collapsed={isCollapsed} >
        <Menu iconShape="square" style={{paddingBottom:"10px"}} background="#fff">
            {/* LOGO AND MENU ICON */}          
            
         
            <Box mb="25px" padding="1.5rem 1rem 0rem 1.5rem " marginBottom="1rem" >
              <Box display="flex" justifyContent="" alignItems="center">
                <img
                  alt="profile-user"
                  // height="3rem"
                  height="40px"
                  // width="100%"
                  src={`../../assets/logo-no-background1.png`}
                  style={{ cursor: "pointer"}}
                />
                {!isCollapsed && 
                ( <img
                  alt="profile-user"
                  height="40px"
                  
                  src={`../../assets/logo-no-background2.png`}
                  style={{ cursor: "pointer"}}
                />)
                }
              </Box>
            </Box>
         <Box  style={{ background:  colors.primary[700] , margin:isCollapsed?"10px 5px" :"10px 10px"}}>
          <MenuItem                     
                onClick={() => {
                  setIsCollapsed(!isCollapsed)
                }}
                icon={<MenuOutlinedIcon />} 
            >
            {!isCollapsed && <Typography>Menu</Typography>}        
          </MenuItem>
         </Box>
          

          <Box paddingTop="0px" paddingLeft={isCollapsed ? "5%" : "5%"} paddingRight={isCollapsed ? "5%" : "5%"} >
            <Divider/>
            {/********** Cryptocurrency  **********/}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Crypto{isCollapsed ? "":'currencies'} 
            </Typography>
            <Item
              title="List"
              to="/lists"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            
            <Item
              title="Analysis"
              to="/CryptoCurrenciesAnalysis"
              icon={<LeaderboardIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Crypto trading record"
              to="/cryptoHistory"
              icon={<SmartToyIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed} 
            />
            {/* <Item
              title="Wallet"
              to="/"
              icon={<WalletOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed} 
            /> */}

            <Divider/>
            {/********** Stocks **********/}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Stocks
            </Typography>
             <Item
              title=" List "
              to="/"
              icon={<ShowChartIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title=" Analysis "
              to="/StocksAnalysis"
              icon={<LeaderboardIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Stock trading record"
              to="/"
              icon={<SmartToyIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed} 
            />
        
            

            {/* ******* Settings ****** */}
            <Divider/>
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>      
              Settings
            </Typography>
            <Item
              title="Profile"
              to="/profile-settings"
              icon={<AccountCircleIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Dark/Light Theme"
              // to="/"
              
              icon={<DarkModeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
              onClick={colorMode.toggleColorMode}
            />
            <Item
              title="Settings"
              to="/"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Logout"
              // to="/"
              icon={<Logout />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
              onClick={handleLogout}
            />
          </Box>
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default Sidebar;