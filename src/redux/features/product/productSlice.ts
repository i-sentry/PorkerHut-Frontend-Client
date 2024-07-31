import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { BASEURL } from "../../../services/api";

// export interface  {
//   id: string | number;
//   title: string;
//   type?: string;
//   category: string;
//   price: string;
//   rating?: string;
//   product?: {
//     name: string;
//     location: string;
//     weight?: string;
//     productName: string;
//   };
//   img: string;
//   desc: string;
//   images?: string[];
//   availability?: string;
//   quantity?: number;
// }

export interface IProduct {
  approvalStatus: boolean;
  avgRating: number;
  category: string;
  createdAt: string;
  details: {
    cookingMethod: string;
    deliveryDetails: string;
    productContent: string;
    productDescription: string;
    productWeight: number;
  };
  // _id: string;
  featured: boolean;
  images: string[];
  information: {
    subcartegory: any;
    categoryQuestions: any[]; // You can define a specific type here if needed
    productBreed: string;
    productName: string;
    typeOfMeat: string;
    _id: string;
  };
  pricing: {
    productPrice: number;
    quantity: number;
    saleEndDate: string;
    saleStartDate: string;
    _id: string;
  };
  reviews: any[]; // You can define a specific type for reviews if needed
  updatedAt: string;
  visibilityStatus: string;
  __v: number;
  _id: string;
}

export interface ICart {
  [productId: string]: IProduct;
}

export interface ProductState {
  productList: IProduct[];
  cart: ICart;
  favorites: ICart;
  loading?: boolean;
  totalQuantity: number;
}

const initialState: ProductState = {
  productList: [],
  cart: JSON.parse(localStorage.getItem("cart") || "{}"),
  favorites: {},
  totalQuantity: 0,
};

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (_, thunkAPI) => {
    const response = await fetch(`${BASEURL}/api/products/`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  },
);

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
      action: PayloadAction<{ id: string | number }>,
    ) => {
      const product = state.productList.find(
        (product) => product._id === action.payload.id,
      );
      console.log(current(state));

      if (!product) {
        return; // or throw an error if necessary
      }

      const isProductInCart = !!state.cart[action.payload.id];

      if (isProductInCart) {
        // Product is already in the cart
        toast.info(
          `${product?.information?.productName} is already in your cart`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          },
        );
      } else {
        // Product is not in the cart, add it
        product.pricing.quantity = 1;
        state.cart = {
          ...state.cart,
          [action.payload.id]: { ...product },
        };

        // Update the totalQuantity in the state by adding 1
        state.totalQuantity += 1;

        localStorage.setItem("cart", JSON.stringify(state.cart));

        // Product added to the cart successfully
        toast.success(
          `${product?.information?.productName} has been added to your cart`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          },
        );
      }
    },

    addProductToFavorites: (
      state,
      action: PayloadAction<{ id: string | number }>,
    ) => {
      const product = state.productList.find(
        (product) => product._id === action.payload.id,
      );
      if (product) {
        state.favorites[action.payload.id] = product;
      }
    },

    deleteProductFromCart: (
      state,
      action: PayloadAction<{ id: string | number }>,
    ) => {
      const deletedProduct = state.cart[action.payload.id];
      const product = state.productList.find(
        (product) => product._id === action.payload.id,
      );
      if (deletedProduct) {
        const deletedQuantity = deletedProduct.pricing.quantity || 0;

        // Remove the product from the cart
        delete state.cart[action.payload.id];

        // Update the totalQuantity in the state by subtracting the deleted quantity
        state.totalQuantity = (state.totalQuantity || 0) - deletedQuantity;

        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.warn(
          `${product?.information?.productName} has been removed from your cart`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          },
        );
      }
    },

    incrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>,
    ) => {
      if (state.cart[action.payload.id]) {
        const product = state.cart[action.payload.id];
        (product.pricing.quantity as number) += 1;
        state.totalQuantity += 1; // Increase total quantity
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    decrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>,
    ) => {
      if (state.cart[action.payload.id]) {
        const product = state.cart[action.payload.id];
        if ((product.pricing.quantity as number) > 1) {
          (product.pricing.quantity as number) -= 1;
          state.totalQuantity -= 1; // Decrease total quantity
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },

    clearCart: (state) => {
      state.cart = {};
      state.totalQuantity = 0;
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export const {
  setProducts,
  addProductToCart,
  addProductToFavorites,
  deleteProductFromCart,
  incrementProductQty,
  decrementProductQty,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
