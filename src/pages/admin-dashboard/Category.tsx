import React, { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { useCategoryModal } from "../../store/overlay";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useDeleteSingleCategory,
  useDeleteSubCategory,
  useGetAllCategories,
  useUpdateSingleCategory,
} from "../../services/hooks/Vendor/category";
// import ManageCategories from "./ManageCategories";
import logo from "../../assets/images/porkerlogo.png";
import CustomCatModal from "../../components/admin-dashboard-components/CustomCatModal";
import { ToastContainer, toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import { BsPlus, BsX } from "react-icons/bs";
import moment from "moment";
import { useGetAllProducts } from "../../services/hooks/users/products";
import PorkerLogo from "../../assets/images/porkerlogo.png";
import { AiOutlineClose } from "react-icons/ai";
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
  const [currentEdit, setCurrentEdit] = useState<string>("");
  const updateCategoryName = useUpdateSingleCategory(currentEdit);
  const [categoryName, setCategoryName] = useState("");
  const showModal = useCategoryModal((state) => state.showModal);
  const setShowModal = useCategoryModal((state) => state.setShowModal);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>();
  // const location = useLocation();
  const navigate = useNavigate();
  const { data: allcat, isLoading, refetch } = useGetAllCategories();
  const [loading, setLoading] = useState(false);
  // console.log(allcat?.data, isLoading, "all cats", category);

  // const queryParams = new URLSearchParams(location.search);
  // const initialCateInfo = queryParams.get("cateInfo");

  // console.log(queryParams.get("cateInfo"), "params", initialCateInfo);

  // const [cateInfo, setCateInfo] = useState(false);

  useEffect(() => {
    !isLoading ? setCategory(allcat?.data) : setCategory([]);
  }, [allcat?.data]);

  // useEffect(() => {
  //   // Update the URL query parameter whenever the state changes
  //   const newSearchParams = new URLSearchParams(location.search);
  //   newSearchParams.set("cateInfo", cateInfo.toString());
  //   navigate("?" + newSearchParams.toString(), { replace: true });
  // }, [location.search, navigate, cateInfo]);

  const setSelectedCategoryId = useCategoryModal(
    (state) => state.setSelectedCategoryId,
  );
  // const [blueDivs, setBlueDivs] = useState<BlueDiv[]>([]);
  // const handleAddBlueDiv = () => {
  //   const newBlueDiv: BlueDiv = {
  //     id: blueDivs.length + 1,
  //   };
  //   setBlueDivs([...blueDivs, newBlueDiv]);
  // };

  // const handleCancelBlueDiv = (id: number) => {
  //   const updatedBlueDivs = blueDivs.filter((blueDiv) => blueDiv.id !== id);
  //   setBlueDivs(updatedBlueDivs);
  // };

  // const validationSchema = Yup.object().shape({});

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

  const handleSave = () => {
    setLoading(true);
    updateCategoryName
      .mutateAsync({ name: categoryName })
      .then((res: any) => {
        toast.success("Category name updated successfully");
        console.log(res, "res fro upodae");
        refetch();
        setLoading(false);
        setEditIndex(-1);
      })
      .catch((err: any) => {
        toast.error("Error occurred, try again!!!");
        console.log(err, "err fro upodae");
        setLoading(false);
      });
  };

  const handleSubCat = (index: any) => {
    // console.log(index, "cat index");
    // console.log(showModal, "showModal");
    setShowModal(true);
    setSelectedCategoryId(index);
  };

  const handleCancel = (index: any) => {
    setEditIndex(-1);
  };

  return (
    <>
      <div className="py-6 pl-8 pr-5 pb-10">
        <ToastContainer />
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
              <div className="rounded-md border-0 bg-[#F4F4F4]">
                <div className=" border-1  flex items-center justify-between rounded-t-md border border-[#D9D9D9] px-4">
                  <div className="w-10 text-sm font-light "></div>
                  <div className="w-1/3 border-l border-r border-[#D9D9D9] pl-5 text-sm font-light">
                    <h2 className="py-3 text-[20px] font-normal leading-[23px] text-[#333333]">
                      Names
                    </h2>
                  </div>
                  <div className="w-3/4 pl-5 text-sm font-light">
                    <h2 className="py-3 text-[20px] font-normal leading-[23px] text-[#333333]">
                      Action
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
                              className="w-[80%] rounded-md border border-[#D9D9D9] py-1.5 px-2 capitalize "
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
                      <div className="w-3/4 pl-5">
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
                    </div>
                    <div
                      className={
                        (expandedIndex === index ? "flex flex-col" : "hidden") +
                        " h-full w-full bg-[#333333] p-5 transition-all duration-700 ease-in-out"
                      }
                    >
                      {cat?.subcategories.map((sub: any, index: number) => (
                        <ul key={`${sub?.id}-${index}`}>
                          <li className="ml-10 cursor-pointer py-1.5 capitalize text-[#fff]">
                            {sub?.name}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
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
    </>
  );
};

export default Category;

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
  const [editImg, setEditImg] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>();
  const [file, setFile] = useState<any>(null);
  const { data, isLoading } = useGetAllProducts();
  const [showOption, setShowOption] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [action, setAction] = useState("");
  const updateCatImg = useUpdateSingleCategory(selectedCategory?._id);
  const [loading, setLoading] = useState(false);
  console.log(data?.data, "all products");

  const handleChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    const name = e.target.name;
    // setImage1
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
      setFile(file);
      console.log(url, "url", file);
    }
    console.log(file, e.target.name);
  };

  const allCatProds = (arr: any) => {
    console.log(
      arr?.filter(
        (item: any) =>
          item?.information?.category?.name.toLowerCase() ===
          selectedCategory?.name.toLowerCase(),
      ),
      selectedCategory?.name,
    );
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
          console.log(res, "res upd img");
          toast.success(
            `${selectedCategory?.name} featured image updated successfully!`,
          );
          setFile(null);
          refetch();
          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err, "err upd img");
          toast.error(
            `Error updating ${selectedCategory?.name} featured image`,
          );
          setLoading(false);
        });
    }
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
                      className="rounded bg-green-700 p-2 px-4 text-sm capitalize text-white"
                      key={index}
                    >
                      {sub?.name}
                    </span>
                  ),
                )}
                {selectedCategory?.subcategories?.length < 1 && (
                  <p>No Subcategories available</p>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => {
                  setModalMsg(
                    `Are you sure you want to delete ${selectedCategory?.name} category? Once it is deleted all products and subcategories under this category will be deleted too.`,
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
                className="rounded bg-red-600 px-5 py-2 text-white"
              >
                Disable Category
              </button>
            </div>
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
        />
      )}
    </>
  );
};

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
          console.log(res, "deleted");
          toast.success("Category Deleted Successfully!!!");
          setLoading(false);
          setShowOption(false);
          closeInfo(false);
          refetch();
        })
        .catch((err: any) => {
          console.log(err, "deleted");
          toast.error("Error deleting category, try again!!!");
          setLoading(false);
          setShowOption(false);
        });
      return;
    }

    if (action.toLowerCase() === "disable") {
      console.log(id, "Category id to be disabled");
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
          <p className="text-neutral-500">{message}</p>
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
