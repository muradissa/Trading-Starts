import React,{useState,useEffect} from 'react';
import axios from "axios";
import VwapChart from "../charts/VwapChart";
import {tokens} from "../../theme";
import {Typography , Box , useTheme} from "@mui/material";

import './analysis.css';

function AnalysisOneCoin(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.made);
    const [priceAndTPS, setPriceAndTPS] = useState([]);
    const [coinPVT, setCoinPVT] = useState([]);
    const [coinPVComparing, setCoinPVComparing] = useState([]);
    const [coinVwap48Time15m, setCoinVwap48Time15m] = useState([]);
    const [coinVwap48Time1h, setCoinVwap48Time1h] = useState([]);
    const firstColumnPVT =['Price','Volume','Trades'];
    const [timer30Sec, setTimer30Sec] = useState(false);
    const [coinNAME, setcoinNAME] = useState(('BTCUSDT'));

    // setcoinNAME(props.selectedCoin)
    const coinName =()=>{
        if(props.selectedCoin === undefined){
            return 'BTCUSDT'
        }
        // setcoinNAME(props.selectedCoin)
        return props.selectedCoin;
    }
    const getCoinPriceAndTPS = async () =>{
        const response =  await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-price-tps/${props.selectedCoin}`);
        if(response.status === 200){
            setPriceAndTPS(response.data['result'])
        }
    }
    const getCoinVWAP4815m = async () =>{
        const response = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-vwap48-15min/${props.selectedCoin}`);
        if(response.status === 200){
            setCoinVwap48Time15m(response.data['result'])
        }
    }
    const getCoinVWAP481h = async () =>{
        const response = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-vwap48-1h/${props.selectedCoin}`);
        if(response.status === 200){
            setCoinVwap48Time1h(response.data['result'])
        }
    }
    const getCoinTablePVT = async () =>{
        const response = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-pvt-24h/${props.selectedCoin}`)
        if(response.status === 200){
            setCoinPVT(response.data['result'])
        }
    }
    const getCoinTablePVComparing = async () =>{
        const response = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-vt-comapring/${props.selectedCoin}`);
        if(response.status === 200){
            setCoinPVComparing(response.data['result'])
        }
    }

    const changeTextColorPercentage = (percentage) =>{
        if(Number(percentage) > 0){
            return 'green';
        }
        if(Number(percentage) < 0){
            return 'red';
        }
        return 'white'; 
    }

    useEffect(() => {
        getCoinPriceAndTPS();
        getCoinTablePVT();
        getCoinTablePVComparing();
        getCoinVWAP4815m();
        getCoinVWAP481h();
        
        const interval = setInterval(async () => {
            try{
                const response1 = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-price-tps/${props.selectedCoin}`);
                const response2 = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-pvt-24h/${props.selectedCoin}`)
                const response3 = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-vwap48-15min/${props.selectedCoin}`);
                const response4 = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-vt-comapring/${props.selectedCoin}`);
                const response5 = await axios.get(`http://localhost:5000/api/crypto/analysis/getcoin-vwap48-1h/${props.selectedCoin}`);


                if(response1.status === 200){
                    setPriceAndTPS(response1.data['result'])
                }
                if(response2.status === 200){
                    setCoinPVT(response2.data['result'])
                }
                if(response3.status === 200){
                    setCoinVwap48Time15m(response3.data['result'])
                }
                if(response4.status === 200){
                    setCoinPVComparing(response4.data['result'])
                }
                if(response5.status === 200){
                    setCoinVwap48Time1h(response5.data['result'])
                }
            }catch(err){
                console.log("Error from getcoin Analysis");
            }

        }, 15000);
        return () => clearInterval(interval);
    }, []);

 
  return (
    <div className='container__analysis-coin'>
        <div className='' style={{margin:"0 auto",display:"table"}}>
            <h2 className='' >{coinName()} - <b style={{color:"yellow"}}>${priceAndTPS['close']}</b> - TPS : {priceAndTPS['tps']} </h2>{/**TPS : trade per second ,update every 1min price and tps*/}
        </div>
        <div className='container__table-template'>
            <table >
                <thead style={{borderBottom:"1px solid #fff"}}>
                    <tr className="table__header">
                        <th>#</th>
                        <th>5m</th>
                        <th>15m</th>
                        <th>1h</th> {/**avg */}
                        <th>4h</th> {/**avg */}
                        <th>24h</th> {/**avg */}
                    </tr>
                </thead>
                <tbody style={{borderBottom:"1px solid #fff"}}>
                    {
                        coinPVT.map((rawData,index) =>{
                            return(
                                <tr>
                                    <td style={{backgroundColor:'#3e4396'}}>{firstColumnPVT[index]}</td>
                                    <td>{rawData['min5']}%</td>
                                    <td>{rawData['min15']}%</td>
                                    <td>{rawData['h1']}%</td>
                                    <td>{rawData['h4']}%</td>
                                    <td>{rawData['h24']}%</td>
                                </tr>
                            )
                        })
                    }              
                </tbody>
            </table>
            <div className='table__footer' >
                <h5 className='table__footer-text' >Note : volume and trades comparing the avg with the last 15min</h5>
            </div>
        </div>
        <br/>
        <br/>
        <div className='container__table-template'>
            <table >
                <thead style={{borderBottom:"1px solid #fff"}}>
                    <tr className="table__header">
                        <th></th>
                        <th>1h</th>
                        <th>2h</th>
                        <th>3h</th> 
                        <th>4h</th> 
                        <th>1d</th>
                        <th>2d</th>  
                        <th>3d</th> 
                        <th>4d</th> 
                        <th>5d</th> 
                        <th>6d</th> 
                    </tr>
                </thead>
                <tbody style={{borderBottom:"1px solid #fff"}}>
                    {
                        coinPVComparing.map((rawData,index) =>{
                            return(
                                /**
                                 * {h1: 0,h2: 0,h3 : 0,h4 : 0,d1: 0,d2: 0,d3: 0,d4: 0,d5: 0,d6: 0}
                                 */
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
                        })
                    }              
                </tbody>
            </table>
            <div className='table__footer' >
                <h5 className='table__footer-text' >Note : volume and trades comparing 1:1</h5>
            </div>
        </div>
        <div className='container__charts-vwap-trades'>
            <div>
                <VwapChart coinVwap48={coinVwap48Time15m}/>
                <h3 style={{textAlign:"center",color:colors.grey[700],marginTop:"0" }}>
                    VWAP 48 15min = <b style={{color:"yellow"}}>{coinVwap48Time15m[coinVwap48Time15m.length-1]}</b>
                </h3> 
            </div>
            <div>
                <VwapChart coinVwap48={coinVwap48Time1h} style={{background:colors.primary[300]}}/>
                <h3 style={{textAlign:"center",color:colors.grey[700],marginTop:"0" }}>
                    VWAP 48 1h = <b style={{color:"yellow"}}>{coinVwap48Time1h[coinVwap48Time15m.length-1]}</b>
                </h3> 
            </div>
        </div>
    </div>
  )
}

export default AnalysisOneCoin