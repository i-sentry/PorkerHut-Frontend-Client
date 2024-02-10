import useQueryMutation from "../../../../lib/useQueryMutation";
import { api, makePostRequest } from "../../../api";
import { ISignUpUser } from "../../../serviceType";

export const useInviteAdmin = () => {
  return useQueryMutation({
    mutationFn: (data: { email: string; role: string }) =>
      makePostRequest(data, api.admin.inviteAdmin),
  });
};

export const useAdminSignUp = () => {
  return useQueryMutation({
    mutationFn: (data: {
      firstName: string;
      lastName: string;
      password: string;
      email: string;
      role: string;
      invitationToken: string;
    }) => makePostRequest(data, api.Users.userSignup),
  });
};