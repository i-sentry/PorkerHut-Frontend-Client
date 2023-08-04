import React, { useEffect, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { productData } from "../../utils/productData";
import { useParams } from "react-router-dom";
import { useImageOverlay } from "../../store/overlay";
import { useGetSingleProduct } from "../../services/hooks/Vendor/products";
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
  images: string[];
}
const ProductDetails = () => {
  const setShowOverlay = useImageOverlay((state) => state.setShowOverlays);
  const setImage = useImageOverlay((state) => state.setImage);
  const { id } = useParams();
  const singleProduct = useGetSingleProduct(id);
  const [images, setImages] = useState<string[]>([]);
  const [productdata, setProductData] = useState<IProd>();
  const [productDetails, setProductDetails] = useState<any>();
  const [productPricing, setProductPricing] = useState<any>();
  const [loading, setLoading] = useState(true);
console.log(singleProduct?.data?.data.__v);


  const info: { [key: string]: { required: boolean } } = {
    productName: { required: true },
    location: { required: false },

  };

const [selectedTab, setSelectedTab] = useTabs([
    "Information",
    "Details",
    "Pricing",
    "Images",
  ]);
  console.log(productdata);

  const productInformation = singleProduct?.data?.data?.information;
  const pricingInformation = singleProduct?.data?.data?.pricing;
  const isLoading = singleProduct?.isLoading;

  // useEffect(() => {
  //   // If the product data is available, update the productData state
  //   if (!isLoading && singleProduct?.data?.data) {
  //     setProductData(singleProduct.data.data);
  //     setProductDetails(singleProduct.data.data.details);
  //     setProductPricing(pricingInformation);
  //     setImages(singleProduct.data.data.images || []);
  //   }
  // }, [isLoading, singleProduct, pricingInformation]);

  useEffect(() => {
    // Fetch the single product data when the component mounts
    singleProduct.refetch(); // This will trigger a fresh API call
  }, [singleProduct.refetch]);


  // useEffect(() => {
  //   // If the product data is available, update the productData state
  //   if (!isLoading && singleProduct?.data?.data) {
  //     setProductData(singleProduct.data.data);
  //     setProductDetails(singleProduct.data.data.details);
  //     setProductPricing(pricingInformation);
  //     setImages(singleProduct.data.data.images || []);

  //     // Set loading to false when the data is available
  //     setLoading(false);
  //   }
  // }, [isLoading, singleProduct, pricingInformation]);

  useEffect(() => {
    // When the single product data is available, update the state
    if (!singleProduct.isLoading && singleProduct.data?.data) {
      setProductData(singleProduct.data.data);
      setProductDetails(singleProduct.data.data.details);
      setProductPricing(pricingInformation);
      setImages(singleProduct.data.data.images || []);

      // Set loading to false when the data is available
      setLoading(false);
    }
  }, [singleProduct.isLoading, singleProduct.data, pricingInformation]);



  function capitalizeFirstLetter(str: string): string {
    return str
      .replace(/([A-Z])/g, ' $1') // Add space before each capital letter
      .replace(/^./, (match) => match.toUpperCase()); // Capitalize the first letter
  }
  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }




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
          className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 ${selectedTab === "Information"
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
          className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 ${selectedTab === "Details"
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
          className={` cursor-pointer relative bg-transparent  font-light text-sm p-1.5 transition-all duration-300 ${selectedTab === "Pricing"
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
          className={` cursor-pointer relative bg-transparent  text-sm  p-1.5 transition-all duration-300 ${selectedTab === "Images"
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

              {loading ? (<span>Loading...</span>) : productInformation && (
                <div>
                  {Object.entries(productInformation)
                    .filter(([key]) => key !== '_id' && key !== 'categoryQuestions')
                    .map(([key, value]) => (
                      <div className="my-2 w-full " key={key}>
                        <label
                          htmlFor={key}
                          className={`block text-sm mb-[6px] text-HeadingColor ${
                            // Add the condition directly using value (not info)
                            info[key]?.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : "after:content-['*'] after:ml-0.5 after:text-red-500"
                            }`}
                        >
                          {capitalizeFirstLetter(key)}
                        </label>
                        <input
                          id={key}
                          type="text"
                          name={key}
                          defaultValue={value as string} // Type assertion to fix TypeScript error
                          className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-[#8f8e8e] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm disabled:bg-white`}
                          disabled
                        />
                      </div>
                    ))}
                </div>
              )}

            </div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Details"}>
          {" "}
          <div>
            <h1 className="pb-5 text-lg">More Product Details</h1>
            <div>
              {isLoading ? (<span>Loading...</span>) : productDetails && (
                <div>
                  {Object.entries(productDetails)
                    .filter(([key]) => key !== '_id' && key !== 'categoryQuestions' && key !== "productDescription")
                    .map(([key, value]) => (
                      <div className="my-2 w-full " key={key}>
                        <label
                          htmlFor={key}
                          className={`block text-sm mb-[6px] text-HeadingColor ${
                            // Add the condition directly using value (not info)
                            info[key]?.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : "after:content-['*'] after:ml-0.5 after:text-red-500"
                            }`}
                        >
                          {capitalizeFirstLetter(key)}
                        </label>
                        <input
                          id={key}
                          type="text"
                          name={key}
                          defaultValue={value as string} // Type assertion to fix TypeScript error
                          className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-[#8f8e8e] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm disabled:bg-white`}
                          disabled
                        />
                      </div>
                    ))}
                </div>
              )}

              <div>

                {isLoading ? (<span>Loading... </span>) : productDetails && (
                  <div>
                    {Object.entries(productDetails)
                      .filter(([key]) => key !== '_id' && key !== 'categoryQuestions' && key !== "productWeight" && key !== "productContent" && key !== "deliveryDetails" && key !== "cookingMethod")
                      .map(([key, value]) => (

                        <div>
                          <label
                            className={`block text-sm mb-[6px] text-HeadingColorafter:content-['*'] after:ml-0.5 after:text-red-500"
                `}
                            htmlFor=""
                          >
                            {capitalizeFirstLetter(key)}
                          </label>
                          <textarea
                            name={key}
                            id={key}
                            // type="text"
                            disabled
                            defaultValue={value as string}
                            rows={6}
                            className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-[#8f8e8e] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm disabled:bg-white`}
                          ></textarea>
                        </div>

                      ))}
                  </div>
                )}

                <span className="text-[#797979] text-[12px] leading-none">
                  The product description should give the customer useful
                  information about the product to ensure a purchase.
                </span>


              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Pricing"}>
          {" "}
          <div>
            <h1 className="pb-5 text-lg">Product Pricing</h1>
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
                            Product Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {productPricing && (
                          <tr>
                            <td className="p-2 whitespace-nowrap border-r">
                              <div className="text-sm text-gray-900 border p-2 rounded-md">
                                {singleProduct?.data?.data.__v}
                              </div>
                            </td>
                            <td className="p-2 border-r whitespace-nowrap">
                              <div className="text-sm border p-2 rounded-md text-gray-900">
                                {formatDate(productPricing.saleStartDate)}
                              </div>
                            </td>
                            <td className="p-2 border-r whitespace-nowrap">
                              <div className="text-sm border p-2 rounded-md text-gray-900">
                                {formatDate(productPricing.saleEndDate)}
                              </div>
                            </td>
                            <td className="p-2 border-r whitespace-nowrap">
                              <div className="text-sm border p-2 rounded-md text-gray-900">
                                {productPricing.productPrice}
                              </div>
                            </td>
                            <td className="p-2 border-r whitespace-nowrap">
                              <div className="text-sm border p-2 rounded-md text-gray-900">
                                {productPricing.quantity}
                              </div>
                            </td>

                          </tr>
                        )}
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
            {/* <div className="flex flex-wrap">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/4 p-2"
                  onClick={() => setShowOverlay(true)}
                >
                  {images ? (
                    <img
                      src={images[0]}
                      alt={` ${images}`}
                      className="h-64 w-full object-cover cursor-pointer"
                      onClick={() => setImage(images[0])}
                    />
                  ) : (
                    <div className="bg-[#D9D9D9] h-64 flex items-center justify-center cursor-pointer">
                      <span>Not Available</span>
                    </div>
                  )}
                </div>
              ))}
            </div> */}

            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <div className="flex flex-wrap">
                {images && images.length > 0 ? (
                  images.map((image, index) => (
                    <div key={index} className="w-1/4 p-2" onClick={() => setShowOverlay(true)}>
                      {image ? (
                        <img
                          src={image}
                          alt={image}
                          className="h-64 w-full object-cover cursor-pointer"
                          onClick={() => setImage(image)}
                        />
                      ) : (
                        <div className="bg-[#D9D9D9] h-64 flex items-center justify-center cursor-pointer">
                          <span>Not Available</span>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div>No images available</div>
                )}
              </div>
            )}
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
