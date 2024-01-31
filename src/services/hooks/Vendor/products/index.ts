import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "../../../api";

export const useCreateProduct = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequest(data, api.Products.createProducts),
  });
};
export const useProductStatus = (id: string | null) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePutRequest(data, api.Products.productStatus(id)),
  });
};

export const useGetAllProducts = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.allProducts),
    queryKey: ["allProducts"],
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.getSingleProduct(id)),
    queryKey: ["product +"],
  });
};

export const useGetProductByVendor = (id: string | undefined) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.productByVendor(id)),
    queryKey: ["vendorProducts"],
  });
};

export const useGetApprovedProductByVendor = (id: string | undefined) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.productByVendorApproved(id)),
    queryKey: ["productByVendorApproved"],
  });
};
