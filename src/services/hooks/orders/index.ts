import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import { Order } from "../../../pages/BillingPage";
import { api, makeGetRequest, makePostRequestCustom } from "../../api";

export const useCreateOrder = () => {
  return useQueryMutation({
    mutationFn: (data: Order) => makePostRequestCustom(data, api.Order.order),
  });
};

export const useGetOrders = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.order),
    queryKey: ["order +"],
  });
};
