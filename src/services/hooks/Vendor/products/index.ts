import useQueryMutation from "../../../../lib/useQueryMutation";
import { api, makePostRequest } from "../../../api";

export const useCreateProduct = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequest(data, api.Products.createProducts),
  });
};
