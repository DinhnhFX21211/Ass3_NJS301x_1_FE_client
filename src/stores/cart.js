import { createSlice } from "@reduxjs/toolkit";
import { ShopAPI } from "../apis/shopAPIs";

const getCartItems = async () => {
  const res = await ShopAPI.getCartItem();
  if (res.status === 200) {
    return res.data.cart;
  }
};

const initialState = {
  cartList: (await getCartItems()) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const index = getIndexOfProductInCart(state, action.payload.product._id);
      if (index >= 0) {
        state.cartList[index].quantity += action.payload.quantity;
      } else {
        state.cartList.push(action.payload);
      }
    },
    updateCartItem(state, action) {
      const indexOfItem = state.cartList.findIndex(
        (item) => item.product._id === action.payload.productId
      );
      if (indexOfItem >= 0) {
        state.cartList[indexOfItem].quantity = action.payload.quantity;
      }
    },
    deleteCartItem(state, action) {
      const index = getIndexOfProductInCart(state, action.payload);
      if (index >= 0) {
        state.cartList.splice(index, 1);
      }
    },
    setCurrentUserCart(state, action) {
      state.cartList = action.payload || [];
    },
    resetCart(state) {
      state.cartList = [];
    },
  },
});

const getIndexOfProductInCart = (state, productId) => {
  const index = state.cartList.findIndex(
    (item) => item.product._id === productId
  );
  return index;
};

export default cartSlice.reducer;

export const CartActions = cartSlice.actions;
