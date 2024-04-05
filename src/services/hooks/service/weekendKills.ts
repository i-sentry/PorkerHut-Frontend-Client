import { useMutation } from "react-query";
import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import {
  api,
  makeGetRequest,
  makeGetRequestWithCustomHeader,
  makePostRequest,
} from "../../api";

export const useCreateWeekendKills = () => {
  return useMutation({
    mutationFn: (data: any) => makePostRequest(data, api.services.weekendkills),
  });
};

export const useGetWeekendKills = () => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.services.weekendkills),
    queryKey: ["WeekendKill"],
  });
};
