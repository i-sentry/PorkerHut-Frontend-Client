import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import { api, makeGetRequest, makePostRequest } from "../../../api";

export const useCreateProduct = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequest(data, api.Products.createProducts),
  });
};

export const useGetAllProducts = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.allProducts),
    queryKey: ["allProducts"],
  });
};
