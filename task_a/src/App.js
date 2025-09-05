import React, { useState } from "react";

export default function App() {
  const [handles, setHandles] = useState(["@user1", "@user2", "@user3"]);
  const [sent, setSent] = useState([]);

  const sendMessages = () => {
    handles.forEach((handle, i) => {
      setTimeout(() => {
        setSent((prev) => [
          ...prev,
          { handle, msg: "Hi! Thanks for following us." },
        ]);
      }, i * 1000); // 1s delay = simulate rate limit
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          IG Outreach Simulator 
          📩
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Simulate safe outreach with rate-limited messages.
        </p>

        <button
          onClick={sendMessages}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition"
        >
          Start Simulation
        </button>

        <ul className="mt-6 space-y-2">
          {sent.map((s, idx) => (
            <li
              key={idx}
              className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700"
            >
              Sent to <span className="font-semibold">{s.handle}</span>:{" "}
              {s.msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
