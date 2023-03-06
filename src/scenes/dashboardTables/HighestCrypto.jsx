import React from 'react'
import './topFive.css'
const HighestCrypto = () => {
  return (
    <>
        <table>
            <thead >
            <tr className="table__header">
                <th>Name</th>
                <th>Price $</th>
                <th>1h %</th>
                <th>24h %</th>
                <th>48h %</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BTCUSDT</td>
                    <td>151.0</td>
                    <td>1.01%</td>
                    <td>1.51%</td>
                    <td>5.4%</td>
                </tr>
                <tr>
                    <td>ETHUSDT</td>
                    <td>255.29</td>
                    <td>1.22%</td>
                    <td>1.53%</td>
                    <td>2.2%</td>
                </tr>
                <tr>
                    <td>SOLUSDT</td>
                    <td>94.90</td>
                    <td>-2.01%</td>
                    <td>-1.3%</td>
                    <td>3.0%</td>
                </tr>
                <tr>
                    <td>SHIBUSDT</td>
                    <td>94.90</td>
                    <td>-2.01%</td>
                    <td>-1.3%</td>
                    <td>7.0%</td>
                </tr>
                <tr>
                    <td>LINKUSDT</td>
                    <td>94.90</td>
                    <td>8.01%</td>
                    <td>9.3%</td>
                    <td>4.0%</td>
                </tr>
                <tr>
                    <td>BTCUSDT</td>
                    <td>151.0</td>
                    <td>1.01%</td>
                    <td>1.51%</td>
                    <td>5.4%</td>
                </tr>
                <tr>
                    <td>ETHUSDT</td>
                    <td>255.29</td>
                    <td>1.22%</td>
                    <td>1.53%</td>
                    <td>2.2%</td>
                </tr>
                <tr>
                    <td>SOLUSDT</td>
                    <td>94.90</td>
                    <td>-2.01%</td>
                    <td>-1.3%</td>
                    <td>3.0%</td>
                </tr>
                <tr>
                    <td>SHIBUSDT</td>
                    <td>94.90</td>
                    <td>-2.01%</td>
                    <td>-1.3%</td>
                    <td>7.0%</td>
                </tr>
                <tr>
                    <td>LINKUSDT</td>
                    <td>94.90</td>
                    <td>8.01%</td>
                    <td>9.3%</td>
                    <td>4.0%</td>
                </tr>
            </tbody>
        </table>
        <div className='table__footer' >
            <h4 className='table__footer-text' >Highest 10 CryptoCurrency</h4>
        </div>
    </>
  )
}

export default HighestCrypto;