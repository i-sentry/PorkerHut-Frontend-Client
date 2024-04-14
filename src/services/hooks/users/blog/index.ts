import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import { api, makeCustomPutRequest, makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest } from "../../../api";

export const useGetAllBlogs = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Blogs.allBlogs),
    queryKey: ["blogs"],
  });
};
export const useGetBlog = (id: string | undefined) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Blogs.singleBlog(id)),
    queryKey: ["blogs", id],
  });
};
export const useEditBlog = (id: string | undefined) => {
  return useQueryMutation({
    mutationFn: (data: any) => makeCustomPutRequest(data, api.Blogs.singleBlog(id)),

  });
};

export const useDeleteBlog = (id: string | undefined) => {
  return useQueryMutation({
    mutationFn: () =>
      makeDeleteRequest( api.Blogs.singleBlog(id)),
  });
};

export const useCreateBlog = () => {
  return useQueryMutation({
    mutationFn: (data: any) => makePostRequest(data, api.Blogs.createBlogs),
  });
};
