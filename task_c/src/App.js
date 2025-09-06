import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from "recharts";

export default function App() {
  const [data, setData] = useState([]);
// Load labeled reviews data
  useEffect(() => {
    fetch("reviews_labeled.json")
      .then((res) => res.json())
      .then((reviews) => {
        if (!reviews || reviews.length === 0) return;

        const counts = {};
        reviews.forEach((r) => {
          counts[r.issue] = (counts[r.issue] || 0) + 1;
        }); // Count occurences of each issue

        const formatted = Object.entries(counts).map(([issue, count]) => ({
          issue,
          count,
        })); // Format for Recharts

        setData(formatted);
      })
      .catch((err) => console.error("Failed to load reviews:", err)); // Error handling
  }, []); 

  return (
    <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Review Issues Dashboard</h1>
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}> 
            <XAxis dataKey="issue" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2770cfff">
              <LabelList dataKey="count" position="top" />
            </Bar>
          </BarChart> 
        </ResponsiveContainer> 
      </div>
    </div>
  );
}
