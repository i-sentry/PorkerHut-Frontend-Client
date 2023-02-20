import useQueryMutation from "../../../lib/useQueryMutation";
import { makePostRequest, api } from "../../api";

export const useUserSignUp = () => {
  return useQueryMutation({
    mutationFn: (data: {
      firstName: string;
      lastName: string;
      password: string;
      email: string;
    }) => makePostRequest(data, api.Users.userSignup),
  });
};
