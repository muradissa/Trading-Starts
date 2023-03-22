import  React ,{useState,useEffect}from 'react';
import axios from "axios";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { tokens } from "../../theme";
import Header from "../../components/Header";
import TopFiveCrypto from "../dashboardTables/TopFiveCrypto";
import TopFiveStock from "../dashboardTables/TopFiveStock";
import HighestCrypto from "../dashboardTables/HighestCrypto";
import VwapChart from "../charts/VwapChart";
import ProfitChart from "../charts/ProfitChart";
import DealsChart from "../charts/DealsChart";
import './dashboard.css'
import { AreaChart } from '../charts/AreaChart';
import StrategyRadioGroup from './StrategyRadioGroup';
import Loading from '../global/Loading';
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
// function getStyles(name, personName, theme) {
//     return {
//         fontWeight:
//         personName.indexOf(name) === -1
//             ? theme.typography.fontWeightRegular
//             : theme.typography.fontWeightMedium,
//     };
// }

const Dashboard = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isLoading,setIsLoading]=useState(true);
    const [strategy,setStrategy] = useState(1);
    const [ordersLastWeek,setOrdersLastWeek] = useState([]);
    const [earnOrdersLastWeek,setEarnOrdersLastWeek] = useState([]);
    const [lossOrdersLastWeek,setLossOrdersLastWeek] = useState([]);
    const [earnDealsLastWeek,setEarnDealsLastWeek] = useState([]);
    const [lossDealsLastWeek,setLossDealsLastWeek] = useState([]);
    const [sumOrderEanLoss,setSumOrdersEarnLoss] = useState([]);
    const [sortingDays,setSortingDays]= useState([]);
    const [sortingDays2,setSortingDays2]= useState([]);

    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const chooseStrategy = (num)=>{
      setStrategy(num)
    }

    const dataFillingToProfitChart = (data) =>{
      let earnOrdersLastWeek2=[] ,lossOrdersLastWeek2=[];
      let sum =0;
      let sortDays=[]
      data[0].earn.forEach(element => {
        earnOrdersLastWeek2.push(element.profits)
        sum+=element.profits;
      });
      earnOrdersLastWeek2.push(sum)
      setEarnOrdersLastWeek(earnOrdersLastWeek2)

      sum=0;
      data[1].loss.forEach(element => {
        lossOrdersLastWeek2.push(-1*(element.profits));
        sum+= (-1*element.profits);
      });
      lossOrdersLastWeek2.push(sum)
      setLossOrdersLastWeek(lossOrdersLastWeek2)

      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dayName = days[date.getDay()];
        sortDays.push(dayName)
        console.log(dayName);
      }
      sortDays.push("Total")
      setSortingDays(sortDays)
    }

    const dataFillingToDealsCharts= (data) =>{
      let earnDealsLastWeek2=[] ,lossDealsLastWeek2=[];
      let sortDays=[]
      data[0].earn.forEach(element => {
        earnDealsLastWeek2.push(element.numOrder)
      });
      setEarnDealsLastWeek(earnDealsLastWeek2)
      //
      data[1].loss.forEach(element => {
        lossDealsLastWeek2.push((element.numOrder));
      });
      setLossDealsLastWeek(lossDealsLastWeek2);
      //
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dayName = days[date.getDay()];
        sortDays.push(dayName.slice(0, 2))
      }
      setSortingDays2(sortDays)
      //
      SumOrdersEarnLossLastWeek(earnDealsLastWeek2,lossDealsLastWeek2)
    }

    const SumOrdersEarnLossLastWeek = (earnDealsLastWeek2,lossDealsLastWeek2)=>{
      let sumArr=[] ;
      for (var i=0 ; i< 7 ; i++){
        sumArr.push(earnDealsLastWeek2[i]+lossDealsLastWeek2[i])
      }
      setSumOrdersEarnLoss(sumArr)
    }
    
    const getOrdersLastWeek = async()=>{
      const response1 = await axios.get(`http://localhost:5000/api/crypto/dashboard/getOrdersLastWeek/${strategy}`);
      if(response1.status === 200){
        setOrdersLastWeek(response1.data['result'])
        dataFillingToProfitChart(response1.data['result'])
        dataFillingToDealsCharts(response1.data['result'])
      }
      setIsLoading(false);

    }
    useEffect(() => {
      setIsLoading(true);
      getOrdersLastWeek()
    },[strategy])

    return (
        <Box m="20px" >
            <Box display="flex" justifyContent="space-between"  alignItems="center" style={{maxWidth:"100%",margin:"0 auto"}}>
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            <Box display="flex" justifyContent="space-between"  style={{maxWidth:"",margin:"0 auto"}}>
              <StrategyRadioGroup chooseStrategy={chooseStrategy}/>
            </Box>
            
            {!isLoading && 
            <Box style={{maxWidth:"100%"}}>
               
                <div className='container__top3'>
                  <div style={{textAlign:"center",}}> 
                    <h3 style={{color:"#fff"}}>Cryptocurrency</h3>
                    <ProfitChart earnData1={earnOrdersLastWeek} lossData1={lossOrdersLastWeek} labels={sortingDays}/>
                  </div>
                  <div className='container__top4'>
                  <div>
                      <h3 style={{textAlign:"center"}}><b style={{color:"green"}}>Successful</b> deals last week</h3>
                      <DealsChart data2={earnDealsLastWeek} labels2={sortingDays2}/>

                    </div> 
                    <div>
                      <h3 style={{textAlign:"center"}}><b style={{color:"red"}}>Failed</b> deals last week</h3>
                      <DealsChart data2={lossDealsLastWeek} labels2={sortingDays2}/>
                    </div>
                  </div>
                </div>
                <div className='container__top3'>
                  <div style={{textAlign:"center",}}> 
                    <AreaChart data2={sumOrderEanLoss} labels2={sortingDays2}/>
                  </div>
                  <div className="container__table-template">
                    <table>
                        <thead >
                        <tr className="table__header">
                          <th></th>
                          <th>Successful Orders</th>
                          <th>Failed Order</th>
                          <th>Sum</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Profit Last 7d</td>
                            <td>{earnOrdersLastWeek[7].toFixed(2)} $</td>
                            <td>-{lossOrdersLastWeek[7].toFixed(2)} $</td>
                            <td>{(earnOrdersLastWeek[7]-lossOrdersLastWeek[7]).toFixed(2)} $</td>
                          </tr>
                          <tr>
                            <td># Orders last 7d</td>
                            <td>{earnDealsLastWeek.reduce((a, b) => a + b, 0)}</td>
                            <td>{lossDealsLastWeek.reduce((a, b) => a + b, 0)}</td>
                            <td>{lossDealsLastWeek.reduce((a, b) => a + b, 0)+earnDealsLastWeek.reduce((a, b) => a + b, 0)}</td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
            </Box>
            }
            {isLoading&&
              <Loading/>
            }
        </Box>
    );
}
export default Dashboard