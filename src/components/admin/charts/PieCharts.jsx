import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend,ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Men', value: 200 },
  { name: 'Women', value: 300 },
  { name: 'Others', value: 100 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieCharts = () => {
  return (
    <div className=" bg-white rounded-lg xl:w-[30%] my-2 xl:my-0 h-[21rem] shadow-md shadow-gray-300 hover:scale-105 duration-500  dark:bg-neutral-900 dark:shadow-neutral-700">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} innerRadius={55} outerRadius={80} fill="#8884d8"
         paddingAngle={3} dataKey="value" label>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend height={40}/>
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
