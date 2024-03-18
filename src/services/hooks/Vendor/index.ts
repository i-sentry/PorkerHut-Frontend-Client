import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import { IEmail } from "../../../pages/Authentication/ForgetPassword";
import {
  makePostRequest,
  api,
  makeGetRequestWithCustomHeader,
  makeGetRequest,
  makePutRequest,
  makePatchRequest,
  makeCustomPutRequest,
  makeCustomPatchRequest,
} from "../../api";
import { ILoginUser, IVendorSignUp } from "../../serviceType";

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
    queryFn: () => makeGetRequestWithCustomHeader(api.Vendors.vendorById(id)),
    queryKey: ["vendor"],
  });
};

export const useGetVendors = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Vendors.allVendors),
    queryKey: ["vendors"],
  });
};

export const useVendorRecoverPassword = () => {
  return useQueryMutation({
    mutationFn: (data: IEmail) =>
      makePostRequest(data, api.Vendors.recoverPassword),
  });
};

export const useVendorRestPassword = (token: string | undefined) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequest(data, api.Vendors.resetPassword(token)),
  });
};

export const useVendorStatusUpdate = (id: string | number) => {
  return useQueryMutation({
    mutationFn: (data: { storeStatus: string }) =>
      makeCustomPutRequest(data, api.Vendors.vendorStatus(id)),
  });
};

export const useUpdateVendor = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makeCustomPutRequest(data, api.Vendors.updateVendor(id)),
  });
};
