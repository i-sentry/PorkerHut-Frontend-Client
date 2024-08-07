import axios from "axios";

export let BASEURL: string | undefined;
switch (process.env.NODE_ENV) {
  case "production":
    BASEURL = process.env.REACT_APP_BASE_URL;
    break;
  default:
    BASEURL = process.env.REACT_APP_STAGING_BASE_URL;
    break;
}

export const imageUrl = process.env.REACT_APP_IMAGE_BASE_URL;

export const api = {
  Users: {
    allUser: "/api/user",
    userSignup: "/api/user/signup",
    userLogin: "/api/user/login",
    recoverPassword: "/api/user/request-reset-password",
    resetPassword: (token: string | undefined) =>
      `/api/user/reset-password/${token}`,
    singleUser: (id: string) => `/api/user/${id}`,
  },
  Vendors: {
    allVendors: "/api/vendors/",
    vendorStatus: (id: string | number) => `/api/vendors/${id}/status`,
    vendorSignup: "/api/vendors/",
    vendorById: (id: string | undefined) => `/api/vendors/${id}`,
    updateVendor: (id: string) => `/api/vendors/${id}`,
    vendorLogin: "/api/vendors/login",
    recoverPassword: "/api/vendors/request-reset-password",
    resetPassword: (token: string | undefined) =>
      `/api/vendors/reset-password/${token}`,
  },
  VendorWallet: {
    wallets: "/api/vendorWallet",
    vendorWallet: (id: string) => `/api/vendorWallet/${id}`,
    vendorWalletBal: (id: string) => `/api/vendorWallet/${id}/balance`,
    prevWalletBal: (id: string) => `/api/vendorWallet/${id}/previous-payments`,
    walletBal: (id: string) => `/api/vendorWallet/${id}/balance`,
    walletPayment: (id: string) => `/api/vendorWallet/${id}/payments`,
    vendorPayments: (id: string) => `/api/vendorWallet/${id}/previous-payments`,
    vendorInvoice: (id: string) => `/api/payment-invoice/totals/${id}`,
  },
  VendorAccount: {
    allAccountTransaction: "/api/vendorAccount",
    accountTransaction: (id: string) => `/api/vendorAccount/${id}`,
    vendorAcc: (vendorID: string) => `/api/vendorAccount/vendor/${vendorID}`,
  },
  Blogs: {
    allBlogs: `/api/blogs`,
    createBlogs: `/api/blogs`,
    singleBlog: (id: string | undefined) => `/api/blogs/${id}`,
    // modifyBlog
  },
  Products: {
    allProducts: "/api/products/",
    createProducts: "/api/products",
    allApprovedProducts: "/api/products/approved",
    getSingleProduct: (id: string) => `/api/products/${id}`,
    productStatus: (id: string | null) => `/api/products/${id}/approvalStatus`,
    productByVendor: (id: string | undefined) => `/api/products/vendor/${id}`,
    productByVendorApproved: (id: string | undefined) =>
      `/api/products/approved/${id}`,
    favouriteProduct: "/api/favorite-product/",
    userFavProduct: (id: string | null) => `/api/favorite-product/${id}`,
    removeFavProduct: (
      userId: string | undefined,
      productId: string | undefined,
    ) => `/api/favorite-product/delete?userId=${userId}&productId=${productId}`,
    isFavProduct: (userId: string | undefined, productId: string | undefined) =>
      `/api/favorite-product/check-favorite/${userId}/${productId}`,
    visibilityStatus: (id: string | number) =>
      `/api/products/${id}/visibilityStatus `,
    updateProduct: (id: string) => `/api/products/${id}`,
  },
  Ratings: {
    createRating: "/api/ratings/create",
    updateRating: (ratingId: string | undefined) =>
      `/api/ratings/update/${ratingId}`,
    allRating: (productId: string | undefined) =>
      `/api/ratings/product/${productId}`,
    allRatingsByUser: (userId: string | undefined) =>
      `/api/ratings/user/${userId} `,
    deleteRating: (ratingId: string | undefined) => `api/ratings/${ratingId}`,
    AddNew: "/api/ratings/add",
    RatingStat: (productId: string | undefined) =>
      `/products/${productId}/rating-stats`,
    ratingDetails: (productId: string | undefined) =>
      `/api/ratings/products/${productId}/details`,
    isRated: (userId: string, productID: string) =>
      `/api/ratings/check-rating/user/${userId}/product/${productID}`,
  },
  Tracking: {
    track: "/api/tracking",
    userTracking: (userId: string) => `/api/tracking/${userId}`,
    OrderTracking: (orderId: string) => `/api/tracking/order/${orderId}`,
  },
  Vets: {
    createVet: "/api/vets",
    allVets: "/api/vets",
  },
  Banks: {
    getBanks: "/api/pay/banks",
    resolveAcc: (
      account_number: string | number,
      bank_code?: string | number,
    ) =>
      `/api/pay/account-details?account_number=${account_number}&bank_code=${bank_code}`,
  },
  ProductsCategory: {
    getAllCategories: "/api/categories/",
    getAllCategoriesQuestion: "/api/categoryquestions",
    categoryQuestion: (id: string | null) =>
      `/api/categoryquestions/category/${id}`,
    getOneCategory: (id: string | null) => `/api/categories/${id}`,
    subcategories: "/api/subcategories/batch",
    singleSubcategory: (id: string | null) => `/api/subcategories/${id}`,
    categoryWithMultipleSub: `/api/categories/batch`,
    categoryQuestionsBatch: "/api/categoryquestions/batch",
  },
  Payment: {
    pay: "/api/pay/",
    invoice: "/api/payment-invoice",
    invoiceTotal: "/api/payment-invoice/totals",
    invoiceStatus: "/api/payment-invoice/multiple",
    tracker: "/api/payment-invoice/paymentTracker",
  },
  Billing: {
    billing: "/api/user/billing",
    getBillingInfo: (id: string) => `/api/user/billing/${id}`,
    updateBillingInfo: (id: string) => `/api/users/billing/${id}`,
  },
  Order: {
    order: "/api/orders",
    orderbyId: (id: string) => `/api/orders/${id}`,
    orderStatus: (id: string) => `/api/orders/${id}/status`,
    vendorOrders: (id: string) => `/api/orders/vendor/${id}`,
    customerOrder: (id: string) => `/api/orders/customer/${id}`,
    aggregateVendorOrders: (id: string) => `/api/orders/aggregate/vendor/${id}`,
    aggregateUserOrders: (id: string) => `/api/orders/aggregate/user/${id}`,
    allVendorsAggregate: `/api/orders/aggregate/vendors`,
    allUsersAggregate: `/api/orders/aggregate/users`,
    tracking: `/api/tracking`,
    userTracking: (userId: string) => `/api/tracking/${userId}`,
    trackingInfoByOrder: (userId: string) => `/api/tracking/${userId}`,
    OrderBatch: "/api/orders/update-multiple",
    topProducts: "/api/orders/admin/topProducts",
  },
  admin: {
    inviteAdmin: "/api/user/admin-invite",
    getAdmin: "/api/user/admin",
    allOverview: "/api/orders/admin/overview/",
    adminOverView: (startDate: any, endDate: any) =>
      `/api/orders/admin/overview/${startDate}/${endDate}`,
    adminGraph: (startDate: any, endDate: any) =>
      `/api/orders/admin/weekly-sales/${startDate}/${endDate}`,
    adminAccess: (id: string) => `/api/user/update-access/${id}`,
  },
  forms: {
    contactForm: `/api/enquiry/create`,
    agroservice: `/api/agroservice`,
  },
  annoucement: {
    allAnnoucement: `/api/announcement`,
    singleAnnouncement: (id: string) => `/api/announcement/${id}`,
  },
  services: {
    allVetService: "/api/vetservice",
    weekendkills: "/api/weekendkills",
  },
  notification: {
    allNotification: "/api/notification",
    singleNotification: (id: string) => `/api/notification/${id}`,
  },
};

