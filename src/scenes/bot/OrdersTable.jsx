import React from 'react'
import './bot.css'
import {BsThreeDotsVertical} from 'react-icons/bs';
const OrdersTable = () => {
  return (
    <>
        <table>
            <thead >
            <tr className="table__header">
                <th>Name</th>
                <th>Type</th>
                <th>Proft</th>
                <th>OrderType</th>
                <th>Order Price $</th>
                <th>Price $</th>
                <th>Stop Loss</th>
                <th>Order Date</th>
                <th>Order VWAP</th>
                <th>VWAP NOW</th>
                <th>1h %</th>
                <th>4h %</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                {/* coinPVComparing.map((rawData,index) =>{
                            return(
                               
                                <tr>
                                    <td style={{backgroundColor:'#3e4396'}}>{firstColumnPVT[index+1]}</td>
                                    <td style={{color:changeTextColorPercentage(rawData['h1'])}}>{rawData['h1']}%</td>
                                    <td>{rawData['h2']}%</td>
                                    <td>{rawData['h3']}%</td>
                                    <td>{rawData['h4']}%</td>
                                    <td>{rawData['d1']}%</td>
                                    <td>{rawData['d2']}%</td>
                                    <td>{rawData['d3']}%</td>
                                    <td>{rawData['d4']}%</td>
                                    <td>{rawData['d5']}%</td>
                                    <td>{rawData['d6']}%</td>
                                </tr>
                            )
                        }) */}
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