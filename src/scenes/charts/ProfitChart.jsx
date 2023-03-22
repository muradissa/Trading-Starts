import React ,{useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    // title: {
    //   display: true,
    //   text: 'Earn VS Loss',
    // },
  },
};



function ProfitChart({earnData1,lossData1,labels}) {

  // const [earnData,setEarnData] = useState([]);
  // const [lossData,setLossData] = useState([]);
 
  return (
    <div>
      <Bar options={options} data={
        { 
          labels,
          datasets: [
            {
              label: 'Earn',
              data:earnData1,
              backgroundColor: 'rgba(30, 200, 30, 0.5)',
            },
            {
              label: 'Loss',
              data:lossData1,
              backgroundColor: 'rgba(200, 30, 30, 0.5)',
            },
          ],
        }
      } />

    </div>
  )
}

export default ProfitChart;