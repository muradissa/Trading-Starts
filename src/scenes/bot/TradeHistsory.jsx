

import React from 'react'
import './bot.css'
import {BsThreeDotsVertical} from 'react-icons/bs';
const TradeHistsory = () => {
  return (
    <>
        <table>
            <thead >
            <tr className="table__header">
                <th>Name</th>
                <th>Type</th>
                <th>Buy</th>
                <th>Sell</th>
                <th>Profit</th>
                <th>Earn / Loss</th>
                <th>Buy Price $</th>
                <th>Sell Price $</th>
                <th>Buy Date</th>
                <th>Sell Date</th>
                <th>Strategy Type</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
                    <td style={{cursor:"pointer"}}><BsThreeDotsVertical/></td>
                </tr>
                <tr>
                    <td>AAPP</td>
                    <td>Stock</td>
                    <td>1501.0</td>
                    <td>1512.0</td>
                    <td>11.0$</td>
                    <td>Earn</td>
                    <td>150.1</td>
                    <td>151.2</td>
                    <td>20:13 3/3/23</td>
                    <td>23:25 3/3/23</td>
                    <td>1</td>
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

export default TradeHistsory;