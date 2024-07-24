import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
// import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeCustomPutRequest,
  // makeCustomPutRequest,
  makeGetRequestWithCustomHeader,
  // makePostRequest,
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

export const useUpdateInvoiceStatus = () => {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makeCustomPutRequest(data, api.Payment.invoiceStatus),
  });
};
