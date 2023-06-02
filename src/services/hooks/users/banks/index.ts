import { AxiosResponse } from "axios";
import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import { api, makeGetRequest, makePostRequest } from "../../../api";
import { IBankData } from "../../../serviceType";

export const useGetBankList = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Banks.getBanks),
    queryKey: ["blogs"],
  });
};

export const useResolveBankName = (
  account_number: string | number,
  bank_code?: string | number
) => {
  return useQueryAction({
    queryFn: () =>
      makeGetRequest(api.Banks.resolveAcc(account_number, bank_code)),
  });
};
