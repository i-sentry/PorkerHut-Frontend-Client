import React, { useEffect, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { productData } from "../../utils/productData";
import { useParams } from "react-router-dom";
import { useImageOverlay } from "../../store/overlay";
interface IProd {
  id: string;
  title: string;
  type: string;
  category: string;
  price: string;
  product: {
    location: string;
    name: string;
    weight: string;
    productName: string;
  };
  img: string;
  status: string;
  desc: string;
}
const ProductDetails = () => {
  const setShowOverlay = useImageOverlay((state) => state.setShowOverlays);
  const setImage = useImageOverlay((state) => state.setImage);
  const { id } = useParams();
  const [images, setImages] = useState("");
  const [productdata, setProductData] = useState<IProd>();
  const [selectedTab, setSelectedTab] = useTabs([
    "Information",
    "Details",
    "Pricing",
    "Images",
  ]);
  console.log(productdata);

  useEffect(() => {
    const filteredProduct = productData.find((prod: any) => prod.id === id);
    //@ts-ignore
    setProductData(filteredProduct);
  }, [id]);

  useEffect(() => {
    //@ts-ignore
    setImages(productdata?.img);
  }, [productdata]);
  const prodInfo = [
    {
      id: "1",
      title: "Product Name",
      defaultValue: productdata?.product?.productName,
      hint: "Name of the product. For better listing, the name should match actual product.",
      type: "text",
      required: true,
    },
    {
      id: "2",
      title: "Product Breed",
      defaultValue: productdata?.category,
      hint: "Breed of the product.",
      type: "text",
      required: true,
    },
    {
      id: "3",
      title: "Type of Meat",
      defaultValue: productdata?.type,
      hint: "Please the type of meat. Example: Drumsticks, Thighs, Breast and tenderloin, Ham, Pork Belly, Pork Rib Roast",
      type: "text",
      required: true,
    },
  ];
  const detailsInfo = [
    {
      id: "1",
      title: "Product Weight",
      defaultValue: productdata?.product?.weight,
      hint: "Please fill in the product weight.",
      type: "text",
      required: true,
    },
    {
      id: "2",
      title: "Product Content",
      defaultValue: productdata?.product?.weight,
      hint: "The product content should give the customer an overview of what they ordered.",
      type: "text",
      required: true,
    },
    {
      id: "3",
      title: "Cooking Method",
      defaultValue: productdata?.status,
      hint: "Give a brief details on how its being Cooked. Example: Fried, Roasting, Boiling, Grilling.",
      type: "text",
      required: true,
    },
    {
      id: "4",
      title: "Delivery Details",
      defaultValue: productdata?.product?.location,
      hint: "Please fill in where this product can be delivered to.",
      type: "text",
      required: true,
    },
  ];
  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5">
        <div className="">
          <h1 className="text-2xl font-medium ">Product Created</h1>
          <span className="text-[#A2A2A2] font-normal text-sm">
            Find all created product here for approval.
          </span>
        </div>
      </div>
      <nav className=" border-b-2 border-[#E8E9EB] flex py-3 bg-[#F4F4F4] space-x-4 rounded-t-md pl-4">
        <TabSelector
          className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 ${
            selectedTab === "Information"
              ? " block border border-[#197B30] font-normal rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Information"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Information");
            }, 200);
          }}
        >
          Product Information
        </TabSelector>

        <TabSelector
          className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 ${
            selectedTab === "Details"
              ? "block border border-[#197B30] font-normal rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Details"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Details");
            }, 200);
          }}
        >
          More Product Details
        </TabSelector>
        <TabSelector
          className={` cursor-pointer relative bg-transparent  font-light text-sm p-1.5 transition-all duration-300 ${
            selectedTab === "Pricing"
              ? "block border border-[#197B30] font-normal  rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Pricing"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Pricing");
            }, 200);
          }}
        >
          Product Pricing
        </TabSelector>
        <TabSelector
          className={` cursor-pointer relative bg-transparent  text-sm  p-1.5 transition-all duration-300 ${
            selectedTab === "Images"
              ? "block border border-[#197B30] font-normal rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Images"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Images");
            }, 200);
          }}
        >
          Images
        </TabSelector>
      </nav>
      <div className=" py-4 px-8  bg-[#F4F4F4]">
        <TabPanel hidden={selectedTab !== "Information"}>
          {" "}
          <div>
            <h1 className="pb-5 text-lg">Product Information</h1>
            <div>
              {prodInfo.map((info: any) => (
                <div className="my-2 w-full " key={info.id}>
                  <label
                    htmlFor={info.title}
                    className={`block text-sm mb-[6px] text-HeadingColor ${
                      info.required &&
                      "after:content-['*'] after:ml-0.5 after:text-red-500"
                    } }`}
                  >
                    {info.title}
                  </label>
                  <input
                    id={info.title}
                    type={info.type}
                    name={info.title}
                    // onChange={handleChange}
                    defaultValue={info.defaultValue}
                    className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-[#8f8e8e] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm disabled:bg-white`}
                    disabled
                  />
                  <span className="text-[#797979] text-[12px] leading-none">
                    {info.hint}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Details"}>
          {" "}
          <div>
            <h1 className="pb-5 text-lg">More Product Details</h1>
            <div>
              {detailsInfo.map((info: any) => (
                <div className="my-2 w-full " key={info.id}>
                  <label
                    htmlFor={info.title}
                    className={`block text-sm mb-[6px] text-HeadingColor ${
                      info.required &&
                      "after:content-['*'] after:ml-0.5 after:text-red-500"
                    } }`}
                  >
                    {info.title}
                  </label>
                  <input
                    id={info.title}
                    type={info.type}
                    name={info.title}
                    // onChange={handleChange}
                    defaultValue={info.defaultValue}
                    className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-[#8f8e8e] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm disabled:bg-white`}
                    disabled
                  />
                  <span className="text-[#797979] text-[12px] leading-none">
                    {info.hint}
                  </span>
                </div>
              ))}
              <label
                className={`block text-sm mb-[6px] text-HeadingColor
                  "after:content-['*'] after:ml-0.5 after:text-red-500"
                `}
                htmlFor=""
              >
                Product Description
              </label>
              <textarea
                name=""
                id=""
                disabled
                defaultValue={productdata?.desc}
                rows={6}
                className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-[#8f8e8e] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm disabled:bg-white`}
              ></textarea>
              <span className="text-[#797979] text-[12px] leading-none">
                The product description should give the customer useful
                information about the product to ensure a purchase.
              </span>
            </div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Pricing"}>
          {" "}
          <div>
            <h1 className="pb-5 text-lg">Product Information</h1>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#333333]">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff]  tracking-wider"
                          >
                            Product Id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff]  tracking-wider"
                          >
                            Sales Start Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff]  tracking-wider"
                          >
                            Sales End Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff]  tracking-wider"
                          >
                            Product Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff]  tracking-wider"
                          >
                            Product Quality
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="p-2 whitespace-nowrap border-r">
                            <div className="text-sm text-gray-900 border p-2 rounded-md">
                              001
                            </div>
                          </td>
                          <td className="p-2 border-r whitespace-nowrap">
                            <div className="text-sm border p-2 rounded-md text-gray-900">
                              2023-05-01
                            </div>
                          </td>
                          <td className="p-2 border-r whitespace-nowrap">
                            <div className="text-sm border p-2 rounded-md text-gray-900">
                              2023-05-31
                            </div>
                          </td>
                          <td className="p-2 border-r whitespace-nowrap">
                            <div className="text-sm border p-2 rounded-md text-gray-900">
                              $19.99
                            </div>
                          </td>
                          <td className="p-2 border-r whitespace-nowrap">
                            <div className="text-sm border p-2 rounded-md text-gray-900">
                              High
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Images"}>
          <div>
            <div className="pb-5 ">
              <h1 className="text-lg">Images</h1>
              <p className="text-sm text-[#797979]">
                Images need to be at least 800 x 800 pixel with a maximum of
                3000 x 3000 pixel.
              </p>
            </div>
            <div className="flex flex-wrap">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/4 p-2"
                  onClick={() => setShowOverlay(true)}
                >
                  {images ? (
                    <img
                      src={images}
                      alt={` ${images}`}
                      className="h-64 w-full object-cover cursor-pointer"
                      onClick={() => setImage(images)}
                    />
                  ) : (
                    <div className="bg-[#D9D9D9] h-64 flex items-center justify-center cursor-pointer">
                      <span>Not Available</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </div>
      <div className="flex justify-end p-5">
        <button className="mr-2 px-6 py-2 bg-[#fff] border border-[#f91919] text-[#f91919] rounded text-sm font-light hover:bg-[#f91919] hover:text-[#fff]">
          Reject
        </button>
        <button className="px-6 py-2 text-sm font-light bg-[#197B30] text-white rounded">
          Approve
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
