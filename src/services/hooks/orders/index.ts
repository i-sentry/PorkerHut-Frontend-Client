import useQueryMutation from "../../../lib/useQueryMutation"
import { Order } from "../../../pages/BillingPage"
import { api, makePostRequestCustom } from "../../api"

export const useCreateOrder = () => {
     return useQueryMutation({
       mutationFn: (data: Order) => makePostRequestCustom(data, api.Order.order),
     });
}