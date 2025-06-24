import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  RESET,
  applyCoupon
} from "./actionType";

const initialState = {
  loading: false,
  error: false,
  cart: [],
  coupon: 0
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case applyCoupon:
      return {
        ...state,
        coupon: payload
      };

    case ADD_TO_CART: {
      const item = payload;
      const exists = state.cart.find(
        (currItem) =>
          currItem.productId === item.productId &&
          currItem.variantId === item.variantId
      );

      console.log("Adding to cart:", item);
      console.log("Current cart:", state.cart);

      if (exists) {
        alert("Product already in cart");
        return state;
      }

      return {
        ...state,
        cart: [...state.cart, { ...item }]
      };
    }

    case REMOVE_FROM_CART: {
      const { productId, variantId } = payload;
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(item._id === productId && item.variants._id === variantId)
        )
      };
    }

    case INCREMENT: {
      const { productId, variantId } = payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === productId && item.variants._id === variantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }

    case DECREMENT: {
      const { productId, variantId } = payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === productId && item.variants._id === variantId
            ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1
            }
            : item
        )
      };
    }

    case RESET:
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};
