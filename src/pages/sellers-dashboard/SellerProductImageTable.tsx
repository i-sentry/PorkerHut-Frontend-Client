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
import { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import logo from "../../assets/images/porkerlogo.png";
import { FaStoreSlash } from "react-icons/fa";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { chunkArray } from "../../helper/chunck";
import { BsSearch } from "react-icons/bs";

const SellerProductImageTable = (props: any) => {
  const store = JSON.parse(localStorage.getItem("vendor") as string);
  const id = store.vendor._id;
  const [productsVendor, setProductsVendor] = useState<any[]>([]);
  const { data: vendorProducts, isLoading } = useGetProductByVendor(id);
  const [searchVal, setSearchVal] = useState("");
  const [imgMap, setImgMap] = useState<{ [key: string]: string }>({});
  const [img, setImg] = useState<{ [key: string]: string }>({});
  const [imageToRemove, setImageToRemove] = useState<string | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const itemsPerPage = 4;
  const handleImage = (productId: string) => {
    props.toggleModal();
    // const file = e.target.files && e.target.files[0];
    // if (file) {
    //   const imageUrl = URL.createObjectURL(file);
    //   setImgMap((prevImgMap) => ({
    //     ...prevImgMap,
    //     [productId]: imageUrl,
    //   }));
    // }
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

  useEffect(() => {
    if (searchVal?.length) {
      const filtered = vendorProducts?.data?.filter((item: any) =>
        item?.information?.productName
          .toLowerCase()
          .includes(searchVal.toLowerCase()),
      );
      setProductsVendor(filtered);
    } else {
      setProductsVendor(
        vendorProducts?.data
          ?.slice()
          ?.sort(
            (a: any, b: any) =>
              new Date(b?.createdAt).getTime() -
              new Date(a?.createdAt).getTime(),
          ),
      );
    }
  }, [isLoading, searchVal]);

  console.log(
    vendorProducts?.data,
    "vevevevevev",
    vendorProducts?.data
      ?.slice()
      .sort(
        (a: any, b: any) =>
          new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime(),
      ),
    productsVendor,
  );

  return (
    <>
      <div className="mb-5 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
        <p className="mt-2 text-red-600 md:mt-0">
          <strong>Note:</strong> You can only update a product images at a time
        </p>
        <label
          htmlFor="search"
          className="relative inline-block w-full md:w-[350px]"
        >
          <input
            type="text"
            name="search"
            id="search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search name...."
            className="form-input w-full rounded-md bg-neutral-200 px-4 focus:border-green-500 focus:ring-green-500"
          />
          <BsSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
        </label>
      </div>
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

      {!isLoading && productsVendor?.length >= 1 && (
        <>
          <div className="hide-scroll-bar w-full overflow-x-auto">
            <table className="w-[1000px] border-collapse xl:w-full">
              <thead>
                <tr>
                  <td className="w-[200px] rounded-tl-md border bg-neutral-200 px-5 py-2 text-center">
                    <div className="inline-flex items-center gap-2">
                      <span>Name</span>
                    </div>
                  </td>
                  <td className="border bg-neutral-200 px-5 py-2 text-center">
                    <div className="inline-flex items-center gap-2">
                      <span>Created</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap border bg-neutral-200 px-5 py-2 text-center">
                    <div className="inline-flex items-center gap-2">
                      <span>Product ID</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap border bg-neutral-200 px-5 py-2 text-center">
                    <div className="inline-flex items-center gap-2">
                      <span>All Images</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap border bg-neutral-200 px-5 py-2 text-center">
                    <div className="inline-flex items-center gap-2">
                      <span>Actions</span>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {productsVendor?.map((item: any, index: number) => (
                  <tr key={index} className="hidden">
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
                              <span
                                onClick={() => handleImage(item._id)}
                                className="flex h-full text-right text-sm"
                              >
                                <span className="my-auto cursor-pointer rounded-md border border-[#197B30] py-2 px-8 text-[14px] leading-[24px] text-[#197B30] duration-300 ease-in-out active:scale-90">
                                  Add Image
                                </span>
                              </span>
                              {/* <input
                              type="file"
                              name={`file-${item._id}`}
                              id={`file-${item._id}`}
                              onChange={(e) => handleImage(e, item._id)}
                              className="hidden appearance-none text-sm outline-none"
                            /> */}
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

                {chunkArray(productsVendor, itemsPerPage)[
                  currentPageIndex - 1
                ]?.map((item: any, index: any) => {
                  return (
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
                                <span
                                  onClick={() => handleImage(item._id)}
                                  className="flex h-full text-right text-sm"
                                >
                                  <span className="my-auto cursor-pointer rounded-md border border-[#197B30] py-2 px-8 text-[14px] leading-[24px] text-[#197B30] duration-300 ease-in-out active:scale-90">
                                    Add Image
                                  </span>
                                </span>
                                {/* <input
                              type="file"
                              name={`file-${item._id}`}
                              id={`file-${item._id}`}
                              onChange={(e) => handleImage(e, item._id)}
                              className="hidden appearance-none text-sm outline-none"
                            /> */}
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mx-auto mt-10 flex w-full items-center justify-center gap-1 bg-white px-4 py-3 sm:px-6">
              <button
                onClick={() =>
                  currentPageIndex !== 1
                    ? setCurrentPageIndex(currentPageIndex - 1)
                    : null
                }
                className={
                  (currentPageIndex === 1 ? "no-item" : "") +
                  " rounded-l-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white "
                }
              >
                <RxCaretLeft size={22} />
              </button>
              <div className="pagination flex items-center gap-1">
                {chunkArray(productsVendor, itemsPerPage).map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentPageIndex(index + 1)}
                      className={` border   border-[#A2A2A2]  ${
                        currentPageIndex === index + 1
                          ? "active-page-index    rounded-lg border-[#197B30] bg-[#3b554115] text-[#197B30]"
                          : "rounded-lg border-[#A2A2A2]  text-[#A2A2A2] hover:bg-slate-100"
                      }`}
                    >
                      <span className="px-1.5 text-sm">{index + 1}</span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() =>
                  currentPageIndex !==
                  chunkArray(productsVendor, itemsPerPage).length
                    ? setCurrentPageIndex(currentPageIndex + 1)
                    : null
                }
                className={
                  (currentPageIndex ===
                  chunkArray(productsVendor, itemsPerPage).length
                    ? "no-items"
                    : "") +
                  " rounded-r-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white"
                }
              >
                <span className="">
                  <RxCaretRight size={22} />
                </span>
              </button>
            </div>
          </div>
        </>
      )}

      {!isLoading && productsVendor?.length < 1 && (
        <div className="flex items-center justify-center bg-neutral-100 py-10 px-4 text-neutral-500">
          <FaStoreSlash size={32} className="mb-1" />
          No products yet...
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
type OnCloseFunction = () => void;

interface ModalProps {
  isOpen: boolean;
  onClose: OnCloseFunction;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    //@ts-ignore
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleAddToTable = () => {
    // Logic to add the selected image to the table
    // You can pass the selectedImage state to the parent component or perform the necessary actions here
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="w-[80%] max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Add Image</h2>
          <button
            onClick={onClose}
            className="p-4 text-gray-500 transition-colors duration-200 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 11.586l3.293 3.293a1 1 0 11-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 11-1.414-1.414L8.586 12l-3.293-3.293a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4 flex justify-center">
          {selectedImage ? (
            <div className="relative w-full">
              <img
                src={selectedImage}
                alt="Selected"
                className="h-auto max-h-[500px] w-full"
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={handleRemoveImage}
                  className="rounded-full bg-red-500 p-1 text-white transition-colors duration-200 hover:bg-red-600"
                >
                  <CiCircleRemove />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center border border-dashed border-gray-300">
              <label
                htmlFor="image-upload"
                className="cursor-pointer text-sm text-gray-500"
              >
                Click to browse or drag and drop an image here
              </label>
              <input
                type="file"
                id="image-upload"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <button
            disabled={!selectedImage}
            onClick={handleAddToTable}
            className="rounded-md bg-[#197B30] py-2 px-4 text-white transition-colors duration-200 hover:bg-green-600 disabled:bg-slate-600"
          >
            Add to Table
          </button>
        </div>
      </div>
    </div>
  );
};
