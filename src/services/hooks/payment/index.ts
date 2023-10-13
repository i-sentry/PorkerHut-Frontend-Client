import useQueryMutation from "../../../lib/useQueryMutation";
import { api, makePostRequest } from "../../api";

export const useMakePayment = () => {
  return useQueryMutation({
    mutationFn: (data: { email: string; amount: any }) =>
      makePostRequest(data, api.Payment.pay),
  });
};
