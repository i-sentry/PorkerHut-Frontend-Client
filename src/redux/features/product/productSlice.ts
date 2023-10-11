import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productData } from "../../../utils/productData";
import { toast } from "react-toastify";
import { useGetAllProducts } from "../../../services/hooks/users/products";
import Data from "../../../components/Data";

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
  async (thunkAPI) => {
    const response = await fetch(
      "https://pockerhut-api.onrender.com/api/products/",
      {
        method: "GET",
      }
    );
    const data = response.json();
    return data;
  }
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
    // addProductToCart: (
    //   state,
    //   action: PayloadAction<{ id: string | number }>
    // ) => {
    //   const product = state.productList.find(
    //     (product) => product.id === action.payload.id
    //   );
    //   if (product && !state.cart[action.payload.id]) {
    //     product.quantity = 1;
    //     state.cart[action.payload.id] = product;
    //     localStorage.setItem("cart", JSON.stringify(state.cart));
    //   }
    // },

    //Secoded

    // addProductToCart: (
    //   state,
    //   action: PayloadAction<{ id: string | number }>
    // ) => {
    //   const product = state.productList.find(
    //     (product) => product.id === action.payload.id
    //   );

    //   if (product) {
    //     if (state.cart[action.payload.id]) {
    //       console.log(`Product is already in the cart. ${action.payload.id}`);
    //     } else {
    //       product.quantity = 1;
    //       state.cart[action.payload.id] = product;
    //       localStorage.setItem("cart", JSON.stringify(state.cart));
    //     }
    //   }
    // },

    addProductToCart: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const product = state.productList.find(
        (product) => product._id === action.payload.id
      );

      if (product) {
        if (state.cart[action.payload.id]) {
          console.log(`Product is already in the cart. ${action.payload.id}`);
          toast.info("This item is already in your cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          product.pricing.quantity = 1;
          state.cart[action.payload.id] = product;

          // Update the totalQuantity in the state by adding 1
          state.totalQuantity = (state.totalQuantity || 0) + 1;

          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },

    addProductToFavorites: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const product = state.productList.find(
        (product) => product._id === action.payload.id
      );
      if (product) {
        state.favorites[action.payload.id] = product;
      }
    },
    // deleteProductFromCart: (
    //   state,
    //   action: PayloadAction<{ id: string | number }>
    // ) => {
    //   delete state.cart[action.payload.id];
    //   localStorage.setItem("cart", JSON.stringify(state.cart));
    //   console.log(`Product is removed from the cart. ${action.payload.id}`);
    // },

    deleteProductFromCart: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const deletedProduct = state.cart[action.payload.id];
      if (deletedProduct) {
        const deletedQuantity = deletedProduct.pricing.quantity || 0;

        // Remove the product from the cart
        delete state.cart[action.payload.id];

        // Update the totalQuantity in the state by subtracting the deleted quantity
        state.totalQuantity = (state.totalQuantity || 0) - deletedQuantity;

        localStorage.setItem("cart", JSON.stringify(state.cart));
        console.log(`Product is removed from the cart. ${action.payload.id}`);
      }
    },

    // incrementProductQty: (
    //   state,
    //   action: PayloadAction<{ id: string | number }>
    // ) => {
    //   if (state.cart[action.payload.id]) {
    //     const product = state.cart[action.payload.id];
    //     (product.quantity as number) += 1;
    //     localStorage.setItem("cart", JSON.stringify(state.cart));
    //   }
    // },

    //  incrementProductQty: (
    //   state,
    //   action: PayloadAction<{ id: string | number }>
    // ) => {
    //   if (state.cart[action.payload.id]) {
    //     const product = state.cart[action.payload.id];
    //     const productId = action.payload.id;

    //     // Increase the product quantity and add another of the same product to the cart
    //     (product.quantity as number) += 1;

    //     // Clone the existing product with an increased quantity
    //     const newProduct = { ...product };

    //     // Add the new product to the cart with the same ID
    //     state.cart[productId] = newProduct;

    //     console.log(`Increased quantity for product with ID ${productId}. New cart quantity for this product: ${product.quantity}`);

    //     // Calculate total quantity
    //     const totalQuantity = Object.values(state.cart).reduce(
    //       (total, product) => total + (product.quantity as number),
    //       0
    //     );

    //     console.log(`Total items in the cart: ${totalQuantity}`);

    //     localStorage.setItem("cart", JSON.stringify(state.cart));
    //   }
    // },

    incrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      if (state.cart[action.payload.id]) {
        const product = state.cart[action.payload.id];
        (product.pricing.quantity as number) += 1;
        state.totalQuantity += 1; // Increase total quantity
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    // decrementProductQty: (
    //   state,
    //   action: PayloadAction<{ id: string | number }>
    // ) => {
    //   if (state.cart[action.payload.id]) {
    //     const product = state.cart[action.payload.id];
    //     if ((product.quantity as number) > 1) {
    //       (product.quantity as number) -= 1;
    //       localStorage.setItem("cart", JSON.stringify(state.cart));
    //     }
    //   }
    // },

    decrementProductQty: (
      state,
      action: PayloadAction<{ id: string | number }>
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
} = productSlice.actions;

export default productSlice.reducer;
