import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import {
  api,
  makeCustomPutRequest,
  makeGetRequestWithCustomHeader,
  makePostRequest,
  makePostRequestCustom,
} from "../../api";

export const useMakePayment = () => {
  return useQueryMutation({
    mutationFn: (data: { email: string; amount: any }) =>
      makePostRequest(data, api.Payment.pay),
  });
};

export const useBillingInfo = () => {
  return useQueryMutation({
    mutationFn: (data: {
      address: string;
      city: string;
      country: string;
      email: string;
      firstName: string;
      lastName: string;
      isDefault: boolean;
      phoneNumber: string;
      state: string;
    }) => makePostRequestCustom(data, api.Billing.billing),
  });
};

export const useMyBillingInfo = () => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.Billing.getBillingInfo),
    queryKey: ["billing"],
  });
};

export const useUpdateBillingInfo = (id: string) => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makeCustomPutRequest(data, api.Billing.updateBillingInfo(id)),
  });
};
