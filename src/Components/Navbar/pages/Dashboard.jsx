import React from 'react';
import { BarChart, Bar, XAxis } from 'recharts';
import { PieChart, Pie, Cell } from "recharts";
import { LineChart, Line } from "recharts";

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];
const data2= [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>

      <PieChart width={400} height={400} >
        <Pie
          data={data2}
          cx={200}
          cy={200}
          outerRadius={130}
          fill="#8884d8"
          label
        >
          {data2.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Dashboard;