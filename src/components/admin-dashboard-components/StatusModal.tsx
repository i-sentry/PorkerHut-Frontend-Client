import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  useDeleteVendorById,
  useVendorStatusUpdate,
} from "../../services/hooks/Vendor";
import { CgSpinner } from "react-icons/cg";

const StatusModal = ({
  action,
  shop: item,
  showConfirm,
  setShowConfirm,
  refetch,
}: {
  item?: any;
  action: string;
  shop: any;
  showConfirm: boolean;
  setShowConfirm: any;
  refetch: any;
}) => {
  const [loading, setLoading] = useState(false);
  const updateStatus = useVendorStatusUpdate(item?._id);
  const deleteVendor = useDeleteVendorById(item?._id);

  const handleActivateVendor = async () => {
    setLoading(true);
    if (item?.storeStatus === "approved") {
      toast.info(
        `${item?.sellerAccountInformation?.shopName} is already approved`,
      );
      return;
    }
    updateStatus
      .mutateAsync({ storeStatus: "approved" })
      .then((res: any) => {
        console.log(res);
        refetch();
        toast.success(
          `${item?.sellerAccountInformation?.shopName} is now approved `,
        );
        setLoading(false);
        setShowConfirm(false);
      })
      .catch((err: any) => {
        console.log(err);
        toast.error("Error Occurred, try again!!!");
        setLoading(false);
        setShowConfirm(false);
      });
  };

  const handleDeactivateVendor = async () => {
    setLoading(true);
    if (item?.storeStatus === "deactivated") {
      toast.info(
        `${item?.sellerAccountInformation?.shopName} is already deactivated`,
      );
      return;
    }
    try {
      const response = await updateStatus.mutateAsync({
        storeStatus: "deactivated",
      });
      console.log({ response });
      toast.success(
        `${item?.sellerAccountInformation?.shopName} is now deactivated `,
      );
      refetch();
      setLoading(false);
      setShowConfirm(false);
    } catch (error: any) {
      console.log(error, "error");
      toast.error("Error Occurred, try again!!!");
      setLoading(false);
      setShowConfirm(false);
    }
  };

  const handleDeleteVendor = () => {
    setLoading(true);
    deleteVendor
      .mutateAsync(deleteVendor)
      .then((res: any) => {
        toast.success(
          `${item?.sellerAccountInformation?.shopName} is now deleted `,
        );
        refetch();
        console.log(res, "delete ResP");
        setLoading(false);
        setShowConfirm(false);
      })
      .catch((err: any) => {
        console.log(err, "delete err");
        toast.error("Error Occurred, try again!!!");
        setLoading(false);
        setShowConfirm(false);
      });
  };

  const handleConfirm = () => {
    if (action.toLowerCase() === "activate") {
      handleActivateVendor();
      return;
    }
    if (action.toLowerCase() === "deactivate") {
      handleDeactivateVendor();
      return;
    }
    if (action.toLowerCase() === "delete") {
      handleDeleteVendor();
      return;
    }
  };
  return (
    <div
      className={`${showConfirm ? "opacity-100" : "pointer-events-none opacity-0"} fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm`}
    >
      <span
        className="absolute top-20 right-8 cursor-pointer text-white"
        onClick={() => setShowConfirm(false)}
      >
        <BsX size={32} />
      </span>
      <div className="flex h-[200px] w-[400px] items-center justify-center rounded-xl bg-[#ffffff] p-7">
        <div>
          <p className="mb-5 text-center text-2xl">
            Are you sure you want to {action}{" "}
            <span className="font-medium capitalize">
              {item?.sellerAccountInformation?.shopName}
            </span>
            ?
          </p>
          <div className="flex justify-center gap-3">
            <button
              disabled={loading}
              onClick={() => handleConfirm}
              className={`rounded-lg bg-green-700 px-7 py-3  capitalize text-white ${loading ? "bg-opacity-50" : ""}`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <CgSpinner className="animate-spin" />
                  Processing...
                </span>
              ) : (
                "Yes"
              )}
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="rounded-lg bg-red-600 px-7 py-3 text-white"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
