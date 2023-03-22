import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
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
    //   text: 'Chart.js Line Chart',
    },
  },
};

// const labels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Orders',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
//       borderColor: 'rgb(53, 235, 162)',
//       backgroundColor: 'rgba(53, 235, 162, 0.5)',
//     },
//   ],
// };

export function AreaChart({data2,labels2}) {
  return <Line options={options} data={
    {
      labels:labels2,
      datasets: [
        {
          fill: true,
          label: 'Orders',
          data: data2,
          borderColor: 'rgb(53, 235, 162)',
          backgroundColor: 'rgba(53, 235, 162, 0.5)',
        },
      ],
    }
  } />;
}