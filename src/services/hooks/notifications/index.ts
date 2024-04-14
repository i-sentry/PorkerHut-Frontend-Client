import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import {
  api,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "../../api";

export const useCreateNotification = () => {
  return useQueryMutation({
    mutationFn: (data: { type: string; email: string; status: boolean }) =>
      makePostRequest(data, api.notification.allNotification),
  });
};

export const useGetAllNotification = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.notification.allNotification),
    queryKey: ["all+notification"],
  });
};

export const useGetSingleNotification = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.notification.singleNotification(id)),
    queryKey: ["all+notification"],
  });
};

export const useUpdateNotification = (id: string) => {
  return useQueryMutation({
    mutationFn: (data) =>
      makePutRequest(data, api.notification.singleNotification(id)),
  });
};
