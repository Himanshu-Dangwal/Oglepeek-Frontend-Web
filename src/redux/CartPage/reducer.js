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
            !(item.productId === productId && item.variantId === variantId)
        )
      };
    }

    case INCREMENT: {
      const { productId, variantId } = payload;
      // console.log(productId)
      // console.log(variantId)
      return {
        ...state,
        cart: state.cart.map((item) => {
          // console.log(item)
          if (item.productId === productId && item.variantId === variantId) {
            return { ...item, quantity: item.quantity + 1 }
          }

          return item
        })
      };
    }

    case DECREMENT: {
      const { productId, variantId } = payload;
      console.log(productId)
      console.log(variantId)
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            console.log(item)
            if (item.productId === productId && item.variantId === variantId) {
              return {
                ...item,
                quantity: item.quantity - 1
              };
            }
            return item;
          })
          .filter((item) => item.quantity > 0) // remove items with 0 quantity
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
