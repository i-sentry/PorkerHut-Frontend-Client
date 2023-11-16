import useQueryMutation from "../../../lib/useQueryMutation";
import { IEmail } from "../../../pages/Authentication/ForgetPassword";
import { makePostRequest, api } from "../../api";
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

export const useBillingInfo = () => {
  return useQueryMutation({
    mutationFn: (data: {
      address: string;
      city: string;
      country: string;
      email: string;
      firstname: string;
      lastname: string;
      phonenumber: string;
      state: string;
    }) => makePostRequest(data, api.Billing.billing),
  });
};
