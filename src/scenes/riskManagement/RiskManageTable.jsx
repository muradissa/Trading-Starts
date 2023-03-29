import React from 'react'

function RiskManageTable() {
  return (
    <div>
        <table>
            <thead >
                <tr className="table__header">
                    <th>Types risk</th>
                    <th>Suspend Time</th>
                    <th>Risk level</th>
                    <th>until date</th>
                </tr>
            </thead>
            <tbody>
                {/* 1 */}
                <tr>
                    <td>btc vwap48 15min {'>'} 2.0 </td> 
                    <td>12h</td>
                    <td>low</td>
                    <td></td>

                </tr>
                {/* 2 */}
                <tr>
                    <td>btc vwap48 1h {'>'} 2.0</td>
                    <td>12h</td>
                    <td>low</td>
                    <td></td>
                </tr>
                {/* 3 */}
                <tr>
                    <td>btc vwap48 15min {'>'} -2.0</td>
                    <td>24h</td>
                    <td>low</td>
                    <td></td>
                </tr>
                {/* 4 */}
                <tr>
                    <td>btcvwap48 1h {'<'} -2.0</td>
                    <td>72h</td>
                    <td>low</td>
                    <td></td> 
                </tr>
            </tbody>
        </table>
        <div className='table__footer' >
            <h4 className='table__footer-text' >{' s'}</h4>
        </div>
    </div>
  )
}

export default RiskManageTable