import React, {useState,useEffect} from 'react'
import './bot.css'
import axios from "axios";

const CryptoOrdersTable = () => {

    /**{/* {.moment().format("DD MM YYYY HH:mm")} */
    const [botOpenOrders,setBotOpenOrders] = useState([])
    const getOpenOrders = async () =>{
        const response = await axios.get(`http://localhost:5000/api/crypto/bot/getAllOpenOrders`);
        if(response.status === 200){
            setBotOpenOrders(response.data['result'])
        }
    }
    useEffect(() => {
        getOpenOrders();
        const interval = setInterval(async () => {
            try{
                const response1 = await axios.get(`http://localhost:5000/api/crypto/bot/getAllOpenOrders`);
                if(response1.status === 200){
                    setBotOpenOrders(response1.data['result'])
                }        
            }catch(err){
                console.log("Error from getcoin Analysis");
            }
        }, 60000);
    },[])
    const changeDateType = (date1) =>{
        let date2 = new Date(date1)
        date2.setHours(date2.getHours()+6)
        const formattedDate2 = date2.toLocaleString('en-US', {
             timeZone: 'UTC',
             year: 'numeric',
             month: '2-digit',
             day: '2-digit',
             hour: '2-digit',
             minute: '2-digit',
            
             hour12: false
         });
         return formattedDate2;
     }

  return (
    <>
        <table>
            <thead >
            <tr className="table__header">
                <th>Coin</th>
                <th>Order Type</th>
                <th>Order price</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Profit</th>
                <th>Sell Price</th>
                <th>Stop Loss</th>
                <th>Date</th>
                <th>VWAP 15m</th>
                <th>VWAP 1h</th>
                <th>Strategy</th>
            </tr>
            </thead>
            <tbody>
                {botOpenOrders.map((rawData,index) =>{
                    return(
                        <tr>
                            <td>{rawData['coin']}</td>
                            <td>{rawData['orderType']}</td>
                            <td>{rawData['orderPrice']}</td>
                            <td>{rawData['amount']}</td>
                            <td>{rawData['total']}</td>
                            <td>{rawData['profit']}</td>
                            <td>{rawData['sellPrice']}</td>
                            <td>{rawData['stopLoss']}</td>
                             
                            <td>{changeDateType(rawData['date'])}</td>
                            <td>{rawData['vwap4815m']}</td>
                            <td>{rawData['vwap481h']}</td>
                            <td>{rawData['strategy']}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className='table__footer' >
            <h4 className='table__footer-text' >Total Orders : {botOpenOrders.length} , Total Profit : 250$ </h4>
        </div>
    </>
  )
}

export default CryptoOrdersTable;