// import "./Chart.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer

} from "recharts";

const data = [
  {
    name: "Jan",
    SY: 4000,
 
  },
  {
    name: "Feb",
    SY: 3000,

  },
  {
    name: "Mar",
    SY: 2000,
 
  },
  {
    name: "Apr",
    SY: 2780,
 
  },
  {
    name: "May",
    SY: 1890,
    
  },
  {
    name: "June",
    SY: 2390,
 
  },
  {
    name: "July",
    SY: 3490,
  },
  {
    name: "Aug",
    SY: 3490,
  },
  {
    name: "Sept",
    SY: 3490,
  },
  {
    name: "Oct",
    SY: 3490,
  },
  {
    name: "Nov",
    SY: 3490,
  },
  {
    name: "Dec",
    SY: 3490,
  }
];

export default function BarChart2() {
  return (
    <ResponsiveContainer width="95%" height={500}>
    <BarChart
      width={700}
      height={500}
      data={data}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="SY" fill="#11324D" />
    </BarChart>
    </ResponsiveContainer>
  );
}
