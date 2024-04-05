import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import { IEmail } from "../../../pages/Authentication/ForgetPassword";
import {
  makePostRequest,
  api,
  makeGetRequest,
  makeGetRequestWithCustomHeader,
  makeCustomPutRequest,
} from "../../api";
import { ILoginUser, ISignUpUser } from "../../serviceType";

export const useUserSignUp = () => {
  return useQueryMutation({
    mutationFn: (data: ISignUpUser) =>
      makePostRequest(data, api.Users.userSignup),
  });
};

export const useUserLogin = () => {
  return useQueryMutation({
    mutationFn: (data: ILoginUser) =>
      makePostRequest(data, api.Users.userLogin),
  });
};

export const useRecoverPassword = () => {
  return useQueryMutation({
    mutationFn: (data: IEmail) =>
      makePostRequest(data, api.Users.recoverPassword),
  });
};

export const useRestPassword = (token: string | undefined) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequest(data, api.Users.resetPassword(token)),
  });
};

export const useGetAllUsers = () => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.Users.allUser),
    queryKey: ["User +"],
  });
};

export const useGetSingleUser = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.Users.singleUser(id)),
    queryKey: ["User"],
  });
};

export const useUpdateUserInfo = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makeCustomPutRequest(data, api.Users.singleUser(id)),
  });
};

export const useContactForm = () => {
  return useQueryMutation({
    mutationFn: (data: any) => makePostRequest(data, api.forms.contactForm),
  });
};

export const useAgroForm = () => {
  return useQueryMutation({
    mutationFn: (data: any) => makePostRequest(data, api.forms.agroservice),
  });
};

export const useGetAllAgroServices = () => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.forms.agroservice),
    queryKey: ["all+agroservices"],
  });
};
