// import {
//   applyCoupon,
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   INCREMENT,
//   DECREMENT,
//   RESET
// } from "./actionType";

// export const addToCart = (product) => {
//   return {
//     type: ADD_TO_CART,
//     payload: product
//   };
// };

// export const removeFromCart = (productId, variantId) => {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: { productId, variantId }
//   };
// };

// export const increment = (productId, variantId) => {
//   return {
//     type: INCREMENT,
//     payload: { productId, variantId }
//   };
// };

// export const decrement = (productId, variantId) => {
//   return {
//     type: DECREMENT,
//     payload: { productId, variantId }
//   };
// };



import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  RESET,
  applyCoupon,
} from "./actionType";

export const addToCart = (item) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART, payload: item });

    // ✅ Optimistically update backend
    console.log("Adding to cart:, addToCartFunction", item);
    await axios.post("http://localhost:8000/api/cart/", {
      productId: item.productId,
      variantId: item.variantId,
      quantity: item.quantity || 1
    }, { withCredentials: true });

  } catch (err) {
    console.error("Failed to sync cart", err);
  }
};

export const removeFromCart = (productId, variantId) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { productId, variantId }
  });

  try {
    await axios.delete("http://localhost:8000/api/cart/", {
      productId, variantId
    }, { withCredentials: true });
  } catch (err) {
    console.error("Failed to remove item", err);
  }
};

export const increment = (productId, variantId) => async (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: { productId, variantId }
  });

  try {
    await axios.post("http://localhost:8000/api/cart/", {
      productId,
      variantId,
      quantityChange: +1
    }, { withCredentials: true });
  } catch (err) {
    console.error("Failed to update quantity", err);
  }
};

export const decrement = (productId, variantId) => async (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: { productId, variantId }
  });

  try {
    await axios.post("http://localhost:8000/api/cart/", {
      productId,
      variantId,
      quantityChange: -1
    }, { withCredentials: true });
  } catch (err) {
    console.error("Failed to update quantity", err);
  }
};


export const loadCartFromBackend = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/cart", {
      withCredentials: true
    });

    const items = res.data?.items || [];
    console.log("Loaded cart items from backend:", items);
    items.forEach(item => {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity
        }
      });
    });
  } catch (err) {
    console.error("Failed to load cart from backend", err);
  }
};

export const cartReset = () => {
  return {
    type: RESET
  };
};


export const coupon = (couponCode) => (dispatch) => {
  if (couponCode === "MASAI40") {
    dispatch({ type: applyCoupon, payload: 40 });
  } else if (couponCode === "MASAI30") {
    dispatch({ type: applyCoupon, payload: 30 });
  } else if (couponCode === "MASAI90") {
    dispatch({ type: applyCoupon, payload: 90 });
  } else if (couponCode === "MASAI20") {
    dispatch({ type: applyCoupon, payload: 20 });
  } else if (couponCode === "MASAI70") {
    dispatch({ type: applyCoupon, payload: 70 });
  } else {
    dispatch({ type: applyCoupon, payload: 0 });
  }
};
