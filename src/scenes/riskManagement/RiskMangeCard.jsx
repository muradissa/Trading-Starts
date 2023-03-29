import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import './riskmanagment.css'
import GppGoodIcon from '@mui/icons-material/GppGood';
import WarningIcon from '@mui/icons-material/Warning';

function RiskMangeCard() {
  const [isSuspending, setIsSuspending ] = useState(false)


  return (
    <div className='risk-managment-card' style={{backgroundColor:"#1F2A40"}}>
      {!isSuspending && 
      <>
        <div className='risk-managment-card-title'>
          <h3><GppGoodIcon style={{color:'00ee00'}}/> The trading system is running .. </h3>
        </div>
        <hr/>
        <div className='risk-managment-card-sub-titles'>
          <div className='risk-managment-card-sub-title'>
            <h3>last risk : btc vwap48 15min {">"} -2.0</h3>
          </div>
          <div className='risk-managment-card-sub-title'>
            <h3>start suspending in : 3:02 26/3/2023</h3>
            {/* <h4>3:02 26/3/2023</h4> */}
          </div>
          <div className='risk-managment-card-sub-title'>
            <h3>end suspending in :3:02 27/3/2023 </h3>
          </div>
        </div>
      </>
      }
      {isSuspending && 
      <>
        <div className='risk-managment-card-title'>
          <h3><WarningIcon style={{color:'ffee00'}}/> The trading system is Suspending .. </h3>
        </div>
        <hr/>
        <div className='risk-managment-card-sub-title1'>
          <h3>type risk : btc vwap48 15min {">"} -2.0</h3>
        </div>
        <div className='risk-managment-card-sub-title1'>
          <h3>start suspending in : 3:02 26/3/2023</h3>
        </div>
        <div className='risk-managment-card-sub-title1'>
          <h3>end suspending in :3:02 27/3/2023 </h3>
        </div>
        <div className='risk-managment-card-sub-title1'>
          <h4>the system will take the longest suspending</h4>
        </div>
      </>
      }

      {/* <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack> */}
    </div>
  )
}

export default RiskMangeCard