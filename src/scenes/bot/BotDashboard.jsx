import React from 'react'
import OrdersTable from './OrdersTable';
import CryptoOrdersTable from './CryptoOrdersTable';
import TradeHistsory from './TradeHistsory';
import Box from '@mui/material/Box';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DealsChart from '../charts/DealsChart';
import ProfitChart from '../charts/ProfitChart';
function BotDashboard() {
  return (
    <Box  m="20px">
        <Box display="flex" justifyContent="space-between"  alignItems="center" style={{maxWidth:"100%",margin:"0 auto"}}>
            <Header title="Bot" subtitle="Bot deals schedules" />
        </Box>
        <div className='container__bot'>
            
            <div className='container__bot-table'>
                <div className='' >
                    <h4 className='table__title text-bot-orders' >Cryptocurrency Open Orders</h4>
                </div>
                <div className="container__table-template">
                    <CryptoOrdersTable/>
                </div>
            </div>

            <div className='container__bot-table'>
                <div className='' >
                    <h4 className='table__title text-bot-orders' >Stocks Open Orders</h4>
                </div>
                <div className="container__table-template">
                    <OrdersTable/>
                </div>
            </div>
            
            {/* <div className='container__bot-table'> 
                <div className='' >
                    <h4 className='table__title text-bot-orders' >Orders History</h4>
                </div>
                <div className="container__table-template">
                    <TradeHistsory/>
                </div>
            </div> */}
            

            {/* <div className='container__profit-charts'>
                <ProfitChart/>
                <ProfitChart/>
            </div> */}
            {/* <div className='container__charts'>
                <div>
                    <h3 style={{textAlign:"center"}}>Deals last week</h3>
                    <DealsChart/>
                    
                </div>
                <div>
                    <h3 style={{textAlign:"center"}}>Successful deals last week</h3>
                    <DealsChart/>
                </div>
                <div> 
                    <h3 style={{textAlign:"center"}}>Failed deals last week</h3>
                    <DealsChart/>
                </div>

                <div>
                    <h3 style={{textAlign:"center"}}>Deals last week</h3>
                    <DealsChart/>
                </div>
                <div>
                    <h3 style={{textAlign:"center"}}>Successful deals last week</h3>
                    <DealsChart/>
                </div>
                <div> 
                    <h3 style={{textAlign:"center"}}>Failed deals last week</h3>
                    <DealsChart/>
                </div>
            </div> */}
            
        </div>
        
    </Box>
  )
}

export default BotDashboard