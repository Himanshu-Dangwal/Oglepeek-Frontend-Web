import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, RESET, LOAD_WISHLIST } from "./wishlist.types";

export const loadWishlistFromLocalStorage = () => (dispatch) => {
  try {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    dispatch({ type: LOAD_WISHLIST, payload: wishlist });
  } catch (err) {
    console.error("Failed to load wishlist from localStorage:", err);
  }
};

export const clearWishlist = () => {
  return {
    type: RESET
  };
};


export const addToWishlist = (item) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_WISHLIST, payload: item });
  } catch (err) {
    console.error("Failed to add to wishlist")
  }
};

export const removeFromWishlist = (item) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: item });
  } catch (err) {
    console.error("Failed to remove from wishlist")
  }
};

export const WishlistReset = (id) => {
  return {
    type: RESET
  };
};
