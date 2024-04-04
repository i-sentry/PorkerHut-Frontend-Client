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

export const useCreateVetService = () => {
  return useQueryMutation({
    mutationFn: (data: {
      fullName: string;
      email: string;
      phoneNumber: string;
      location: string;
      appointmentPurpose: string;
      breedOfPig: string;
      message: string;
    }) => makePostRequest(data, api.services.allVetService),
  });
};

export const useGetAllVetServices = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.services.allVetService),
    queryKey: ["vetservices"],
  });
};
