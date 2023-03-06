import React from 'react'
import './topFive.css'
const TopFiveCrypto = () => {
  return (
    <>
        <table>
            <thead >
            <tr className="table__header">
                <th>Name</th>
                <th>Price $<h6 className='table__element-secondry-text'>Price 24h</h6></th>
                <th>15min %<h6 className='table__element-secondry-text'>VWAP</h6></th>
                <th>1h % <h6 className='table__element-secondry-text'>VWAP</h6></th>
                <th>Guarantee %</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BTCUSDT</td>
                    <td>151.0</td>
                    <td>1.01%</td>
                    <td>1.51%</td>
                    <td>80.4%</td>
                </tr>
                <tr>
                    <td>ETHUSDT</td>
                    <td>255.29</td>
                    <td>1.22%</td>
                    <td>1.53%</td>
                    <td>78.2%</td>
                </tr>
                <tr>
                    <td>SOLUSDT</td>
                    <td>94.90</td>
                    <td>-2.01%</td>
                    <td>-1.3%</td>
                    <td>75.0%</td>
                </tr>
                <tr>
                    <td>SHIBUSDT</td>
                    <td>94.90</td>
                    <td>-2.01%</td>
                    <td>-1.3%</td>
                    <td>75.0%</td>
                </tr>
                <tr>
                    <td>LINKUSDT</td>
                    <td>94.90</td>
                    <td>-2.01%</td>
                    <td>-1.3%</td>
                    <td>75.0%</td>
                </tr>
            </tbody>
        </table>
        <div className='table__footer' >
            <h4 className='table__footer-text' >Top 5 CrypoCurrency</h4>
        </div>
    </>
  )
}

export default TopFiveCrypto