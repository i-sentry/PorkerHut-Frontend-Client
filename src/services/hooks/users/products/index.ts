import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeCustomPutRequest,
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
  makePutRequest,
} from "../../../api";

export const useGetAllProducts = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.allProducts),
    queryKey: ["products+"],
  });
};

export const useGetAllApprovedProducts = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.allApprovedProducts),
    queryKey: ["Approved-products+"],
  });
};

export const useFavoriteProduct = () => {
  return useQueryMutation({
    mutationFn: (data: {
      userId: string | undefined;
      productId: string | undefined;
    }) => makePostRequest(data, api.Products.favouriteProduct),
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.getSingleProduct(id)),
    queryKey: ["product +"],
  });
};

export const useGetVendorInfo = (id: string | undefined) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Vendors.vendorById(id)),
  });
};

export const useGetFavProduct = (
  userId: string | undefined,
  productId: string | undefined,
) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.isFavProduct(userId, productId)),
    queryKey: ["productFav +"],
  });
};

export const useGetUserFavProduct = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.userFavProduct(id)),
    queryKey: ["userFavProduct +"],
  });
};

export const useDeleteFavorite = (
  userId: string | undefined,
  productId: string | undefined,
) => {
  return useQueryMutation({
    mutationFn: () =>
      makeDeleteRequest(api.Products.removeFavProduct(userId, productId)),
  });
};

export const useCreateRating = () => {
  return useQueryMutation({
    mutationFn: (data: {
      productId: string;
      userId: string;
      ratingValue: number;
      comment: string;
    }) => makePostRequest(data, api.Ratings.createRating),
  });
};

export const useUpdateRating = (ratingId: string) => {
  return useQueryMutation({
    mutationFn: (data: { ratingValue: number; comment: string }) =>
      makePatchRequest(data, api.Ratings.updateRating(ratingId)),
  });
};

export const useGetAllProductRating = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Ratings.allRating(id)),
    queryKey: ["userRating +"],
  });
};

export const useGetAllRatingByUser = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Ratings.allRatingsByUser(id)),
    queryKey: ["userRating +"],
  });
};

export const useGetRatingDetails = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Ratings.ratingDetails(id)),
    queryKey: ["ratingDetails +"],
  });
};

export const useGetRatedProduct = (userId: string, productId: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Ratings.isRated(userId, productId)),
    queryKey: ["userRating +"],
  });
};
