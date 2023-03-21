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

const labels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Orders',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      borderColor: 'rgb(53, 235, 162)',
      backgroundColor: 'rgba(53, 235, 162, 0.5)',
    },
  ],
};

export function AreaChart() {
  return <Line options={options} data={data} />;
}