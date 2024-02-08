import { useGetProductByVendor } from "../../services/hooks/Vendor/products";
import { LuTrash } from "react-icons/lu";
import moment from "moment";
import { Tooltip } from "../../components/utility/ToolTip";
import {
  MdAdd,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";


const SellerProductImageTable = () => {
  const store = JSON.parse(localStorage.getItem("vendor") as string);
  const id = store.vendor._id;
  const { data: vendorProducts, isLoading } = useGetProductByVendor(id);
 const [imgMap, setImgMap] = useState<{ [key: string]: string }>({});
  const [img, setImg] = useState<{ [key: string]: string }>({});
  const [imageToRemove, setImageToRemove] = useState<string | null>(null);

  const handleImage = (e: any, productId: string) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImgMap((prevImgMap) => ({
        ...prevImgMap,
        [productId]: imageUrl,
      }));
    }
  };

//   const handleImage = (e: any, productId: string) => {
//   const file = e.target.files && e.target.files[0];
//   if (file) {
//     const imageUrl = URL.createObjectURL(file);
//     setImgMap((prevImgMap) => ({
//       ...prevImgMap,
//       [productId]: [...(prevImgMap[productId] || []), imageUrl], // Append new image URL to existing array
//     }));
//   }
// };

 const handleAddImage = (productId: string) => {
  setImg(imgMap);
   // Trigger click event on file input to open file browser
   const fileInput = document.getElementById(`file-${productId}`);
   if (fileInput) {
     (fileInput as HTMLInputElement).click();
   }
 };

 const handleRemoveImage = (productId: string) => {
   setImageToRemove(productId);
 };

 const confirmRemoveImage = () => {
   if (imageToRemove) {

     setImg((prevImgMap) => {
       const updatedImgMap = { ...prevImgMap };
       delete updatedImgMap[imageToRemove];
       return updatedImgMap;
     });
     setImageToRemove(null);
   }
 };

 const cancelRemoveImage = () => {
   setImageToRemove(null);
 };
  const productsVendor = vendorProducts?.data;


  console.log(productsVendor, "venddhdhdhd");

  return (
    <>
      {isLoading && <div>Loading...</div>}

      {productsVendor && (
        <div className="w-full overflow-x-auto hide-scroll-bar">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <td className="border px-5 text-left py-2 bg-neutral-200 rounded-tl-md w-[200px]">
                  <div className="inline-flex items-center gap-2">
                    <span>Name</span>
                    <div>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-2 bg-neutral-200">
                  <div className="inline-flex items-center gap-2">
                    <span>Created</span>
                    <div>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-2 bg-neutral-200 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <span>Product ID</span>
                    <div>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-2 bg-neutral-200 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <span>All Images</span>
                    <div>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-[#197b30]">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-2 bg-neutral-200 rounded-tr-md">
                  <div className="w-full flex justify-end">
                    <button className="py-2 px-5 border border-red-500 text-red-500 font-medium rounded-md">
                      Cancel
                    </button>
                    <button className="py-2 px-8 ml-3 bg-[#197b30] text-white font-medium rounded-md">
                      Save
                    </button>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {productsVendor?.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="border p-5 capitalize align-top">
                    {item?.information?.productName}
                  </td>
                  <td className="border p-5 align-top">
                    {moment(item?.createdAt).format("DD MMM YYYY")}
                  </td>
                  <td className="border p-5 align-top cursor-pointer text-left">
                    <Tooltip message={item?._id}>
                      {item?._id.slice(-7)}...
                    </Tooltip>
                  </td>
                  <td className="border p-5 grid grid-cols-2 gap-3 align-top">
                    {item?.images?.map((img: any, index: number) => (
                      <div
                        className={`relative  ${
                          item.images.length === 4
                            ? "w-full h-[80px]"
                            : "w-[100%] h-[80px]"
                        } overflow-hidden`}
                        key={index}
                      >
                        <img
                          src={img}
                          alt="product-pic"
                          className="w-full h-full object-cover"
                          style={{ objectFit: "cover" }}
                        />
                        <span
                          onClick={() => handleRemoveImage(item._id)}
                          className="absolute p-[2px] cursor-pointer top-2 right-2 bg-[#197b30] inline-flex justify-center items-center"
                        >
                          <LuTrash size={10} className="text-white" />
                        </span>
                      </div>
                    ))}

                    {img[item._id] && (
                      <div
                        className={`relative ${
                          item.images.length === 4
                            ? "w-full h-[80px]"
                            : "w-[100%] h-[80px]"
                        } overflow-hidden`}
                      >
                        <img
                          src={img[item._id]}
                          alt="product-pic"
                          className="w-full h-full object-cover"
                          style={{ objectFit: "cover" }}
                        />
                        <span
                          onClick={() => handleRemoveImage(item._id)}
                          className="absolute p-[2px] cursor-pointer top-2 right-2 bg-[#197b30] inline-flex justify-center items-center"
                        >
                          <LuTrash size={10} className="text-white" />
                        </span>
                      </div>
                    )}
                  </td>

                  <td className="border p-5 align-top ">
                    <div className="flex justify-center items-center h-full">
                      <div className="flex justify-center items-center border-2 border-gray-200 border-dashed w-full md:h-[170px] relative hover:border-[#197B30]">
                        {imgMap[item._id] ? (
                          <div className="w-full h-full relative">
                            <img
                              src={imgMap[item._id]}
                              alt="productImage"
                              className="w-full h-full object-cover"
                            />
                            <span
                              className="bg-[#fff] py-2 px-4 rounded-md absolute top-2 right-2 cursor-pointer text-[#a10] border-[#a10] border hover:bg-[#a10] hover:text-[#fff] transition-all ease-in-out"
                              onClick={() =>
                                setImgMap((prevImgMap) => {
                                  const updatedImgMap = { ...prevImgMap };
                                  delete updatedImgMap[item._id];
                                  return updatedImgMap;
                                })
                              }
                            >
                              <Tooltip message={"Remove Image"}>
                                <MdClose size={20} />
                              </Tooltip>
                            </span>
                            <span
                              onClick={() => handleAddImage(item._id)}
                              className="py-2 px-4 border border-[#197b30] text-[#197b30] font-medium rounded-md cursor-pointer absolute top-2 left-2 bg-[#fff] hover:text-[#fff] hover:bg-[#197b30] transition-all ease-in-out"
                            >
                              <Tooltip message={"Add Image"}>
                                <MdAdd size={20} />
                              </Tooltip>
                            </span>
                          </div>
                        ) : (
                          <>
                            <label
                              htmlFor={`file-${item._id}`}
                              className="text-sm h-full flex text-right"
                            >
                              <span className="cursor-pointer my-auto border border-[#197B30] text-[#197B30] py-2 px-8 text-[14px] leading-[24px] rounded-md active:scale-90 duration-300 ease-in-out">
                                Browse
                              </span>
                            </label>
                            <input
                              type="file"
                              name={`file-${item._id}`}
                              id={`file-${item._id}`}
                              onChange={(e) => handleImage(e, item._id)}
                              className="hidden appearance-none outline-none text-sm"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {imageToRemove && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <p>Are you sure you want to remove this image?</p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded mr-4"
                onClick={confirmRemoveImage}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
                onClick={cancelRemoveImage}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerProductImageTable;
