// src/utils/onlinePresence.js
import { ref, onDisconnect, onValue, set } from "firebase/database";
import { database } from "../firebase";

// ✅ Set user's online status in Firebase
export function setUserOnlinePresence(userId, username) {
  const userRef = ref(database, `onlineUsers/${userId}`);

  // Remove user on disconnect
  onDisconnect(userRef).remove();

  // Set initial presence
  set(userRef, {
    username,
    online: true,
    lastSeen: Date.now(),
  });

  // Optional cleanup (not strictly needed for now)
  return () => {
    set(userRef, {
      username,
      online: false,
      lastSeen: Date.now(),
    });
  };
}

// ✅ Optional: Listen to online users (used in OnlineUsers.jsx)
export function listenToOnlineUsers(callback) {
  const usersRef = ref(database, "onlineUsers");

  return onValue(usersRef, (snapshot) => {
    const data = snapshot.val() || {};
    callback(data);
  });
}
