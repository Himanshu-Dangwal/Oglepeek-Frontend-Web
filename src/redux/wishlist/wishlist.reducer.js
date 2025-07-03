import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, RESET, LOAD_WISHLIST } from "./wishlist.types";

const wishlistInitalState = {
  loading: false,
  error: false,
  wishlist: []
};

export const wishlistReducer = (state = wishlistInitalState, { type, payload }) => {

  switch (type) {
    case ADD_TO_WISHLIST: {
      const item = payload;
      const { wishlist } = state;
      const exists = state.wishlist.find(
        (currItem) =>
          currItem.productId === item.productId &&
          currItem.variantId === item.variantId
      );

      if (exists) {
        alert("Product already in cart");
        return state;
      }
      const newItem = {
        ...item
      };
      return {
        ...state,
        wishlist: [...wishlist, newItem]
      };
    }
    case REMOVE_FROM_WISHLIST: {
      const { productId, variantId } = payload;
      return {
        wishlist: state.wishlist.filter((item) => !(item.productId === productId && item.variantId === variantId))
      };
    }

    case RESET: {
      return {
        wishlist: []
      };
    }

    case LOAD_WISHLIST: {
      return { ...state, wishlist: payload };
    }

    default: {
      return state;
    }
  }
};
