import React from 'react'
import CryptoOrdersTable from './CryptoOrdersTable';
import Box from '@mui/material/Box';
import { tokens } from "../../theme";
import Header from "../../components/Header";

function BotDashboard() {
  return (
    <Box  m="20px">
        <Box display="flex" justifyContent="space-between"  alignItems="center" style={{maxWidth:"100%",margin:"0 auto"}}>
            <Header title="Bot" subtitle="Bot deals schedules" />
        </Box>
        <div className='container__bot'>        
            <CryptoOrdersTable/>        
        </div>
        
    </Box>
  )
}

export default BotDashboard