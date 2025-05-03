// src/components/DashboardLayout.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardLayout({ children }) {
  const [currentLevel, setCurrentLevel] = useState(3); // Example level
  const sprints = [
    'Intro to Web Dev',
    'HTML Basics',
    'CSS Fundamentals',
    'JavaScript 101',
    'React Essentials'
  ];

  return (
    <div className="flex min-h-screen bg-[#0D0D0D] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] p-6 border-r border-gray-800 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary mb-4">My Progress</h2>
          <div className="mb-6">
            <p className="text-sm text-gray-400">Level {currentLevel}</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-1">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${(currentLevel / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          <nav className="space-y-3">
            {sprints.map((title, idx) => (
              <Link
                key={idx}
                to={`#sprint-${idx}`}
                className="block text-gray-300 hover:text-primary text-sm"
              >
                Sprint {idx + 1}: {title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          <Link
            to="/chat"
            className="block bg-primary text-black text-center font-bold py-2 rounded hover:opacity-90"
          >
            🗨 Chat with Peers
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
