import  React ,{useState,useEffect}from 'react';
import axios from "axios";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { tokens } from "../../theme";
import Header from "../../components/Header";

function RiskManagement() {

    // low , mediem , high,very high
    // card with the diteail if it's suspended
    // manual suspend 
    // 

    return (
        <Box m="20px" >
            <Box display="flex" justifyContent="space-between"  alignItems="center" style={{maxWidth:"100%",margin:"0 auto"}}>
                <Header title="Risk Management" subtitle="Risk Management settings" />
            </Box>
            <div style={{width:'50%'}}>
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
                            <td>high btc vwap48 15min {'>'} 2.0 </td> 
                            <td>12h</td>
                            <td>low</td>
                            <td></td>

                        </tr>
                        {/* 2 */}
                        <tr>
                            <td>high btc vwap48 1h {'>'} 2.0</td>
                            <td>12h</td>
                            <td>low</td>
                            <td></td>
                        </tr>
                        {/* 3 */}
                        <tr>
                            <td>high btc vwap48 15min {'>'} -2.0</td>
                            <td>24h</td>
                            <td>low</td>
                            <td></td>
                        </tr>
                        {/* 4 */}
                        <tr>
                            <td>high btcvwap48 1h {'<'} -2.0</td>
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
        </Box>
    )
}

export default RiskManagement