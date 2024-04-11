import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeCustomPutRequest,
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
  makePostRequestCustom,
  makePutRequest,
} from "../../../api";

export const useGetAllCategories = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.ProductsCategory.getAllCategories),
    queryKey: ["all+cate"],
  });
};

export const useGetAllCategoriesQuestions = () => {
  return useQueryAction({
    queryFn: () =>
      makeGetRequest(api.ProductsCategory.getAllCategoriesQuestion),
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

export const useCreateCategories = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequestCustom(data, api.ProductsCategory.getAllCategories),
  });
};

export const useUpdateSingleCategory = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makeCustomPutRequest(data, api.ProductsCategory.getOneCategory(id)),
  });
};

export const useCreateSubcategory = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequestCustom(data, api.ProductsCategory.singleSubcategory(id)),
  });
};

export const useUpdateSingleSubcategory = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePutRequest(data, api.ProductsCategory.singleSubcategory(id)),
  });
};

// export const useDeleteSingleCategory = (id: string) => {
//   return useQueryMutation({
//     mutationFn: (data: any) =>
//       makeDeleteRequest(data, api.ProductsCategory.getOneCategory(id)),
//   });
// };
