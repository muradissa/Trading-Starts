import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { tokens } from "../../theme";
import Header from "../../components/Header";
import TopFiveCrypto from "../dashboardTables/TopFiveCrypto";
import TopFiveStock from "../dashboardTables/TopFiveStock";
import HighestCrypto from "../dashboardTables/HighestCrypto";
import VwapChart from "../charts/VwapChart";
import ProfitChart from "../charts/ProfitChart";
import DealsChart from "../charts/DealsChart";
import './dashboard.css'
import { AreaChart } from '../charts/AreaChart';

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

    return (
        <Box m="20px" >
            <Box display="flex" justifyContent="space-between"  alignItems="center" style={{maxWidth:"100%",margin:"0 auto"}}>
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>

         
            <Box style={{maxWidth:"100%"}}>
                {/* <div className='container__top'>
                  <div style={{textAlign:"center",}}> 
                    <h3 style={{color:"#fff"}}>Cryptocurrency</h3>
                    <ProfitChart/>
                  </div>
                  <div style={{textAlign:"center",}}> 
                    <AreaChart/>
                  </div>
                </div> */}
                
                <div className='container__top3'>
                  <div style={{textAlign:"center",}}> 
                    <h3 style={{color:"#fff"}}>Cryptocurrency</h3>
                    <ProfitChart/>
                  </div>
                  <div className='container__top4'>
                  <div>
                      <h3 style={{textAlign:"center"}}><b style={{color:"green"}}>Successful</b> deals last week</h3>
                      <DealsChart/>
                    </div> 
                    <div>
                      <h3 style={{textAlign:"center"}}><b style={{color:"red"}}>Failed</b> deals last week</h3>
                      <DealsChart/>
                    </div>
                  </div>
                </div>
                <div className='container__top3'>
                <div style={{textAlign:"center",}}> 
                    <AreaChart/>
                  </div>
                  <div className='container__top4'>
                    <div>
                      <h3 style={{textAlign:"center"}}><b style={{color:"green"}}>Successful</b> deals last week</h3>
                      <DealsChart/>
                    </div> 
                    <div>
                      <h3 style={{textAlign:"center"}}><b style={{color:"red"}}>Failed</b> deals last week</h3>
                      <DealsChart/>
                    </div>
                  </div>
                </div>
                     
                 {/* <div  className='container__top2'>
                  <div>
                      <div className='table__title1' >
                          <h4 className='table__title text-top-ten' >Top Ten Crypto</h4>
                      </div>
                      <div className="container__table-template">
                        <HighestCrypto/>
                      </div>
                    </div>
                 </div>
                  */}



                {/* <div className='container__top'>
                  <div>
                    <div className='table__title' >
                        <h4 className='table__title text-sell' >Crypto | SELL</h4>
                    </div>
                    <div className="container__table-buy">
                      <TopFiveCrypto/>
                    </div>
                  </div>
                  <div>
                    <div className='table__title' >
                        <h4 className='table__title text-sell' >Stocks | SELL</h4>
                    </div>
                    <div className="container__table-buy">
                      <TopFiveStock/>
                    </div>
                  </div> 
                </div> */}


                {/* <div className='container__top'>
                  <div>
                    <div className='table__title1' >
                        <h4 className='table__title text-top-ten' >Highest Crypto 24h</h4>
                    </div>
                    <div className="container__table-buy">
                      <HighestCrypto/>
                    </div>
                  </div>
                  <div>
                    <div className='table__title1' >
                        <h4 className='table__title text-top-ten' >Highest Stock 24h</h4>
                    </div>
                    <div className="container__table-buy">
                      <HighestCrypto/>
                    </div>
                  </div> 
                </div> */}
                
            </Box>
            
        </Box>
    );
}
export default Dashboard