export const makePostRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true,
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
  includeAuthHeader: boolean = true,
) => {
  return await axios.delete<T>(`${BASEURL}${url}`, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
      Token: `Bearer ${localStorage.getItem("accessToken") as string}`,
    },
  });
};

export const makePostRequestWithCustomHeaders = async (
  data: any,
  url: string,
  headers?: any,
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
  includeAuthHeader: boolean = true,
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
  includeAuthHeader: boolean = true,
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
  includeAuthHeaders: boolean = true,
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
  includeAuthHeaders: boolean = true,
) => {
  try {
    const headers: { [key: string]: string } = {};

    if (includeAuthHeaders) {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        headers["x-access-token"] = accessToken;
        headers["Authorization"] = `Bearer ${accessToken}`;
        headers["Token"] = `Bearer ${accessToken}`;
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

export const makeCustomDeleteRequest = async <T = any>(
  url: string,
  includeAuthHeaders: boolean = true,
) => {
  try {
    const headers: { [key: string]: string } = {};

    if (includeAuthHeaders) {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        headers["x-access-token"] = accessToken;
        headers["Authorization"] = `Bearer ${accessToken}`;
        headers["Token"] = `Bearer ${accessToken}`;
      } else {
        throw new Error("Access token is missing");
      }
    }

    const response = await axios.delete<T>(`${BASEURL}${url}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error("Error making DELETE request:", error);
    throw error;
  }
};

export const makeCustomPutRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true,
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
  includeAuthHeader: boolean = true,
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

export const makeCustomPatchRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true,
) => {
  return await axios.patch(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
      Token: `Bearer ${localStorage.getItem("accessToken") as string}`,
    },
  });
};
