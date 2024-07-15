import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeCustomPutRequest,
  makeGetRequestWithCustomHeader,
  makePostRequest,
} from "../../../api";

export const useGetAllInvoice = () => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.Payment.invoice),
    queryKey: ["all+invoice+records"],
  });
};

export const useGetAllInvoiceTotals = () => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.Payment.invoiceTotal),
    queryKey: ["all+invoice+records+totals"],
  });
};
