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
import Login2 from "./scenes/login/Login2"
import Signup from "./scenes/signup/Signup"
import Signup2 from "./scenes/signup/Signup2"

import PrivateRoute from "./scenes/privateRoute/PrivateRoute"
import { AuthProvider,useAuth } from "./contexts/AuthContext"
import GeneralInfoForm from "./scenes/profileSettings/GeneralInfoForm"

import NavbarHome from "./Home/navbar/NavbarHome";
import FooterHome from "./Home/footer/FooterHome";

import Dashboard from "./scenes/dashboard";
import DashList from "./scenes/lists/DashList";
import BotDashboard from "./scenes/bot/BotDashboard";
import CryptoHistory from "./scenes/bot/CryptoHistory";
import CryptoAnalysis from "./scenes/analysis/CryptoAnalysis"

import Home from "./Home/Home";


function App() {
  const [theme , colorMode] = useMode();
  const [openMenu, setOpenMenu] = useState(true);
  const changeStatusMenu= ()=>{
    const statuss=!openMenu
    setOpenMenu(statuss);
    return statuss;
  }

  const LayoutHome = () => (
    <div className="main__container23" style={{width:"100%"}}>
        <NavbarHome/>   
        <Outlet />
        <FooterHome/>
    </div>
  );

  const Layout = () => (
    <div className="main__container" style={{width:"100%"}}>

      <Sidebar changeStatusMenu={changeStatusMenu}/>
      {/** paddingRight:"3rem" */}
      <main className="content" style={{paddingLeft:openMenu?"300px":"80px" }}>
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
                  <Route path="/login1" element={<Login/>} />
                  <Route path="/signup1" element={<Signup />} />
                  {/* <Route path="/home" element={<Home />} /> */}
                </Routes>
              </div>
            </Container>

            <div className="" > 
              <Routes >
                  <Route element={<LayoutHome />} style={{ minHeight: "100vh" }}>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/login' element={<Login2/>}/>
                    <Route exact path='/signup' element={<Signup2/>}/>
                  </Route>
              </Routes>  
            </div>
            <div className="app" > 
              <Routes >
                <Route element={<PrivateRoute/>}>
                  <Route element={<Layout />} style={{ minHeight: "100vh" }}>
                    <Route exact path='/dashboard' element={<Dashboard/>}/>
                    <Route exact path='/tradingbot' element={<BotDashboard/>}/>
                    <Route exact path='/lists' element={<DashList/>}/>
                    <Route exact path='/CryptoCurrenciesAnalysis' element={<CryptoAnalysis/>}/>
                    <Route exact path='/cryptoHistory' element={<CryptoHistory/>}/>
                    <Route exact path='/profile-settings' element={<GeneralInfoForm/>}/>
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
