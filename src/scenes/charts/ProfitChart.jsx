import React from 'react';
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
    title: {
      display: true,
      text: 'Earn VS Loss',
    },
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satrday','Total'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Earn',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(30, 200, 30, 0.5)',
    },
    {
      label: 'Loss',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(200, 30, 30, 0.5)',
    },
    
  ],
};

// export function App() {
//   return <Bar options={options} data={data} />;
// }

function ProfitChart() {
  return (
    <div><Bar options={options} data={data} /></div>
  )
}

export default ProfitChart;