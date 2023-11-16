import useQueryAction from "../../../../lib/useQueryAction";
import { api, makeGetRequest } from "../../../api";

export const useGetAllCategories = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.ProductsCategory.getAllCategories),
    queryKey: ["all+cate"],
  });
};

export const useGetAllCategoriesQuestions = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.ProductsCategory.getAllCategoriesQuestion),
    queryKey: ["allQuestions"],
  });
};

export const useGetCategoryQuestion = (id: string | null) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.ProductsCategory.categoryQuestion(id)),
    queryKey: ["cateQuestion"],
  });
};
export const useGetOneCategory = (id: string | null) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.ProductsCategory.getOneCategory(id)),
    queryKey: ["cate"],
  });
};
 
