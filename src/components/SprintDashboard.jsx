// src/components/SprintDashboard.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sprintData = [
  { id: 1, title: "Intro to HTML" },
  { id: 2, title: "Styling with CSS" },
  { id: 3, title: "JavaScript Basics" },
];

export default function SprintDashboard() {
  const [completedSprints, setCompletedSprints] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("completedSprints")) || [];
    setCompletedSprints(data);
  }, []);

  const isUnlocked = (index) => {
    if (index === 0) return true;
    return completedSprints.includes(index);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Sprints</h1>
      <div className="grid gap-4">
        {sprintData.map((sprint, index) => {
          const completed = completedSprints.includes(sprint.id);
          const unlocked = isUnlocked(index);

          return (
            <div
              key={sprint.id}
              className={`p-4 rounded border shadow-sm ${
                completed ? "border-green-400" : "border-gray-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">
                    {sprint.title}
                  </h2>
                  {completed && (
                    <span className="text-green-600 text-sm">Completed</span>
                  )}
                </div>
                {unlocked ? (
                  <Link
                    to={`/sprint/${sprint.id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Open
                  </Link>
                ) : (
                  <span className="text-gray-400">Locked</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
