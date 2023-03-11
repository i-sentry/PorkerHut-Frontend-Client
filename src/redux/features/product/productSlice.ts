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
}

const initialState: ProductState = {
  productList: productData,
  cart: {},
  favorites: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reducer to add products to the store
    setProducts: (state, action: PayloadAction<IProduct | IProduct[]>) => {
      if (Array.isArray(action.payload)) {
        state.productList = [...state.productList, ...action.payload];
      } else {
        state.productList.push(action.payload);
      }
    },
    // Reducer to add products to cart
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
      } 
    //   else if (state.cart[action.payload.id]) {
    //     const product = state.cart[action.payload.id];
    //     (product.quantity as number) += 1;
    //   }
    },
    // Reducer to add products to favs
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
    },
    // Reducer to increment product qty in cart
    incrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      if (state.cart[action.payload.id]) {
        const product = state.cart[action.payload.id];
        (product.quantity as number) += 1;
      }
    },
    // Reducer to decrement product qty in cart
    decrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      if (state.cart[action.payload.id]) {
        const product = state.cart[action.payload.id];
        if ((product.quantity as number) > 1)
        (product.quantity as number) -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProducts,
  addProductToCart,
  addProductToFavorites,
  deleteProductFromCart,
  incrementProductQty,
  decrementProductQty,
} = productSlice.actions;

export default productSlice.reducer;
