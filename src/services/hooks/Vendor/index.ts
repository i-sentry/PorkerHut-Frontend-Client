import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import { makePostRequest, api, makeGetRequest } from "../../api";
import { ILoginUser,  IVendorSignUp } from "../../serviceType";

export const useVendorSignUp = () => {
  return useQueryMutation({
    mutationFn: (data: IVendorSignUp) =>
      makePostRequest(data, api.Vendors.vendorSignup),
  });
};

export const useVendorLogin = () => {
  return useQueryMutation({
    mutationFn: (data: ILoginUser) =>
      makePostRequest(data, api.Vendors.vendorLogin),
  });
};


export const useGetVendorById = (id: string | undefined) => {
  return useQueryAction({ 
    queryFn: ()=> makeGetRequest(api.Vendors.vendorById(id)),
    queryKey: ['vendor']
  })
}
