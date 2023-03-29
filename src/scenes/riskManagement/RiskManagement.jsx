import  React ,{useState,useEffect}from 'react';
import axios from "axios";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import RiskManageTable from './RiskManageTable';
import RiskMangeCard from './RiskMangeCard';
import RiskManageSettings from './RiskManageSettings';

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
            <div style={{display:"flex",gap:"2rem"}}>
                <div style={{width:''}}>
                    <RiskManageTable/>
                </div>
                <RiskMangeCard/>
            </div>
            <div>
                <RiskManageSettings/>
            </div>
            <div>Control Manaual</div>
        </Box>
    )
}

export default RiskManagement