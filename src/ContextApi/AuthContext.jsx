import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCartFromBackend } from "../redux/CartPage/action";
import { loadWishlistFromLocalStorage } from "../redux/wishlist/wishlist.actions";
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
          setAuthData({ firstName: data.firstName, peekCoins: data.peekCoins });
          dispatch(loadCartFromBackend());
          dispatch(loadWishlistFromLocalStorage());
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
