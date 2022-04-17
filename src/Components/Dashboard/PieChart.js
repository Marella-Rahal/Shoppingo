import "./Chart.css";
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Food", value: 400, fill:"aqua"},
  { name: "Clothes", value: 300, fill:"black" },
  { name: "Transport", value: 300, fill:'green' },
  { name: "School Cost", value: 200, fill:'chocolate' },
  { name: "Health Inserunce", value: 278, fill:'olive' },
  { name: "Entertainment", value: 189, fill:'blue' },
  { name: "Others", value: 189, fill:'fuchsia' }
];



export default function PieChart2() {

  return (
    
    <PieChart width={400} height={300} >
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data01}
        cx={200}
        cy={150}
        outerRadius={80}
        fill="#fff"
        label
      />
     
      <Tooltip />
    </PieChart>
  );
}
