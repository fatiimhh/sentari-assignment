import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/reviews_labeled.json")
      .then((res) => res.json())
      .then((reviews) => {
        const counts = {};
        reviews.forEach((r) => {
          counts[r.issue] = (counts[r.issue] || 0) + 1;
        });
        setData(Object.entries(counts).map(([issue, count]) => ({ issue, count })));
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Review Issues Dashboard</h1>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="issue" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
