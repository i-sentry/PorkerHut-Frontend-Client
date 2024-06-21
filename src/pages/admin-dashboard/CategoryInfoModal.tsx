import React, { useContext, useState } from "react";
import {
  useDisableCategory,
  useUpdateSingleCategory,
} from "../../services/hooks/Vendor/category";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import { BsX } from "react-icons/bs";
import moment from "moment";
import { useGetAllProducts } from "../../services/hooks/users/products";
import CateOptionModal from "./CateOptionModal";
import AdminAccessContext from "../../context/AdminAccessProvider";

const CategoryInfoModal = ({
  isOpen,
  setIsOpen,
  selectedCategory,
  refetch,
}: {
  isOpen: boolean;
  setIsOpen: any;
  selectedCategory: any;
  refetch: any;
}) => {
  const { userRole } = useContext(AdminAccessContext);
  const [editImg, setEditImg] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>();
  const [file, setFile] = useState<any>(null);
  const { data, isLoading } = useGetAllProducts();
  const [showOption, setShowOption] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [action, setAction] = useState("");
  const updateCatImg = useUpdateSingleCategory(selectedCategory?._id);
  const [loading, setLoading] = useState(false);
  const disableCategory = useDisableCategory(selectedCategory?._id);

  const handleChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    const name = e.target.name;
    // setImage1
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
      setFile(file);
    }
  };

  const allCatProds = (arr: any) => {
    return arr?.filter(
      (item: any) =>
        item?.information?.category?.name.toLowerCase() ===
        selectedCategory?.name.toLowerCase(),
    )?.length;
  };

  const handleRemove = () => {
    setImgUrl("");
    setFile(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    setImgUrl("");
    setFile(null);
  };

  const handleUpdateImage = () => {
    const data = new FormData();
    if (file) {
      // data.append("name", selectedCategory?.name);
      data.append("featuredImage", file);
      setLoading(true);

      updateCatImg
        .mutateAsync(data)
        .then((res: any) => {
          toast.success(
            `${selectedCategory?.name} featured image updated successfully!`,
          );
          setFile(null);
          refetch();
          setLoading(false);
        })
        .catch((err: any) => {
          toast.error(
            `Error updating ${selectedCategory?.name} featured image`,
          );
          setLoading(false);
        });
    }
  };

  const handleDisableCategory = async () => {
    disableCategory
      .mutateAsync({})
      .then((res: any) => {
        toast.success(
          res.data?.data?.isDisabled
            ? `Disabled ${res.data?.data?.name} category`
            : `Enabled ${res.data?.data?.name} category`,
        );
        refetch();
        setIsOpen(false);
      })
      .catch((err: any) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div
        className={`${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-50`}
      >
        <div className="relative mt-8 h-fit w-[500px] overflow-auto rounded bg-white">
          <div className="flex items-center justify-between border-b border-neutral-300 px-6 py-4">
            <h3 className="text-xl font-bold">Category Information</h3>
            <span onClick={handleClose} className="cursor-pointer">
              <BsX size={32} />
            </span>
          </div>
          <div className="p-6">
            <div className="flex flex-row gap-3">
              <div className="flex flex-col">
                <div className="group relative h-[160px] w-[170px] overflow-hidden rounded-md">
                  <input
                    type="file"
                    name="catImg"
                    id="catImg"
                    onChange={(e) => handleChange(e)}
                    accept="image/jpeg, image/png"
                    className="hidden"
                  />
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt="Featured Category Image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={selectedCategory?.featuredImage}
                      alt="category-image"
                      className="h-full w-full rounded-md object-cover object-center"
                    />
                  )}

                  {file && (
                    <span
                      onClick={handleRemove}
                      className="absolute top-1 right-1 inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-red-600 text-sm capitalize text-white"
                    >
                      <BsX size={24} />
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="space-y-2">
                  <li className="inline-block text-neutral-500">
                    Category Name:{" "}
                    <span className="font-medium capitalize text-[#333]">
                      {selectedCategory?.name}
                    </span>
                  </li>
                  <li className="inline-block text-neutral-500">
                    Category Description:{" "}
                    <span className="font-medium text-[#333]">
                      {selectedCategory?.description ||
                        "This category has no description yet"}
                    </span>
                  </li>
                </ul>
                <div className="mt-4 space-x-2">
                  <label
                    htmlFor="catImg"
                    className="inline-flex cursor-pointer items-center justify-center rounded border border-green-700 border-opacity-50 bg-neutral-100 py-2 px-3 text-sm capitalize text-green-700"
                  >
                    Change Image
                  </label>
                  {file && (
                    <button
                      onClick={handleUpdateImage}
                      disabled={loading}
                      className={`inline-flex cursor-pointer items-center justify-center rounded bg-green-700 py-2 px-3 text-sm capitalize text-white ${loading ? "bg-opacity-50" : "bg-opacity-100"}`}
                    >
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <CgSpinner className="animate-spin" /> Updating...
                        </span>
                      ) : (
                        "Update Image"
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div>
                <strong>Created Date:</strong>{" "}
                {moment(selectedCategory?.createdAt).format("Do MMMM, YYYY")}
              </div>
              <div>
                <strong>Last Modified:</strong>{" "}
                {moment(selectedCategory?.updatedAt).format("Do MMMM, YYYY")}
              </div>
              <div>
                <strong>
                  No of products under {selectedCategory?.name} category:
                </strong>{" "}
                {allCatProds(data?.data)}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium">Subcategories:</h3>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                {selectedCategory?.subcategories?.map(
                  (sub: any, index: any) => (
                    <span
                      className="rounded text-sm capitalize text-neutral-500"
                      key={index}
                    >
                      {sub?.name},
                    </span>
                  ),
                )}
                {selectedCategory?.subcategories?.length < 1 && (
                  <p>No Subcategories available</p>
                )}
              </div>
            </div>
            {userRole === "superadmin" && (
              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setModalMsg(
                      `Are you sure you want to delete the '${selectedCategory?.name}' category? Deleting this category will permanently remove all ${allCatProds(data?.data)} associated products, their reviews, and all subcategories. This action cannot be undone.`,
                    );
                    setAction("delete");
                    setShowOption(true);
                  }}
                  className="rounded border border-red-600 px-5 py-2 text-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setModalMsg(
                      `Are you sure you want to disable ${selectedCategory?.name} category? Once it is disable, vendors are unable to create product under this category until enabled again.`,
                    );
                    setAction("disable");
                    setShowOption(true);
                  }}
                  className="rounded bg-green-700 px-5 py-2 text-white"
                >
                  {selectedCategory?.isDisabled
                    ? "Enable Category"
                    : "Disable Category"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CATEGORY ACTION(DELETE/EDIT) MODAL */}
      {showOption && (
        <CateOptionModal
          message={modalMsg}
          setShowOption={setShowOption}
          action={action}
          id={selectedCategory?._id}
          refetch={refetch}
          closeInfo={setIsOpen}
          disableCategory={handleDisableCategory}
        />
      )}
    </>
  );
};

export default CategoryInfoModal;
