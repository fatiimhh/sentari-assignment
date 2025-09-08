import React, { useState } from "react";

// Simulated IG outreach with rate-limited messages
export default function App() {
  // 2 real competitor followers 
  const [handles, setHandles] = useState(["@mrscomptoncat", "@vadym.semeniuk"]);
  const [newHandle, setNewHandle] = useState("");
  const [sent, setSent] = useState([]);

  const DUMMY_ACCOUNT = "@mydummyaccount"; // simulated sender (dummy account for outreach)

  // Simulate sending messages
  const sendMessages = () => {
    handles.forEach((handle, i) => {
      setTimeout(() => {
        setSent((prev) => [
          ...prev,
          { handle, msg: `Hi! Thanks for following us. (from ${DUMMY_ACCOUNT})` },
        ]);
        console.log(`${DUMMY_ACCOUNT} sent message to ${handle}`);
      }, i * 1000); // 1s delay = simulate rate limit
    });
  };

  // Add new handle if not duplicate
  const addHandle = () => {
    if (newHandle.trim() && !handles.includes(newHandle.trim())) {
      setHandles([...handles, newHandle.trim()]);
      setNewHandle("");
    }
  };

  // Clear sent messages
  const clearSent = () => {
    setSent([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          IG Outreach Simulator 📩
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Simulate safe outreach to real competitor followers using a dummy account.
        </p>

        <div className="flex mb-4 gap-2">
          <input
            type="text"
            value={newHandle}
            onChange={(e) => setNewHandle(e.target.value)}
            placeholder="@newuser"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            onClick={addHandle}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Add
          </button>
        </div>

        <button
          onClick={sendMessages}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition mb-2"
        >
          Start Simulation
        </button>

        <button
          onClick={clearSent}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-lg transition mb-4"
        >
          Clear Sent Messages
        </button>

        <ul className="mt-6 space-y-2">
          {sent.map((s, idx) => (
            <li
              key={idx}
              className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700"
            >
              {DUMMY_ACCOUNT} sent to <span className="font-semibold">{s.handle}</span>: {s.msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
