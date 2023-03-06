import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { tokens } from "../../theme";
import Header from "../../components/Header";
import TopFiveCrypto from "../dashboardTables/TopFiveCrypto";
import TopFiveStock from "../dashboardTables/TopFiveStock";
import HighestCrypto from "../dashboardTables/HighestCrypto";
import VwapChart from "../charts/VwapChart";
import './dashboard.css'

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
                {/* <PostBuy ></PostBuy> */}
                <div className='container__top'>
                  <div>
                    <div className='table__title' >
                        <h4 className='table__title text-buy' >Crypto | Buy</h4>
                    </div>
                    <div className="container__table-buy">
                      <TopFiveCrypto/>
                    </div>
                  </div>
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
                        <h4 className='table__title text-buy' >Stocks | Buy</h4>
                    </div>
                    <div className="container__table-buy">
                      <TopFiveStock/>
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
                  <div>
                    <div className='table__title1' >
                        <h4 className='table__title text-top-ten' >Highest Crypto 1h</h4>
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
                  <div>
                    <div className='table__title1' >
                        <h4 className='table__title text-top-ten' >Highest Crypto <b>1h</b></h4>
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
                   
                  <div>
                    <VwapChart/>
                  </div>
                  <div>
                    <VwapChart/>
                  </div>
                  <div>
                    <VwapChart/>
                  </div>
                  <div>
                    <VwapChart/>
                  </div>
                </div>



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