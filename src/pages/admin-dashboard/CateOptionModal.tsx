import React, { useState } from "react";
import {
  useDeleteSingleCategory,
  useDeleteSubCategory,
} from "../../services/hooks/Vendor/category";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import { BsX } from "react-icons/bs";
import PorkerLogo from "../../assets/images/porkerlogo.png";

const CateOptionModal = ({
  message,
  action,
  setShowOption,
  id,
  refetch,
  closeInfo,
}: {
  message: string;
  action: string;
  setShowOption: any;
  id: any;
  refetch: any;
  closeInfo: any;
}) => {
  const [loading, setLoading] = useState(false);
  const deleteCat = useDeleteSingleCategory(id);
  const deleteSub = useDeleteSubCategory(id);

  const handleConfirm = () => {
    setLoading(true);
    if (action.toLowerCase() === "delete") {
      deleteCat
        .mutateAsync({})
        .then((res: any) => {
          toast.success("Category Deleted Successfully!!!");
          setLoading(false);
          setShowOption(false);
          closeInfo(false);
          refetch();
        })
        .catch((err: any) => {
          toast.error("Error deleting category, try again!!!");
          setLoading(false);
          setShowOption(false);
        });
      return;
    }

    if (action.toLowerCase() === "disable") {
      setShowOption(false);
      setLoading(false);

      return;
    }
  };

  const handleClose = () => {
    setShowOption(false);
  };

  return (
    <div className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="w-[500px] rounded-md bg-white ">
        <div className="flex items-center justify-between border-b px-5 py-3">
          <div className="flex cursor-pointer select-none items-center gap-2">
            <img
              src={PorkerLogo}
              alt="PorkerLogo"
              className="h-9 md:cursor-pointer"
            />
            <h1 className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-xl">
              Porker Hut
            </h1>
          </div>
          <div
            onClick={() => setShowOption(false)}
            className="cursor-pointer text-neutral-800"
          >
            <BsX size={32} />
          </div>
        </div>
        <div className="p-5">
          <span className="font-medium text-[#e10]">
            Read carefully, before proceeding
          </span>
          <p className="mt-1 text-neutral-500">{message}</p>
          <div className="mt-6 flex items-center gap-2">
            <button
              onClick={handleConfirm}
              disabled={loading}
              className={`rounded bg-green-700 px-6 py-2 text-sm text-white ${loading ? "bg-opacity-50" : "bg-opacity-100"}`}
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <CgSpinner className="animate-spin" size={16} /> Processing...
                </span>
              ) : (
                "Yes"
              )}
            </button>
            <button
              onClick={handleClose}
              className="rounded bg-red-600 px-6 py-2 text-sm text-white"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateOptionModal;
