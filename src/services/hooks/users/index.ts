import { FieldValues } from "react-hook-form";
import useQueryMutation from "../../../lib/useQueryMutation";
import { makePostRequest, api } from "../../api";
import { ILoginUser, ISignUpUser } from "../../serviceType";

export const useUserSignUp = () => {
  return useQueryMutation({
    mutationFn: (data: {
      firstName: string;
      lastName: string;
      password: string;
      email: string;
      confirmPassword?: string;
    }) => makePostRequest(data, api.Users.userSignup),
  });
};

export const useUserLogin = () => {
  return useQueryMutation({
    mutationFn: (data: ILoginUser) =>
      makePostRequest(data, api.Users.userLogin),
  });
}