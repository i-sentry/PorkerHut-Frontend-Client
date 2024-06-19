import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeCustomDeleteRequest,
  makeCustomPutRequest,
  makeDeleteRequest,
  makeGetRequest,
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

export const useDisableCategory = (id: string | null) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePutRequest(data, api.ProductsCategory.getOneCategory(id)),
  });
};

export const useCreateCategories = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequestCustom(data, api.ProductsCategory.getAllCategories),
  });
};

export const useCreateCategoriesWithSubcategories = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequestCustom(data, api.ProductsCategory.categoryWithMultipleSub),
  });
};

export const useCreateCategoriesQuestions = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequestCustom(
        data,
        api.ProductsCategory.getAllCategoriesQuestion,
      ),
  });
};

export const useUpdateSingleCategory = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makeCustomPutRequest(data, api.ProductsCategory.getOneCategory(id)),
  });
};

export const useCreateSubcategory = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequestCustom(data, api.ProductsCategory.subcategories),
  });
};

export const useUpdateSingleSubcategory = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makeCustomPutRequest(data, api.ProductsCategory.singleSubcategory(id)),
  });
};

export const useDeleteSingleCategory = (id: string) => {
  return useQueryMutation({
    mutationFn: () =>
      makeCustomDeleteRequest(api.ProductsCategory.getOneCategory(id)),
  });
};

export const useDeleteSubCategory = (id: string) => {
  return useQueryMutation({
    mutationFn: () =>
      makeDeleteRequest(api.ProductsCategory.singleSubcategory(id)),
  });
};
