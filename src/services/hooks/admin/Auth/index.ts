import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeGetRequestWithCustomHeader,
  makePostRequest,
  makePutRequest,
} from "../../../api";

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

export const useGetAllAdmin = () => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.admin.getAdmin),
    queryKey: ["getAdmin"],
  });
};

export const useUpdateAdminAccess = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: { isAccessRevoked: boolean; isAdmin: boolean }) =>
      makePutRequest(data, api.admin.adminAccess(id)),
  });
};
