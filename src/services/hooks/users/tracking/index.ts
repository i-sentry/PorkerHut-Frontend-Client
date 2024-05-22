import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import { api, makeGetRequest, makePostRequest } from "../../../api";

export const useGetAllTrackings = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Tracking.track),
    queryKey: ["trackings+"],
  });
};

export const useCreateOrderTracking = () => {
  return useQueryMutation({
    mutationFn: (data: {
      user_id: string;
      order_id: string;
      product_id: string;
      order_date: Date;
      current_status: string;
    }) => makePostRequest(data, api.Tracking.track),
  });
};

export const useGetUserTrackings = (userId: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Tracking.userTracking(userId)),
    queryKey: ["userTrackings+"],
  });
};

export const useGetOrderTracking = (orderId: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Tracking.OrderTracking(orderId)),
    queryKey: ["orderTracking+"],
  });
};
