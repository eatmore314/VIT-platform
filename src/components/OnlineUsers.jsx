// src/components/OnlineUsers.jsx
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase"; // ✅ Make sure the path is correct

export default function OnlineUsers() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const usersRef = ref(database, "onlineUsers");
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};
      setUsers(data);
    });

    return () => unsubscribe(); // ✅ Clean up listener
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-medium mb-2">Online Now:</h2>
      <ul className="list-disc ml-6 text-sm text-green-400">
        {Object.entries(users).map(([id, user]) => (
          <li key={id}>
            {user.username} {user.online ? "(Online)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
