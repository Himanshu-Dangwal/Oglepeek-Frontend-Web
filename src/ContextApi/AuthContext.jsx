// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   // Initialize from localStorage
//   const [isAuth, setisAuth] = useState(() => {
//     return localStorage.getItem("token") ? true : false;
//   });

//   const [Authdata, setAuthData] = useState(() => {
//     const token = localStorage.getItem("token");
//     const firstName = localStorage.getItem("firstName");
//     return token && firstName ? { token, firstName } : null;
//   });

//   // Sync changes back to localStorage
//   useEffect(() => {
//     if (isAuth && Authdata) {
//       localStorage.setItem("token", Authdata.token);
//       localStorage.setItem("firstName", Authdata.firstName);
//     } else {
//       localStorage.removeItem("token");
//       localStorage.removeItem("firstName");
//     }
//   }, [isAuth, Authdata]);

//   return (
//     <AuthContext.Provider value={{ isAuth, setisAuth, Authdata, setAuthData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCartFromBackend } from "../redux/CartPage/action";
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [Authdata, setAuthData] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // On first load, check session
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/auth/check", {
          credentials: "include", // ✅ required to send cookie
          method: "POST",
        });

        if (res.ok) {
          const data = await res.json();
          setisAuth(true);
          setAuthData({ firstName: data.firstName });
          dispatch(loadCartFromBackend());
        } else {
          setisAuth(false);
          setAuthData(null);
        }
      } catch (err) {
        setisAuth(false);
        setAuthData(null);
      }
    };

    checkSession();
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ isAuth, setisAuth, Authdata, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
