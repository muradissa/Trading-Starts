import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['', '', '', '', '', '', '','', '', '', '', '', '', '','', '', '', '', '', '', '','','','',
'', '', '', '', '', '', '','', '', '', '', '', '', '','', '', '', '', '', '', '','','','','',''];


function VwapChart(props) {

  const data = {
    labels,
    datasets: [
      {
        label: 'VWAP 48',
        data: labels.map((temp,index) => props.coinVwap48Time15m[index]),
        borderColor: 'rgb(255, 220, 0)',
        backgroundColor: 'rgba(255, 220, 0, 0.5)',
      },
      {
        label: '2',
        // data: labels.map(() => faker.datatype.number({ min: 3, max: 3 })),
        data: labels.map(() => 2),
        borderColor: 'rgb(62, 67, 150)',
        backgroundColor: 'rgba(205,92,92, 0.5)',
      },
      {
        label: '-2',
        // data: labels.map(() => faker.datatype.number({ min: 3, max: 3 })),
        data: labels.map(() => -2),
        borderColor: 'rgb(62, 67, 150)',
        backgroundColor: 'rgba(205,92,92, 0.5)',
      },
      {
        label: '-3',
        data: labels.map(() => -3),
        borderColor: 'rgb(62, 67, 150)',
        backgroundColor: 'rgba(0, 255, 50, 0.5)',
      },
      {
        label: '3',
        // data: labels.map(() => faker.datatype.number({ min: 3, max: 3 })),
        data: labels.map(() => 3),
        borderColor: 'rgb(62, 67, 150)',
        backgroundColor: 'rgba(255,0,50, 0.5)',
      },
    ],
  };
  return (
    <div><Line options={options} data={data} /></div>
  )
}

export default VwapChart;