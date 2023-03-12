import React from 'react'
import './bot.css'
import {BsThreeDotsVertical} from 'react-icons/bs';
const OrdersTable = () => {
  return (
    <>
        <table>
            <thead >
            <tr className="table__header">
                <th>Coin</th>
                <th>Order Price</th>
                <th>amount</th>
                <th>total</th>
                <th>Profit</th>
                <th>Order Type</th>
                <th>Sell Price</th>
                <th>stop loss</th>
                <th>date</th>
                <th>VWAP 15m</th>
                <th>VWAP 1h</th>
                <th>Strategy</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>20.6$</td>
                    <td>SELL</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>149.0</td>
                    <td>3/3/23 14:00</td>
                    <td>-3.5</td>
                    <td>-1.5</td>
                    <td>1.5%</td>
                    <td>4.7%</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>20.6$</td>
                    <td>SELL</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>149.0</td>
                    <td>3/3/23 14:00</td>
                    <td>-3.5</td>
                    <td>-1.5</td>
                    <td>1.5%</td>
                    <td>4.7%</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>20.6$</td>
                    <td>SELL</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>149.0</td>
                    <td>3/3/23 14:00</td>
                    <td>-3.5</td>
                    <td>-1.5</td>
                    <td>1.5%</td>
                    <td>4.7%</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>20.6$</td>
                    <td>SELL</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>149.0</td>
                    <td>3/3/23 14:00</td>
                    <td>-3.5</td>
                    <td>-1.5</td>
                    <td>1.5%</td>
                    <td>4.7%</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>20.6$</td>
                    <td>SELL</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>149.0</td>
                    <td>3/3/23 14:00</td>
                    <td>-3.5</td>
                    <td>-1.5</td>
                    <td>1.5%</td>
                    <td>4.7%</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>20.6$</td>
                    <td>SELL</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>149.0</td>
                    <td>3/3/23 14:00</td>
                    <td>-3.5</td>
                    <td>-1.5</td>
                    <td>1.5%</td>
                    <td>4.7%</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
               
            </tbody>
        </table>
        <div className='table__footer' >
            <h4 className='table__footer-text' >Total Orders : 6 , Total Profit : 250$ </h4>
        </div>
    </>
  )
}

export default OrdersTable;