import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import { api, makeGetRequest, makePostRequest } from "../../api";

export const useCreateVet = () => {
  return useQueryMutation({
    mutationFn: (data) => makePostRequest(data, api.Vets.createVet),
  });
};

export const useGetAllVets = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Vets.allVets),
    queryKey: ["vets+"],
  });
};
