import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import { useGetAllBlogs } from "../../services/hooks/users/blog";

const BlogTitle = ({ data }: any) => {
  console.log(data);
  //  console.log(row?.original?.id,"hhr")
  const navigate = useNavigate();
  const handleBlog = (id: string) => {
    navigate(`/admin/edit__blog/${id}`, {
      replace: true,
    });
  };
  return (
    <div
      onClick={() => handleBlog(data?.row?.original?.id)}
      className="text-[#197b30] hover:underline font-normal cursor-pointer"
    >
      {data?.row?.original?.title}
    </div>
  );
};

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Subject",
    accessor: "title",
    Cell: (props: any) => <BlogTitle data={props} />,
  },
  {
    Header: "Content",
    accessor: "content",
    Cell: ({ value }) => <div className="truncate max-w-prose">{value}</div>,
  },
  {
    Header: "Date",
    accessor: "createdAt",
  },
];

const BlogPost = () => {
  const getAllBlogs = useGetAllBlogs();

  const blogData = getAllBlogs?.data?.data;
  console.log({ blogData });
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Blog</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          All Information available
        </span>
      </div>
      {/* <div>
        <AdminTable
          Tcolumns={Tcolumns}
          // @ts-ignore
          optionalColumn={{}}
          tabs={[]}
          TData={blogData}
          placeholder={"Search subject.... "}
        />
      </div> */}
    </div>
  );
};

export default BlogPost;
