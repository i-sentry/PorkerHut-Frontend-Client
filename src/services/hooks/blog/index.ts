import useQueryAction from "../../../lib/useQueryAction"
import { api, makeGetRequest } from "../../api"


export const useGetAllBlogs = () => {
    return useQueryAction({
        queryFn: () => makeGetRequest(api.Blogs.allBlogs),
        queryKey: ['blogs']
    })
}
export const useGetBlog = (id: string | undefined) => {
    return useQueryAction({
        queryFn: () => makeGetRequest(api.Blogs.singleBlog(id)),
        queryKey: ['blogs', id]
    })
}