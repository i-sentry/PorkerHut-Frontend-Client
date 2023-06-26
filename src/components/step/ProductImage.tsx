import React, { useContext } from "react";
import CreateProductImage from "./CreateProductImage";
import StepperControl from "./StepperControl";
import { productStepsContext } from "../../context/StepperContext";

const ProductImage = () => {
  const {
    checkoutSteps,
    currentStep,
    handleClick,
    productData,
    setProductData,
    handleChange,
  } = useContext(productStepsContext);

  const handleImageUpload = (imageData: any) => {
    // Send the image data to the endpoint using fetch or an HTTP library of your choice
    fetch("your-endpoint-url", {
      method: "POST",
      body: imageData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the endpoint
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  console.log(currentStep, "currentStep");

  return (
    <>
      <div className=" lg:p-8 p-5  bg-[#F4F4F4] rounded-md">
        <div className=" mb-8">
          <h1 className="sm:text-xl font-medium text-[#333333] text-[24px] leading-[28px] ">
            Product Images
          </h1>
          <p className="text-[#797979] text-[14px] leading-[24px] mt-3">
            Images need to be at least 800 x 800 pixel with a maximum of 3000 x
            3000 pixel.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <CreateProductImage onImageUpload={handleImageUpload} />
          <CreateProductImage onImageUpload={handleImageUpload} />
          <CreateProductImage onImageUpload={handleImageUpload} />
          <CreateProductImage onImageUpload={handleImageUpload} />
          <CreateProductImage onImageUpload={handleImageUpload} />
          <CreateProductImage onImageUpload={handleImageUpload} />
          <CreateProductImage onImageUpload={handleImageUpload} />
          <CreateProductImage onImageUpload={handleImageUpload} />
        </div>

        <div>
          {currentStep !== checkoutSteps.length - 1 && <StepperControl />}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
