import React, { createContext, useContext, useEffect, useState } from "react";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // load from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("frontendUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (data) => {
    const fakeUser = {
      name: data.name,
      email: data.email,
    };

    setUser(fakeUser);
    localStorage.setItem("frontendUser", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("frontendUser");
  };

  return (
    <UserAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);