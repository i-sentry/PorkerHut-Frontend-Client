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
  },
   Blogs: {
    allBlogs: "/api/blogs/",
    singleBlog: (id: string | undefined) => `/api/blogs/${id}`

   },
   Products: {
    allProducts: "/api/products/",
    
   }
};

export const makePostRequest = async (
  data: any,
  url: string,
  includeAuthHeader: boolean = true
) => {
  return await axios.post(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
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

export const makeGetRequest = async <T = any>(
  url: string,
  includeAuthHeaders: boolean = true
) => {
  const temp = await axios.get<T>(`${BASEURL}${url}`, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
  return temp;
};
