import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import {
  api,
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
} from "../../../api";

export const useGetAllProducts = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.allProducts),
    queryKey: ["products+"],
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

export const useGetSingleProduct = (id: string | null) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.getSingleProduct(id)),
    queryKey: ["product +"],
  });
};
export const useGetFavProduct = (
  userId: string | undefined,
  productId: string | undefined
) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Products.isFavProduct(userId, productId)),
    queryKey: ["productFav +"],
  });
};

export const useDeleteFavorite = (
  userId: string | undefined,
  productId: string | undefined
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
