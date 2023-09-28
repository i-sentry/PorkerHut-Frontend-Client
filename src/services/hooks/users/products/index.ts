import useQueryAction from "../../../../lib/useQueryAction";
import { api, makeGetRequest } from "../../../api";

export const useGetAllProducts = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.allProducts),
    queryKey: ["products+"],
  });
};
// export const useGetBlog = (id: string | undefined) => {
//     return useQueryAction({
//         queryFn: () => makeGetRequest(api.Blogs.singleBlog(id)),
//         queryKey: ['blogs', id]
//     })
// }



export const useGetSingleProduct = (id: string | null) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.getSingleProduct(id)),
    queryKey: ["product +"],
  });
};
