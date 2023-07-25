import useQueryMutation from "../../../lib/useQueryMutation";
import { api, makePostRequest } from "../../api";

export const useCreateVet = () => {
  return useQueryMutation({
    mutationFn: (data) => makePostRequest(data, api.Vets.createVet),
    
  });
};
