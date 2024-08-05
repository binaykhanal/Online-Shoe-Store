import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const Bargraph=()=>{
    return (
      <div className=" h-[21rem] bg-white p-1.5 md:p-4 rounded-md w-full shadow-md shadow-gray-300 dark:bg-neutral-900 dark:shadow-neutral-700">
      <h1 className=' py-1.5 dark:text-violet-700'>Transactions</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{right: 20,}}>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend height={45}/>
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="purchase" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  
}

export default Bargraph;
