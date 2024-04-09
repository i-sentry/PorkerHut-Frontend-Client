import React, { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { useCategoryModal } from "../../store/overlay";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";
import { all } from "axios";
import ManageCategories from "./ManageCategories";
import logo from "../../assets/images/porkerlogo.png";

interface BlueDiv {
  id: number;
}
export const categories = [
  {
    id: "1",
    name: "Pork",
    subCategories: [
      {
        id: "1",
        name: "Head",
      },
      {
        id: "2",
        name: "Intestine",
      },
      {
        id: "3",
        name: "Lap",
      },
      {
        id: "4",
        name: "Spare Ribs",
      },
      {
        id: "5",
        name: "Other Body Parts",
      },
    ],
  },
  {
    id: "2",
    name: "Livestock",
    subCategories: [
      {
        id: "1",
        name: "Duroc",
      },
      {
        id: "2",
        name: "Landrace",
      },
      {
        id: "3",
        name: "Large White",
      },
      {
        id: "4",
        name: "Hampshire",
      },
    ],
  },
  {
    id: "3",
    name: "Animal Feed",
    subCategories: [
      {
        id: "1",
        name: "Creep Feed",
      },
      {
        id: "2",
        name: "Weaner Feed",
      },
      {
        id: "3",
        name: "Growers Feed",
      },
      {
        id: "4",
        name: "Sow Feed",
      },
      {
        id: "5",
        name: "Lactating Feed",
      },
      {
        id: "6",
        name: "Finisher Feed",
      },
    ],
  },
];
const Category = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [category, setCategory] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [, setCategoryName] = useState("");
  const setShowModal = useCategoryModal((state) => state.setShowModal);
  const location = useLocation();
  const navigate = useNavigate();
  const { data: allcat, isLoading } = useGetAllCategories();
  console.log(allcat?.data, isLoading, "all cats", category);

  const queryParams = new URLSearchParams(location.search);
  const initialCateInfo = queryParams.get("cateInfo");

  console.log(queryParams.get("cateInfo"), "params", initialCateInfo);

  const [cateInfo, setCateInfo] = useState(false);

  useEffect(() => {
    !isLoading ? setCategory(allcat?.data) : setCategory([]);
  }, [allcat?.data]);

  useEffect(() => {
    // Update the URL query parameter whenever the state changes
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("cateInfo", cateInfo.toString());
    navigate("?" + newSearchParams.toString(), { replace: true });
  }, [location.search, navigate, cateInfo]);

  const setSelectedCategoryId = useCategoryModal(
    (state) => state.setSelectedCategoryId,
  );
  const [blueDivs, setBlueDivs] = useState<BlueDiv[]>([]);
  const handleAddBlueDiv = () => {
    const newBlueDiv: BlueDiv = {
      id: blueDivs.length + 1,
    };
    setBlueDivs([...blueDivs, newBlueDiv]);
  };

  const handleCancelBlueDiv = (id: number) => {
    const updatedBlueDivs = blueDivs.filter((blueDiv) => blueDiv.id !== id);
    setBlueDivs(updatedBlueDivs);
  };

  // const validationSchema = Yup.object().shape({});

  const handleToggle = (index: React.SetStateAction<number>) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleEdit = (index: any) => {
    setEditIndex(index);
    setCategoryName(categories[index]?.name);
  };

  // const handleSave = (index: any) => {
  //   // Perform save/update logic here
  //   console.log("Saved category:", categoryName);
  //   setEditIndex(-1);
  // };

  const handleSubCat = (index: any) => {
    setShowModal(true);
    setSelectedCategoryId(index);
  };

  const handleCancel = (index: any) => {
    setEditIndex(-1);
  };

  return (
    <>
      <div className="pl-10 pr-5 pt-5">
        <div className="flex items-center justify-between">
          <div className="mt-5">
            <h1 className="text-2xl font-bold text-[#333333]">
              Manage Categories
            </h1>
            <span className="mt-3 text-[16px] font-normal leading-[19px] text-[#A2A2A2]">
              Create categories for sold items.
            </span>
          </div>
          <div
            onClick={() => setCateInfo((prev) => !prev)}
            className={`${
              cateInfo
                ? "border-[#BB0101] text-[#BB0101]"
                : "border-[#197B30] text-[#197B30]"
            }  flex  cursor-pointer items-center gap-3 rounded-md  border bg-[#fff] px-3 py-2.5 shadow-md`}
          >
            {cateInfo ? (
              <span className="px-10">Cancel</span>
            ) : (
              <>
                <IoMdAdd size={20} />
                <span>Add Category</span>
              </>
            )}
          </div>
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

        {!cateInfo && (
          <div className="mt-10">
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
                  <div key={index} className="rounded-b-md">
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
                              className="w-[80%] rounded-md border border-[#D9D9D9] py-1.5 px-2 capitalize "
                              defaultValue={cat?.name}
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
                                type="submit"
                                className=" w-28 rounded  bg-[#197B30] py-2 text-[14px] font-normal leading-[24px] text-white"
                              >
                                Save
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
                                onClick={() => handleEdit(index)}
                                className=" rounded-sm  border border-[#D9D9D9] p-1  text-[16px] font-normal leading-[19px]  text-[#333333]"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleSubCat(cat?.id)}
                                className=" w-36 rounded-sm  border border-[#D9D9D9] py-1 text-[16px]  font-normal leading-[19px] text-[#333333]"
                              >
                                Add subcategory
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
                      {cat?.subcategories.map((sub: any) => (
                        <ul key={sub?.id}>
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

        <>{cateInfo && <ManageCategories />}</>
      </div>
    </>
  );
};

export default Category;
