import React from 'react'
import OrdersTable from './OrdersTable';
import TradeHistsory from './TradeHistsory';

import DealsChart from '../charts/DealsChart';
import ProfitChart from '../charts/ProfitChart';
function BotDashboard() {
  return (
    <>
        <hr/>
        <div className='container__bot'>
            <div className='container__bot-table'>
                <div className='' >
                    <h4 className='table__title text-bot-orders' >Open Orders</h4>
                </div>
                <div className="container__table-template">
                    <OrdersTable/>
                </div>
            </div>
            
            <div className='container__bot-table'> 
                <div className='' >
                    <h4 className='table__title text-bot-orders' >Orders History</h4>
                </div>
                <div className="container__table-template">
                    <TradeHistsory/>
                </div>
            </div>
            

            <div className='container__profit-charts'>
                <ProfitChart/>
                <ProfitChart/>
            </div>
            <div className='container__charts'>
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
            </div>
            
        </div>
        
    </>
  )
}

export default BotDashboard