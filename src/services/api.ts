import axios from "axios";

export let BASEURL: string | undefined;
switch (process.env.NODE_ENV) {
  case "production":
    BASEURL = process.env.REACT_APP_BASE_URL;
    break;
  default:
    BASEURL = process.env.REACT_APP_BASE_URL;
    break;
}

export const imageUrl = process.env.REACT_APP_IMAGE_BASE_URL;
console.log(process.env.REACT_APP_BASE_URL, "BASEURL");
console.log(process.env.NODE_ENV);

export const api = {
  Users: {
    userSignup: "/api/user/signup",
    userLogin: "/api/user/login",
    recoverPassword: "/api/user/request-reset-password",
    resetPassword: (token: string | undefined) =>
      `/api/user/reset-password/${token}`,
  },
  Vendors: {
    vendorSignup: "/api/vendors/",
    vendorById: (id: string | undefined) => `/api/vendors/${id}`,
    vendorLogin: "/api/vendors/login",
    recoverPassword: "/api/vendors/request-reset-password",
    resetPassword: (token: string | undefined) =>
      `/api/vendors/reset-password/${token}`,
  },
  Blogs: {
    allBlogs: "/api/blogs",
    singleBlog: (id: string | undefined) => `/api/blogs/${id}`,
  },
  Products: {
    allProducts: "/api/products/",
    createProducts: "/api/products",
    allApprovedProducts: "/api/products/approved",
    getSingleProduct: (id: string | null) => `/api/products/${id}`,
    productStatus: (id: string | null) => `/api/products/${id}/approvalStatus`,
    productByVendor: (id: string | undefined) => `/api/products/vendor/${id}`,
    productByVendorApproved: (id: string | undefined) =>
      `/api/products/approved/${id}`,
    favouriteProduct: "/api/favorite-product/",
    userFavProduct: (id: string | null) => `/api/favorite-product/${id}`,
    removeFavProduct: (
      userId: string | undefined,
      productId: string | undefined
    ) => `/api/favorite-product/delete?userId=${userId}&productId=${productId}`,
    isFavProduct: (userId: string | undefined, productId: string | undefined) =>
      `/api/favorite-product/check-favorite/${userId}/${productId}`,
  },
  Ratings: {
    createRating: "/api/ratings/create",
    updateRating: (ratingId: string | undefined) =>
      `api/ratings/update/${ratingId}`,
    allRating: (productId: string | undefined) =>
      `/api/ratings/product/${productId}`,
    allRatingsByUser: (userId: string | undefined) =>
      `/api/ratings/user/${userId} `,
    deleteRating: (ratingId: string | undefined) => `api/ratings/${ratingId}`,
    AddNew: "/api/ratings/add",
    RatingStat: (productId: string | undefined) =>
      `/products/${productId}/rating-stats`,
  },
  Vets: {
    createVet: "/api/vets",
  },
  Banks: {
    getBanks: "/api/pay/banks",
    resolveAcc: (
      account_number: string | number,
      bank_code?: string | number
    ) =>
      `/api/pay/account-details?account_number=${account_number}&bank_code=${bank_code}`,
  },
  ProductsCategory: {
    getAllCategories: "/api/categories/",
    getAllCategoriesQuestion: "/api/categoryquestions",
    categoryQuestion: (id: string | null) =>
      `/api/categoryquestions/category/${id}`,
    getOneCategory: (id: string | null) => `/api/categories/${id}`,
  },
  Payment: {
    pay: "/api/pay/",
  },
  Billing: {
    billing: "/api/user/billing",
    getBillingInfo: (id: string) => `/api/user/billing/${id}`,
    updateBillingInfo: (id: string) => `/api/users/billing/${id}`,
  },
  Order: {
    order: "/api/orders",
    orderbyId: (id: string) => `/api/orders/${id}`,
    customerOrder: (id: string) => `/api/orders/customer/${id}`,
  },
};

export const makePostRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true
) => {
  return await axios.post(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
      Token: `Bearer ${localStorage.getItem("accessToken") as string}`,
    },
  });
};

export const makeDeleteRequest = async <T = any>(
  url: string,
  includeAuthHeader: boolean = true
) => {
  return await axios.delete<T>(`${BASEURL}${url}`, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
};

export const makePostRequestWithCustomHeaders = async (
  data: any,
  url: string,
  headers?: any
) => {
  const temp = await fetch(`${BASEURL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  if (!temp.ok) {
    throw new Error(await temp.text());
  }

  const result = await temp.json();
  return result;
};

export const makePatchRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true
) => {
  return await axios.patch(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
};

export const makePutRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true
) => {
  return await axios.put(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
};

// export const makeGetRequest = async <T = any>(
//   url: string,
//   includeAuthHeaders: boolean = true
// ) => {
//   const temp = await axios.get<T>(`${BASEURL}${url}`, {
//     headers: {
//       "x-access-token": localStorage.getItem("accessToken") as string,
//     },
//   });
//   return temp;
// };

export const makeGetRequest = async <T = any>(
  url: string,
  includeAuthHeaders: boolean = true
) => {
  const temp = await axios.get<T>(`${BASEURL}${url}`, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
      Token: `Bearer ${localStorage.getItem("accessToken") as string}`,
    },
  });
  return temp;
};

export const makeGetRequestWithCustomHeader = async <T = any>(
  url: string,
  includeAuthHeaders: boolean = true
) => {
  try {
    const headers: { [key: string]: string } = {};

    if (includeAuthHeaders) {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        headers["x-access-token"] = accessToken;
        headers["Authorization"] = `Bearer ${accessToken}`;
      } else {
        throw new Error("Access token is missing");
      }
    }

    const response = await axios.get<T>(`${BASEURL}${url}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error("Error making GET request:", error);
    throw error;
  }
};

export const makeCustomPutRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true
) => {
  return await axios.put(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
      Token: `Bearer ${localStorage.getItem("accessToken") as string}`,
    },
  });
};

export const makePostRequestCustom = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true
) => {
  try {
    const headers: { [key: string]: string } = {};
    if (includeAuthHeader) {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        headers.Token = `Bearer ${accessToken}`;
      } else {
        throw new Error("Access token is missing");
      }
    }

    const response = await axios.post(`${BASEURL}${url}`, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error("Error making POST request:", error);
    throw error;
  }
};
