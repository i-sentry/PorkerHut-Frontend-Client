import React, { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { useCategoryModal } from "../../store/overlay";
import { useLocation, useNavigate } from "react-router-dom";

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
  const [editIndex, setEditIndex] = useState(-1);
  const [, setCategoryName] = useState("");
  const setShowModal = useCategoryModal((state) => state.setShowModal);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialCateInfo = queryParams.get("cateInfo") === "false";

  const [cateInfo, setCateInfo] = useState(initialCateInfo);

  useEffect(() => {
    // Update the URL query parameter whenever the state changes
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("cateInfo", cateInfo.toString());
    navigate("?" + newSearchParams.toString(), { replace: true });
  }, [cateInfo, location.search, navigate]);

  const setSelectedCategoryId = useCategoryModal(
    (state) => state.setSelectedCategoryId
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
    setCategoryName(categories[index].name);
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
            <h1 className="text-[36px] leading-[42px] font-medium ">
              Manage Categories
            </h1>
            <span className="text-[#A2A2A2] font-normal text-[16px] leading-[19px] mt-3">
              Create categories for sold items.
            </span>
          </div>
          <div
            onClick={() => setCateInfo((prev) => !prev)}
            className={`${
              cateInfo
                ? "text-[#BB0101] border-[#BB0101]"
                : "border-[#197B30] text-[#197B30]"
            }  border  bg-[#fff] flex items-center gap-3  px-3 py-2.5 rounded-md shadow-md cursor-pointer`}
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
        {!cateInfo ? (
          <div className="mt-10">
            <div className="bg-[#F4F4F4] border-0 rounded-md">
              <div className=" px-4  flex justify-between rounded-t-md items-center border border-1 border-[#D9D9D9]">
                <div className="w-10 text-sm font-light "></div>
                <div className="w-1/3 text-sm font-light border-l border-r border-[#D9D9D9] pl-5">
                  <h2 className="text-[20px] leading-[23px] text-[#333333] font-normal py-3">
                    Names
                  </h2>
                </div>
                <div className="w-3/4 text-sm font-light pl-5">
                  <h2 className="text-[20px] leading-[23px] text-[#333333] font-normal py-3">
                    Action
                  </h2>
                </div>
              </div>
              {categories.map((cat, index) => (
                <div key={index} className="rounded-b-md">
                  <div className=" px-4  flex justify-between items-center border-t-0 border border-1 border-[#D9D9D9]">
                    <div className="w-10 text-md font-bold">
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
                    {/* <form > */}

                    <div className="w-1/3 border-l border-r border-[#D9D9D9] pl-5">
                      {editIndex === index ? (
                        <div className=" py-2 w-full">
                          <input
                            type="text"
                            className="py-1.5 border border-[#D9D9D9] rounded-md w-[80%] px-2 "
                            defaultValue={cat?.name}
                          />
                        </div>
                      ) : (
                        <div className=" py-[17px] w-full">
                          <p className="text-[16px] leading-[19px] font-normal">
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
                              className=" py-2 w-28  font-normal text-[14px] leading-[24px] bg-[#197B30] text-white rounded"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => handleCancel(index)}
                              className=" py-2 w-28 bg-[#fff] border border-[#F91919] text-[#F91919] rounded  font-normal text-[14px] leading-[24px]"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-start gap-3 ">
                            <button
                              onClick={() => handleEdit(index)}
                              className=" p-1  border border-[#D9D9D9] text-[#333333]  font-normal text-[16px] leading-[19px]  rounded-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleSubCat(cat?.id)}
                              className=" py-1 w-36  border border-[#D9D9D9] text-[#333333] rounded-sm  font-normal text-[16px] leading-[19px]"
                            >
                              Add subcategory
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                  <div
                    className={
                      (expandedIndex === index ? "flex flex-col" : "hidden") +
                      " transition-all duration-700 ease-in-out w-full h-full p-5 bg-[#333333]"
                    }
                  >
                    {cat?.subCategories.map((sub) => (
                      <ul key={sub?.id}>
                        <li className="text-[#fff] ml-10 py-1.5 cursor-pointer">
                          {sub?.name}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-[#F4F4F4] p-5 mt-10 rounded-sm shadow-sm">
              <h1 className="text-[24px] leading-[28px] font-medium text-[#333333]">
                Category Information
              </h1>
              <p className="text-[16px] leading-[19px] font-normal text-[#A2A2A2] mt-2">
                The form is required for product detailing and sellers are
                required fill the product form for approval.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-500 p-4 rounded-lg">
                <input
                  type="text"
                  className="w-full bg-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter text"
                />
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Cancel
                  </button>
                  <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Add
                  </button>
                </div>
              </div>
              <div className="bg-blue-500 p-4 rounded-lg">
                <input
                  type="text"
                  className="w-full bg-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter text"
                />
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onClick={handleAddBlueDiv}
                  >
                    Add
                  </button>
                </div>
              </div>
              {blueDivs.map((blueDiv) => (
                <div key={blueDiv.id} className="bg-blue-500 p-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full bg-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter text"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleCancelBlueDiv(blueDiv.id)}
                      className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddBlueDiv}
                      className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
