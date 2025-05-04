// src/context/UserContext.jsx
import { createContext, useContext } from "react";

// 🔧 Fake user for testing
const fakeUser = {
  id: "user123",
  username: "Meesh",
};

const UserContext = createContext({ user: fakeUser });

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: fakeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

