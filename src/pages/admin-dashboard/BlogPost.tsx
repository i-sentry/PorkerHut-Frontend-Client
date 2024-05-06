import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import { useDeleteBlog, useGetAllBlogs } from "../../services/hooks/users/blog";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import moment from "moment";
import { convertFromRaw, EditorState } from "draft-js";
import { DeleteConfirmation } from "./Blog";
import { orderBy } from "lodash";
import { toast } from "react-toastify";

const BlogContent = ({ data }: any) => {
  let contentText = null;

  try {
    const parsedContent = JSON.parse(data);
    const editorState = EditorState.createWithContent(
      convertFromRaw(parsedContent),
    );
    contentText = editorState.getCurrentContent().getPlainText();
  } catch (error) {
    contentText = data;
  }
  return <div className="max-w-prose truncate">{contentText ?? data}</div>;
};

const BlogTitle = ({ data }: any) => {
  const navigate = useNavigate();
  const handleBlog = (id: string) => {
    navigate(`/admin/blog/${id}`, {
      replace: true,
    });
  };
  return (
    <div
      onClick={() => handleBlog(data?.row?.original?._id)}
      className="cursor-pointer font-normal hover:text-[#197b30] hover:underline"
    >
      {data?.row?.original?.title}
    </div>
  );
};

const BlogPost = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { data: getAllBlogs, refetch, isRefetching } = useGetAllBlogs();
  const [itemToDelete, setItemToDelete] = useState("");
  const blogData = orderBy(getAllBlogs?.data, "createdAt", "desc");
  const [blogContent, setBlogContent] = useState(EditorState.createEmpty());
  const [selectedId, setSlectedId] = useState("");
  const initiateDelete = useDeleteBlog(selectedId);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
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
      Cell: ({ value }) => <BlogContent data={value} />,
    },
    {
      Header: "Date",
      accessor: "createdAt",
      Cell: ({ value }) => <div>{moment(value).format("MM/DD/YYYY")}</div>,
    },
  ];

  const optionalColumn = {
    id: "expand",

    Header: <div>Modify</div>,

    Cell: ({ row }: any) => {
      const navigate = useNavigate();

      const handleEdit = (id: any) => {
        navigate(`/admin/blog/${id}`, {
          replace: true,
        });
      };
      const handleDelete = (id: any) => {
        setSlectedId(id);
        setShowConfirmation(true);
      };

      return (
        <>
          <div className="flex gap-3">
            <span
              onClick={() => handleEdit(row?.original?._id)}
              className="cursor-pointer text-[#333333] transition-all ease-in-out hover:text-[#0eb683] active:scale-90"
            >
              <RiEditLine className="text-lg" />
            </span>
            <span
              onClick={() => handleDelete(row?.original?._id)}
              className="cursor-pointer text-[#333333] transition-all ease-in-out hover:text-[#e53e3e] active:scale-90"
            >
              <RiDeleteBinLine className="text-lg" />
            </span>
          </div>
        </>
      );
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);
  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    initiateDelete
      .mutateAsync({})
      .then((res) => {
        toast("Post deleted successfully");
        refetch();
        setShowConfirmation(false);
      })
      .catch((err) => {});
  };


  return (
    <div className="py-6 pl-8 pr-5">
      {showConfirmation && (
        <DeleteConfirmation
          name={itemToDelete}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
      {blogData ? (
        <div>
          <div className="mb-5">
            <h1 className="text-2xl font-medium ">Blog</h1>
            <span className="text-sm font-normal text-[#A2A2A2]">
              All Information available
            </span>
          </div>
          <div>
            <AdminTable
              Tcolumns={Tcolumns}
              TData={blogData}
              optionalColumn={optionalColumn}
              tabs={[]}
              placeholder="Search subject...."
              nextpage={handleNextPage}
              prevPage={handlePrevPage}
            />
          </div>
        </div>
      ) : (
        <div className="flex h-screen  items-center justify-center">
          <div className="text-center">
            <p className="mb-6 text-xl text-gray-500">
              Fetching information...
            </p>
            <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
