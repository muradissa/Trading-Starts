import { useState } from "react";
import React, { Fragment } from 'react';
import { BrowserRouter ,Routes, Route,Navigate, Outlet } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Navbar from "./scenes/global/Navbar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import { Container } from "react-bootstrap"
import Login from "./scenes/login/Login"
import Signup from "./scenes/signup/Signup"
import PrivateRoute from "./scenes/privateRoute/PrivateRoute"
import { AuthProvider,useAuth } from "./contexts/AuthContext"
import GeneralInfoForm from "./scenes/profileSettings/GeneralInfoForm"
// import PrivateRoute from "./PrivateRoute"
// import ForgotPassword from "./ForgotPassword"
// import UpdateProfile from "./UpdateProfile"

import Dashboard from "./scenes/dashboard";
import DashList from "./scenes/lists/DashList";
import BotDashboard from "./scenes/bot/BotDashboard";
import CryptoAnalysis from "./scenes/analysis/CryptoAnalysis"
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";


function App() {
  const [theme , colorMode] = useMode();
  const [openMenu, setOpenMenu] = useState(true);
  const changeStatusMenu= ()=>{
    const statuss=!openMenu
    setOpenMenu(statuss);
    return statuss;
  }
  const Layout = () => (
    <div className="main__container" style={{width:"100%"}}>

      <Sidebar changeStatusMenu={changeStatusMenu}/>
      <main className="content" style={{paddingLeft:openMenu?"300px":"80px"}}>
        <Navbar/>
        {/* <Topbar /> */}
        <Outlet />
      </main>

    </div>
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <AuthProvider>
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "000vh" }}
            >
              <div className="w-100" style={{ maxWidth: "4000px" }}>
                <Routes>  
             
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup />} />
                 
                </Routes>
              </div>
            </Container>
            
            <div className="app" > 
             

                <Routes >
                  <Route element={<PrivateRoute/>}>
                    <Route element={<Layout />} style={{ minHeight: "100vh" }}>
                      <Route exact path='/' element={<Dashboard/>}/>
                      <Route exact path='/tradingbot' element={<BotDashboard/>}/>
                      <Route exact path='/lists' element={<DashList/>}/>
                      <Route exact path='/analysis' element={<CryptoAnalysis/>}/>
                      <Route path="/group" element={<Team />} />
                      <Route path="/contacts" element={<Contacts />} />
                      <Route path="/invoices" element={<Invoices />} />
                      <Route path="/settings" element={<GeneralInfoForm/>}/>
                    </Route>
                  </Route>
                 
                </Routes>

            
            </div>
            
            </AuthProvider>
          </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
