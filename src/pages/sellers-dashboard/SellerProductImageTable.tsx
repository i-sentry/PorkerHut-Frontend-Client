import { useGetProductByVendor } from "../../services/hooks/Vendor/products";
import { LuTrash } from "react-icons/lu";
import moment from "moment";
import { Tooltip } from "../../components/utility/ToolTip";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";
// import ProductImageUpload from "../../components/vendors-component/ProductImageUpload";

const SellerProductImageTable = () => {
  const store = JSON.parse(localStorage.getItem("vendor") as string);
  const id = store.vendor._id;
  const { data: vendorProducts, isLoading } = useGetProductByVendor(id);

  const [img, setImg] = useState("");

  const handleImage = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  };

  const productsVendor = vendorProducts?.data;

  // const [vendorProducts, setVendorProducts] =
  console.log(productsVendor, "venddhdhdhd");

  return (
    <>
      {isLoading && <div>Loading....</div>}

      {productsVendor && (
        <div className="w-full overflow-x-auto hide-scroll-bar">
          <table className="border-collapse w-[1000px]">
            <thead>
              <tr>
                <td className="border px-5 text-left py-3 bg-neutral-200 rounded-tl-md w-[200px]">
                  <div className="inline-flex items-center gap-2">
                    <span>Name</span>
                    <div>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-3 bg-neutral-200">
                  <div className="inline-flex items-center gap-2">
                    <span>Created</span>
                    <div>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-3 bg-neutral-200 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <span>Product ID</span>
                    <div>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-3 bg-neutral-200 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <span>All Images</span>
                    <div>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowUp />
                      </span>
                      <span className="cursor-pointer hover:text-green-500">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td className="border px-5 text-left py-3 bg-neutral-200 rounded-tr-md">
                  <div className="w-full flex justify-end">
                    <button className="py-2 px-5 border border-red-500 text-red-500 font-medium rounded-md">
                      Cancel
                    </button>
                    <button className="py-2 px-5 ml-3 bg-green-600 text-white font-medium rounded-md">
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
                  <td className="border p-5 align-top cursor-pointer">
                    <Tooltip message={item?._id}>
                      {item?._id.slice(-7)}...
                    </Tooltip>
                  </td>
                  <td className="border p-5 grid grid-cols-2 gap-3 align-top">
                    {item?.images?.map((img: any, index: number) => (
                      <div className="h-[80px] w-full overflow-hidden relative">
                        <img
                          src={img}
                          alt="product-pic"
                          key={index}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute p-1 cursor-pointer top-2 right-2 bg-green-500 inline-flex justify-center items-center">
                          <LuTrash className="text-white" />
                        </span>
                      </div>
                    ))}
                  </td>
                  <td className="border p-5 align-top">
                    <div className="inline-flex justify-center items-center w-[180px] h-[150px] border-2 border-neutral-300 border-dashed ">
                      {img ? (
                        <div className="w-full h-full relative">
                          <img src={img} alt="" />
                          <span className="bg-neutral-700 p-2 absolute top-2 right-2">
                            <MdClose size={20} />
                          </span>
                        </div>
                      ) : (
                        <>
                          <label
                            htmlFor={`file-${item._id}`}
                            className="py-2 px-4 border border-green-500 text-green-500 font-medium rounded-md"
                          >
                            Browse
                          </label>
                          <input
                            type="file"
                            name={`file-${item._id}`}
                            id={`file-${item._id}`}
                            onChange={handleImage}
                            className="hidden appearance-none outline-none text-sm"
                          />
                        </>
                      )}
                    </div>
                    {/* <ProductImageUpload id={item._id} /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SellerProductImageTable;
