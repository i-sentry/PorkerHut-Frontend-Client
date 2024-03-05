import useQueryAction from "../../../../lib/useQueryAction";
import useQueryMutation from "../../../../lib/useQueryMutation";
import { api, makeGetRequest, makePostRequest } from "../../../api";

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

export const useCreateBlog = ()=> {
  return useQueryMutation({
    mutationFn: (data: any) =>
      makePostRequest(data, api.Blogs.allBlogs),
  });
}