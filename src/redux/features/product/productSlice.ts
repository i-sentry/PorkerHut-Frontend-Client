import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productData } from "../../../utils/productData";

export interface IProduct {
  id: string | number;
  title: string;
  type?: string;
  category: string;
  price: string;
  product?: {
    name: string;
    location: string;
    weight?: string;
    productName: string;
  };
  img: string;
  desc: string;
  rating?: number;
  images?: string[];
  availability?: string;
  quantity?: number;
}

export interface ICart {
  [productId: string]: IProduct;
}

export interface ProductState {
  productList: IProduct[];
  cart: ICart;
  favorites: ICart;
  loading?: boolean;
}

const initialState: ProductState = {
  productList: productData,
  cart: JSON.parse(localStorage.getItem("cart") || "{}"),
  favorites: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct | IProduct[]>) => {
      if (Array.isArray(action.payload)) {
        state.productList = [...state.productList, ...action.payload];
      } else {
        state.productList.push(action.payload);
      }
    },
    addProductToCart: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const product = state.productList.find(
        (product) => product.id === action.payload.id
      );
      if (product && !state.cart[action.payload.id]) {
        product.quantity = 1;
        state.cart[action.payload.id] = product;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    addProductToFavorites: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const product = state.productList.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        state.favorites[action.payload.id] = product;
      }
    },
    deleteProductFromCart: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      delete state.cart[action.payload.id];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      if (state.cart[action.payload.id]) {
        const product = state.cart[action.payload.id];
        (product.quantity as number) += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      if (state.cart[action.payload.id]) {
        const product = state.cart[action.payload.id];
        if ((product.quantity as number) > 1) {
          (product.quantity as number) -= 1;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
  },
});

export const {
  setProducts,
  addProductToCart,
  addProductToFavorites,
  deleteProductFromCart,
  incrementProductQty,
  decrementProductQty,
} = productSlice.actions;

export default productSlice.reducer;
