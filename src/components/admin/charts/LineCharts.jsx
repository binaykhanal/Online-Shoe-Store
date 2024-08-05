import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan-Feb',
    sales: 4000,
    purchase: 2400,
    amt: 2400,
  },
  {
    name: 'Mar-Apr',
    sales: 3000,
    purchase: 1398,
    amt: 2210,
  },
  {
    name: 'Jun-Jul',
    sales: 2000,
    purchase: 9800,
    amt: 2290,
  },
  {
    name: 'Aug-Sept',
    sales: 2780,
    purchase: 3908,
    amt: 2000,
  },
  {
    name: 'Oct-Nov',
    sales: 1890,
    purchase: 4800,
    amt: 2181,
  },
  {
    name: 'Dec',
    sales: 2390,
    purchase: 3800,
    amt: 2500,
  },
];

const LineCharts = () => {
  return (
    <div className=" h-[23rem] bg-white p-1.5 md:p-4 rounded-sm w-full my-2  dark:bg-black">
    <h1 className=' py-2 dark:text-violet-700'>Transaction</h1>
        
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{top: 5,right: 20,bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend height={56}/>
        <Line type="monotone" dataKey="purchase" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer> 
    </div>
  );
};

export default LineCharts;
