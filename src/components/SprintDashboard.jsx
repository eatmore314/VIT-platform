// src/components/SprintDashboard.jsx
import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { setUserOnlinePresence } from "../utils/onlinePresence";
import { useLocation } from "react-router-dom";
import CodeLab from "./CodeLab";
import OnlineUsers from "./OnlineUsers";

export default function SprintDashboard() {
  const { user } = useUser();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      console.log("USER:", user); // Check if context is working
      const cleanup = setUserOnlinePresence(user.id, user.username);
      return () => cleanup();
    }
  }, [user, location.pathname]);

  return (
    <div className="h-screen w-full bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-semibold mb-4">Sprint Dashboard</h1>
      <p className="text-sm text-gray-400 mb-2">
        Welcome back, {user?.username || "Guest"}!
      </p>

      {/* Display Online Users */}
      <OnlineUsers />

      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <CodeLab />
      </div>
    </div>
  );
}
