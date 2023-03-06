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
      text: 'VWAP BTC',
    },
  },
};

const labels = ['', '', '', '', '', '', '','', '', '', '', '', '', '','', '', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      label: 'VWAP 48',
      data: labels.map(() => faker.datatype.number({ min: -6, max: 6 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'VWAP 96',
      data: labels.map(() => faker.datatype.number({ min: -6, max: 6 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: '-3',
      data: labels.map(() => faker.datatype.number({ min: -3, max: -3 })),
      borderColor: 'rgb(255, 220, 0)',
      backgroundColor: 'rgba(255, 220, 0, 0.5)',
    },
    {
      label: '3',
      data: labels.map(() => faker.datatype.number({ min: 3, max: 3 })),
      borderColor: 'rgb(255, 220, 0)',
      backgroundColor: 'rgba(255, 220, 0, 0.5)',
    },
  ],
};


function VwapChart() {
  return (
    <div><Line options={options} data={data} /></div>
  )
}

export default VwapChart;