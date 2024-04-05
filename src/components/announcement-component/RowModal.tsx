import React, { useState } from "react";
import { HiMinusSm, HiX } from "react-icons/hi";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { useDeleteAnnoucement } from "../../services/hooks/Vendor";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";

type RowModalProps = {
  id: string;
  subject: string;
  content: string;
  startDate: string;
  show: boolean;
  CloseModal: () => void;
  isVisib: boolean;
  refetch: any;
};

const RowModal = ({
  id,
  subject,
  content,
  startDate,
  show,
  isVisib,
  refetch,
  CloseModal,
}: RowModalProps) => {
  const [loading, setLoading] = useState(false);
  const deleteAnnouncement = useDeleteAnnoucement(id);

  const handleDelete = () => {
    setLoading(true);
    deleteAnnouncement
      .mutateAsync({})
      .then((res: any) => {
        // console.log("res", res);
        setLoading(false);
        CloseModal();
        refetch();
        toast.success("Announcement deleted successfully");
      })
      .catch((err: any) => {
        // console.log("res", err);
        setLoading(false);
        toast.error("Error deleting the announcement");
      });
  };

  const handleClosed = (e: any) => {
    if (e.target.id === "container") CloseModal();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  if (!isVisib) return null;

  return (
    <div
      id="container"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClosed}
    >
      <div className="mt-20 h-full w-[550px]">
        <div className="rounded  bg-white">
          <div className="flex items-center justify-between bg-[#F4F4F4] px-4 py-3">
            <h1>Announcement</h1>
            <div className="flex items-center gap-3">
              <HiMinusSm className="hover:cursor-pointer" />
              <MdOutlineAccessAlarm className="hover:cursor-pointer" />
              <HiX
                onClick={() => CloseModal()}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="mx-2 py-4">
              <div className="px-2">
                <h1 className=" font-medium">{subject}</h1>
                <hr className="mt-2 border border-[#D9D9D9]" />
              </div>

              <div className="mt-4">
                <div className="h-80 overflow-hidden rounded bg-white">
                  <p className="px-2 text-sm">{content}</p>
                </div>
              </div>
              <div className="flex justify-end gap-4 px-4">
                <button
                  onClick={handleDelete}
                  disabled={loading}
                  className={`inline-flex items-center justify-center gap-2 rounded border-2 border-[#F91919] py-1 px-6 text-[#F91919] ${loading && "bg-opacity-70"}`}
                >
                  {loading ? (
                    <>
                      <CgSpinner size={18} className="animate-spin" />{" "}
                      {"Processing..."}
                    </>
                  ) : (
                    "Delete"
                  )}
                </button>
                <button className="rounded bg-[#197B30] py-1 px-6 text-white">
                  Repost
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowModal;
