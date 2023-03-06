import { useState } from "react";
import { ProSidebarProvider , Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link,NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';

const Item = ({ title, to, icon, selected, setSelected ,isCollapsed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
  return (
    <NavLink to={to} >
        <MenuItem
            active={selected === title}
            style={{
                // color: colors.grey[200],
                maxHeight: "40px",
                color: selected !== title ? colors.primary[100] : colors.primary[100],
                background: selected !== title ? undefined : colors.primary[900],
                borderRadius:"15px",
                hover: {background: colors.redAccent[800],color: colors.primary[100]},       
            }}
            onClick={() => setSelected(title)}
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

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  console.log("");

  return (
    <Box   width={isCollapsed ? "80px" : "300px"} background={colors.primary[400]}  sx={{
        minHeight: "100vh",
        position: 'fixed',
        overflowX: 'hidden',
        zIndex:'1',
        
        background: `${colors.primary[800]} !important`,
        "& .css-ewdv3l": {
          background: `${colors.primary[700]} !important`,
        },
        "& .MuiBox-root": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menuitem-root": {
            maxHeight: "40px !important",
            borderRadius:"15px !important",
            backgroundColor: "transparent !important",
        },
        "& .ps-menuitem-root:hover": {
          color: `${colors.primary[200]} !important`,
          borderRadius:"15px !important", 
          backgroundColor: `${colors.primary[800]} !important`, 
        },
        "& .ps-menuitem-root.active": {
          color: "#868dfb !important",
          background: `${colors.grey[400]} !important`,
        },  
      }}>
      <ProSidebarProvider collapsed={isCollapsed} >
        <Menu iconShape="square" style={{paddingBottom:"10px"}} background="#fff">
            {/* LOGO AND MENU ICON */}          
            
         
            <Box mb="25px" padding="1.5rem 1rem 0rem 1.5rem " marginBottom="1rem" >
              <Box display="flex" justifyContent="center" alignItems="center">
              {!isCollapsed ? 
                ( <img
                  alt="profile-user"
                  width="100%"
                  src={`../../assets/logo-no-background.png`}
                  style={{ cursor: "pointer"}}
                />)
                :
                ( <img
                  alt="profile-user"
                  width="100%"
                  src={`../../assets/logo-no-background2.png`}
                  style={{ cursor: "pointer"}}
                />)
                }
              </Box>
            </Box>
         
          <MenuItem                     
                style={{ background:  colors.primary[700]}}
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={<MenuOutlinedIcon />} 
            >
            {!isCollapsed && <Typography>Menu</Typography>}        
          </MenuItem>

          <Box paddingTop="0px" paddingLeft={isCollapsed ? "5%" : "5%"} paddingRight={isCollapsed ? "5%" : "5%"} >
            <Item
              title="Profile"
              to="/"
              icon={<AccountCircleIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            
            <Divider/>
            {/********** Crypto **********/}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Crypto
            </Typography>
            <Item
              title="List"
              to="/"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Tracking"
              to="/"
              icon={<Groups3OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="classification"
              to="/"
              icon={<Groups3OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />

            <Divider/>
            {/********** Stocks **********/}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Stocks
            </Typography>
             <Item
              title="List2"
              to="/"
              icon={<ShowChartIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Tracking2"
              to="/"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="classification2"
              to="/"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            
            <Divider/>

            {/********** data **********/}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>      
              Data
            </Typography>
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
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
              title="Dark/Light Theme"
              to="/"
              icon={<DarkModeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
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
              title="Login / Logout"
              to="/invoices"
              icon={<Logout />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
          </Box>
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default Sidebar;