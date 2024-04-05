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
import logo from "../../assets/images/porkerlogo.png";

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

  const handleUpdateProductImage = () => {};
  const productsVendor = vendorProducts?.data;

  console.log(productsVendor, "venddhdhdhd");

  return (
    <>
      {isLoading && (
        <div className="flex h-screen flex-col items-center justify-center">
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
      )}

      {productsVendor && (
        <div className="hide-scroll-bar w-full overflow-x-auto">
          <table className="w-[1000px] border-collapse">
            <thead>
              <tr>
                <td className="w-[200px] rounded-tl-md border bg-neutral-200 px-5 py-2 text-left">
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
                <td className="border bg-neutral-200 px-5 py-2 text-left">
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
                <td className="whitespace-nowrap border bg-neutral-200 px-5 py-2 text-left">
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
                <td className="whitespace-nowrap border bg-neutral-200 px-5 py-2 text-left">
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
                <td className="rounded-tr-md border bg-neutral-200 px-5 py-2 text-left">
                  <div className="flex w-full justify-end">
                    <button className="rounded-md border border-red-500 py-2 px-5 font-medium text-red-500">
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateProductImage}
                      className="ml-3 rounded-md bg-[#197b30] py-2 px-8 font-medium text-white"
                    >
                      Save
                    </button>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {productsVendor?.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="border p-5 align-top capitalize">
                    {item?.information?.productName}
                  </td>
                  <td className="whitespace-nowrap border p-5 align-top">
                    {moment(item?.createdAt).format("DD MMM YYYY")}
                  </td>
                  <td className="cursor-pointer border p-5 text-left align-top">
                    <Tooltip message={item?._id}>
                      {item?._id.slice(0, 7)}...
                    </Tooltip>
                  </td>
                  <td className="grid grid-cols-2 gap-3 border p-5 align-top">
                    {item?.images?.map((img: any, index: number) => (
                      <div
                        className={`relative  ${
                          item.images.length === 4
                            ? "h-[80px] w-full"
                            : "h-[80px] w-[100%]"
                        } overflow-hidden`}
                        key={index}
                      >
                        <img
                          src={img}
                          alt="product-pic"
                          className="h-full w-full object-cover"
                          style={{ objectFit: "cover" }}
                        />
                        <span
                          onClick={() => handleRemoveImage(item._id)}
                          className="absolute top-2 right-2 inline-flex cursor-pointer items-center justify-center bg-[#197b30] p-[2px]"
                        >
                          <LuTrash size={10} className="text-white" />
                        </span>
                      </div>
                    ))}

                    {img[item._id] && (
                      <div
                        className={`relative ${
                          item.images.length === 4
                            ? "h-[80px] w-full"
                            : "h-[80px] w-[100%]"
                        } overflow-hidden`}
                      >
                        <img
                          src={img[item._id]}
                          alt="product-pic"
                          className="h-full w-full object-cover"
                          style={{ objectFit: "cover" }}
                        />
                        <span
                          onClick={() => handleRemoveImage(item._id)}
                          className="absolute top-2 right-2 inline-flex cursor-pointer items-center justify-center bg-[#197b30] p-[2px]"
                        >
                          <LuTrash size={10} className="text-white" />
                        </span>
                      </div>
                    )}
                  </td>

                  <td className="border p-5 align-top ">
                    <div className="flex h-full items-center justify-center">
                      <div className="relative flex h-[170px] w-full items-center justify-center border-2 border-dashed border-gray-200 hover:border-[#197B30]">
                        {imgMap[item._id] ? (
                          <div className="relative h-full w-full">
                            <img
                              src={imgMap[item._id]}
                              alt="productImage"
                              className="h-full w-full object-cover"
                            />
                            <span
                              className="absolute top-2 right-2 cursor-pointer rounded-md border border-[#a10] bg-[#fff] py-2 px-4 text-[#a10] transition-all ease-in-out hover:bg-[#a10] hover:text-[#fff]"
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
                              className="absolute top-2 left-2 cursor-pointer rounded-md border border-[#197b30] bg-[#fff] py-2 px-4 font-medium text-[#197b30] transition-all ease-in-out hover:bg-[#197b30] hover:text-[#fff]"
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
                              className="flex h-full text-right text-sm"
                            >
                              <span className="my-auto cursor-pointer rounded-md border border-[#197B30] py-2 px-8 text-[14px] leading-[24px] text-[#197B30] duration-300 ease-in-out active:scale-90">
                                Browse
                              </span>
                            </label>
                            <input
                              type="file"
                              name={`file-${item._id}`}
                              id={`file-${item._id}`}
                              onChange={(e) => handleImage(e, item._id)}
                              className="hidden appearance-none text-sm outline-none"
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
          <div className="rounded-lg bg-white p-8">
            <p>Are you sure you want to remove this image?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-4 rounded bg-red-500 px-4 py-2 text-white"
                onClick={confirmRemoveImage}
              >
                Yes
              </button>
              <button
                className="rounded bg-gray-300 px-4 py-2 text-gray-800"
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
