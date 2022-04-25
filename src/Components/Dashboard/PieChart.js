import "./Chart.css";
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Food", value: 400, fill:"aqua"},
  { name: "Clothes", value: 300, fill:"#86E3CE" },
  { name: "Transport", value: 300, fill:'#D0E6A5' },
  { name: "School Cost", value: 200, fill:'#FFDD94' },
  { name: "Health Inserunce", value: 278, fill:'#FA897B'},
  { name: "Entertainment", value: 189, fill:'#CCABD8'},
  { name: "Others", value: 189, fill:'grey' }
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
