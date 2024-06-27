import React, { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { useCategoryModal } from "../../store/overlay";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useDeleteSubCategory,
  useGetAllCategories,
  useUpdateSingleCategory,
  useUpdateSingleSubcategory,
} from "../../services/hooks/Vendor/category";
// import ManageCategories from "./ManageCategories";
import logo from "../../assets/images/porkerlogo.png";
import CustomCatModal from "../../components/admin-dashboard-components/CustomCatModal";
import { ToastContainer, toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import { BsPlus, BsX } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import CategoryInfoModal from "./CategoryInfoModal";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Porkerlogo from "../../assets/images/porkerlogo.png";
import { TbCategory2 } from "react-icons/tb";
interface BlueDiv {
  id: number;
}
// export const categories = [
//   {
//     id: "1",
//     name: "Pork",
//     subCategories: [
//       {
//         id: "1",
//         name: "Head",
//       },
//       {
//         id: "2",
//         name: "Intestine",
//       },
//       {
//         id: "3",
//         name: "Lap",
//       },
//       {
//         id: "4",
//         name: "Spare Ribs",
//       },
//       {
//         id: "5",
//         name: "Other Body Parts",
//       },
//     ],
//   },
//   {
//     id: "2",
//     name: "Livestock",
//     subCategories: [
//       {
//         id: "1",
//         name: "Duroc",
//       },
//       {
//         id: "2",
//         name: "Landrace",
//       },
//       {
//         id: "3",
//         name: "Large White",
//       },
//       {
//         id: "4",
//         name: "Hampshire",
//       },
//     ],
//   },
//   {
//     id: "3",
//     name: "Animal Feed",
//     subCategories: [
//       {
//         id: "1",
//         name: "Creep Feed",
//       },
//       {
//         id: "2",
//         name: "Weaner Feed",
//       },
//       {
//         id: "3",
//         name: "Growers Feed",
//       },
//       {
//         id: "4",
//         name: "Sow Feed",
//       },
//       {
//         id: "5",
//         name: "Lactating Feed",
//       },
//       {
//         id: "6",
//         name: "Finisher Feed",
//       },
//     ],
//   },
// ];
const Category = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [category, setCategory] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editSubIndex, setEditSubIndex] = useState(-1);
  const [currentEdit, setCurrentEdit] = useState<string>("");
  const [currentSubEdit, setCurrentSubEdit] = useState<string>("");
  const updateCategoryName = useUpdateSingleCategory(currentEdit);
  const updateSubCate = useUpdateSingleSubcategory(currentSubEdit);
  const [categoryName, setCategoryName] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const showModal = useCategoryModal((state) => state.showModal);
  const setShowModal = useCategoryModal((state) => state.setShowModal);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>();
  // const location = useLocation();
  const navigate = useNavigate();
  const { data: allcat, isLoading, refetch } = useGetAllCategories();
  const [loading, setLoading] = useState(false);
  const [subConfirm, setSubConfirm] = useState(false);

  useEffect(() => {
    !isLoading ? setCategory(allcat?.data) : setCategory([]);
  }, [allcat?.data]);

  const setSelectedCategoryId = useCategoryModal(
    (state) => state.setSelectedCategoryId,
  );

  const handleToggle = (index: React.SetStateAction<number>) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleEdit = (index: any, id: any) => {
    setEditIndex(index);
    setCategoryName(category[index]?.name);
    setCurrentEdit(id);
  };

  const handleEditSub = (id: any, index: any, indexSub: any) => {
    setEditSubIndex(indexSub);
    setSubcategoryName(category[index]?.subcategories[indexSub]?.name);
    setCurrentSubEdit(id);
    setCurrentEdit(category[index]?._id);
  };

  const handleSave = () => {
    setLoading(true);
    updateCategoryName
      .mutateAsync({ name: categoryName })
      .then((res: any) => {
        toast.success("Category name updated successfully");
        refetch();
        setLoading(false);
        setEditIndex(-1);
      })
      .catch((err: any) => {
        toast.error("Error occurred, try again!!!");
        setLoading(false);
      });
  };

  const handleSaveSub = () => {
    setLoading(true);
    updateSubCate
      .mutateAsync({ categoryId: currentEdit, name: subcategoryName })
      .then((res: any) => {
        toast.success("Subcategory updated successfully!");
        refetch();
        setLoading(false);
        setEditSubIndex(-1);
      })
      .catch((err: any) => {
        toast.error("Error updating subcategory, try again!");
        setLoading(false);
      });
  };

  const handleSubCat = (index: any) => {
    setShowModal(true);
    setSelectedCategoryId(index);
  };

  const handleCancel = (index: any) => {
    setEditIndex(-1);
  };

  const handleSubCancel = (index: any) => {
    setEditSubIndex(-1);
    setSubcategoryName("");
  };

  return (
    <>
      <div className="py-6 pl-8 pr-5 pb-10">
        {/* <ToastContainer /> */}
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-2xl font-bold text-[#333333]">
              Manage Categories
            </h1>
            <span className="mt-3 text-[16px] font-normal leading-[19px] text-[#A2A2A2]">
              Create categories for sold items.
            </span>
          </div>
          <button
            disabled={isLoading}
            onClick={() => navigate("/admin/manage+category/new")}
            className={`flex cursor-pointer items-center gap-3 rounded-md border border-[#197B30]  bg-[#fff] px-3 py-2.5 text-[#197B30] shadow-md`}
          >
            <>
              <IoMdAdd size={20} />
              <span>Add Category</span>
            </>
          </button>
        </div>

        {isLoading && (
          <>
            <div className="flex h-[300px] flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={logo}
                  alt="loaderLogo"
                  className="h-20 w-20 animate-pulse"
                />
                <p className="text-[14px] leading-[24px] text-[#333333]">
                  Fetching Data...
                </p>
              </div>
            </div>
          </>
        )}

        {!isLoading && (
          <div className="mt-6">
            {!isLoading && category?.length > 0 && (
              <div className="rounded-md border-0 bg-[#F4F4F4] xl:w-[70%]">
                <div className=" border-1  flex items-center justify-between rounded-t-md border border-[#D9D9D9] px-4">
                  <div className="w-10 text-sm font-light "></div>
                  <div className="w-1/3 border-l border-r border-[#D9D9D9] pl-5 text-sm font-light">
                    <h2 className="py-3 text-[20px] font-normal leading-[23px] text-[#333333]">
                      Names
                    </h2>
                  </div>
                  <div className="w-2/4 pl-5 text-sm font-light">
                    <h2 className="py-3 text-[20px] font-normal leading-[23px] text-[#333333]">
                      Action
                    </h2>
                  </div>
                  <div className="w-1/4 border-l pl-5 text-sm font-light xl:w-[15%]">
                    <h2 className="py-3 text-[20px] font-normal leading-[23px] text-[#333333]">
                      Status
                    </h2>
                  </div>
                </div>
                {category.map((cat, index) => (
                  <div key={cat?.name + index} className="rounded-b-md">
                    <div className=" border-1  flex items-center justify-between border border-t-0 border-[#D9D9D9] px-4">
                      <div className="text-md w-10 font-bold">
                        {" "}
                        {expandedIndex !== index ? (
                          <span
                            onClick={() => handleToggle(index)}
                            className="cursor-pointer "
                          >
                            <IoAdd size={20} color="#333333" />
                          </span>
                        ) : (
                          <span
                            onClick={() => handleToggle(index)}
                            className="cursor-pointer "
                          >
                            <BiMinus size={20} color="#333333" />
                          </span>
                        )}
                      </div>

                      <div className="w-1/3 border-l border-r border-[#D9D9D9] pl-5">
                        {editIndex === index ? (
                          <div className=" w-full py-2">
                            <input
                              type="text"
                              value={categoryName}
                              onChange={(e: any) =>
                                setCategoryName(e.target.value)
                              }
                              className="w-[80%] rounded-md border border-[#D9D9D9] py-1.5 px-2 capitalize focus:border-green-700 focus:ring-green-700 "
                              // defaultValue={cat?.name}
                            />
                          </div>
                        ) : (
                          <div className=" w-full py-[17px]">
                            <p className="text-[16px] font-normal capitalize leading-[19px]">
                              {cat?.name}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="w-2/4 pl-5">
                        <div className="">
                          {editIndex === index ? (
                            <div className="flex justify-start gap-3 ">
                              <button
                                onClick={handleSave}
                                disabled={loading}
                                className={`flex w-28 items-center justify-center rounded bg-[#197B30] py-2 text-[14px] font-normal leading-[24px] text-white ${loading ? "bg-opacity-50" : "bg-opacity-100"}`}
                              >
                                {loading ? (
                                  <span className="inline-flex items-center justify-center gap-2">
                                    <CgSpinner
                                      className="animate-spin"
                                      size={20}
                                    />
                                    Saving...
                                  </span>
                                ) : (
                                  "Save"
                                )}
                              </button>
                              <button
                                onClick={() => handleCancel(index)}
                                className=" w-28 rounded border border-[#F91919] bg-[#fff] py-2 text-[14px]  font-normal leading-[24px] text-[#F91919]"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <div className="flex justify-start gap-3 ">
                              <button
                                onClick={() => handleEdit(index, cat?._id)}
                                className=" rounded-sm  border border-[#D9D9D9] p-1  text-[16px] font-normal leading-[19px]  text-[#333333]"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleSubCat(cat?._id)}
                                className=" w-36 rounded-sm  border border-[#D9D9D9] py-1 text-[16px]  font-normal leading-[19px] text-[#333333]"
                              >
                                Add subcategory
                              </button>
                              <button
                                onClick={() => {
                                  setIsOpen(true);
                                  setSelectedCategory(cat);
                                }}
                                className="rounded-sm border border-[#D9D9D9] px-4 py-1 text-[16px]  font-normal leading-[19px] text-[#333333]"
                              >
                                View
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-1/4 border-l border-[#D9D9D9] pl-5 xl:w-[15%]">
                        <div
                          className={`py-3 text-base ${cat?.isDisabled ? "text-[#e10]" : "text-green-700"}`}
                        >
                          {cat?.isDisabled ? "Disabled" : "Enabled"}
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        (expandedIndex === index ? "flex flex-col" : "hidden") +
                        " h-full w-full bg-[#333333] p-5 transition-all duration-700 ease-in-out"
                      }
                    >
                      {cat?.subcategories.map((sub: any, indexSub: number) => (
                        <ul key={`${sub?.id}-${indexSub}`}>
                          <li className="ml-10 flex items-center gap-3 py-1.5 capitalize text-[#fff]">
                            <span className="inline-flex items-center gap-1">
                              <RiEditLine
                                onClick={() =>
                                  handleEditSub(sub?._id, index, indexSub)
                                }
                                className="cursor-pointer text-lg text-neutral-400 hover:text-green-500"
                              />
                              <RiDeleteBinLine
                                onClick={() => {
                                  setSubConfirm(true);
                                  setSubcategoryName(sub?.name);
                                  setCurrentSubEdit(sub?._id);
                                }}
                                className="cursor-pointer text-lg text-neutral-400 hover:text-red-500"
                              />
                            </span>
                            {editSubIndex === indexSub ? (
                              <div className="w-[200px] py-2">
                                <input
                                  type="text"
                                  name="subcategory"
                                  value={subcategoryName}
                                  onChange={(e: any) =>
                                    setSubcategoryName(e.target.value)
                                  }
                                  className="w-full rounded-md border border-[#D9D9D9] py-1.5 px-2 capitalize text-neutral-700 focus:border-green-700 focus:ring-green-700 "
                                  // defaultValue={cat?.name}
                                />
                              </div>
                            ) : (
                              <div className=" w-full py-[17px]">
                                <p className="text-[16px] font-normal capitalize leading-[19px]">
                                  {sub?.name}
                                </p>
                              </div>
                            )}
                            {editSubIndex === indexSub && (
                              <div className="flex justify-start gap-3 ">
                                <button
                                  onClick={handleSaveSub}
                                  disabled={loading}
                                  className={`flex w-28 items-center justify-center rounded bg-[#197B30] py-2 text-[14px] font-normal leading-[24px] text-white disabled:bg-green-700 disabled:bg-opacity-50 ${loading ? "bg-opacity-50" : "bg-opacity-100"}`}
                                >
                                  {loading ? (
                                    <span className="inline-flex items-center justify-center gap-2">
                                      <CgSpinner
                                        className="animate-spin"
                                        size={20}
                                      />
                                      Saving...
                                    </span>
                                  ) : (
                                    "Save"
                                  )}
                                </button>
                                <button
                                  onClick={() => handleSubCancel(indexSub)}
                                  className=" w-28 rounded border border-[#F91919] bg-[#fff] py-2 text-[14px]  font-normal leading-[24px] text-[#F91919]"
                                >
                                  Cancel
                                </button>
                              </div>
                            )}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isLoading && category?.length < 1 && (
              <div className="flex h-[300px] flex-col items-center justify-center gap-2 rounded-md bg-[#F4F4F4] py-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-neutral-400">
                  <TbCategory2 size={32} className="text-neutral-400" />
                </span>
                <p className="text-center text-[#727272]">No categories yet</p>
              </div>
            )}
          </div>
        )}
      </div>
      {showModal && <CustomCatModal category={category} />}

      {/* CATEGORY INFORMATION MODAL */}
      <CategoryInfoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedCategory={selectedCategory}
        refetch={refetch}
      />

      {/* SUBCATEGORY DELETE CONFIRMATION */}
      <SubDeleteModal
        subConfirm={subConfirm}
        setSubConfirm={setSubConfirm}
        refetch={refetch}
        subId={currentSubEdit}
        message={
          <p className="text-neutral-500">
            Are you sure you want to delete{" "}
            <strong className="capitalize">{subcategoryName}</strong>{" "}
            subcategory? When deleted all products under this subcategory will
            be deleted too
          </p>
        }
      />
    </>
  );
};

export default Category;

const SubDeleteModal = ({
  subConfirm,
  setSubConfirm,
  message,
  refetch,
  subId,
}: {
  subConfirm: boolean;
  setSubConfirm: any;
  message: any;
  refetch: any;
  subId: any;
}) => {
  const [loading, setLoading] = useState(false);
  const deleteSub = useDeleteSubCategory(subId);

  const handleConfirm = () => {
    setLoading(true);

    deleteSub
      .mutateAsync({})
      .then((res: any) => {
        toast.success("Subcategory deleted successfully!");
        refetch();
        setLoading(false);
        setSubConfirm(false);
      })
      .catch((err: any) => {
        toast.error("Error deleting subcategory, try again!!!");
        setLoading(false);
      });
  };

  const handleClose = () => {
    setSubConfirm(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-md duration-300 ${subConfirm ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="w-[500px] rounded-md bg-white ">
        <div className="flex items-center justify-between border-b px-5 py-3">
          <div className="flex cursor-pointer select-none items-center gap-2">
            <img
              src={Porkerlogo}
              alt="PorkerLogo"
              className="h-9 md:cursor-pointer"
            />
            <h1 className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-xl">
              Porker Hut
            </h1>
          </div>
          <div
            onClick={() => setSubConfirm(false)}
            className="cursor-pointer text-neutral-800"
          >
            <BsX size={32} />
          </div>
        </div>
        <div className="p-5">
          {message}
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
