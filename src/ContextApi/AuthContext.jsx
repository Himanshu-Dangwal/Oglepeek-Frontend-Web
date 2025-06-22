import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize from localStorage
  const [isAuth, setisAuth] = useState(() => {
    return localStorage.getItem("token") ? true : false;
  });

  const [Authdata, setAuthData] = useState(() => {
    const token = localStorage.getItem("token");
    const firstName = localStorage.getItem("firstName");
    return token && firstName ? { token, firstName } : null;
  });

  // Sync changes back to localStorage
  useEffect(() => {
    if (isAuth && Authdata) {
      localStorage.setItem("token", Authdata.token);
      localStorage.setItem("firstName", Authdata.firstName);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("firstName");
    }
  }, [isAuth, Authdata]);

  return (
    <AuthContext.Provider value={{ isAuth, setisAuth, Authdata, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
