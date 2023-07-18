import React, { useContext, useState } from "react";
import CreateProductImage from "./CreateProductImage";
import StepperControl from "./StepperControl";
import { productStepsContext } from "../../context/StepperContext";
import { ProductImagesContext } from "../../context/ProductImagesContext";
import { FileData } from "../../context/FileContext";

const ProductImage = ({
  cate,
  subCate,
}: {
  cate: string | null;
  subCate: string | null;
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl1, setImageUrl1] = useState<string>("");
  const [imageUrl2, setImageUrl2] = useState<string>("");
  const [imageUrl3, setImageUrl3] = useState<string>("");
  const [imageUrl4, setImageUrl4] = useState<string>("");
  const [imageUrl5, setImageUrl5] = useState<string>("");
  const [imageUrl6, setImageUrl6] = useState<string>("");
  const [imageUrl7, setImageUrl7] = useState<string>("");
  const [imageUrl8, setImageUrl8] = useState<string>("");
  const { setImg, img1, img2, img3, img4, img5, img6, img7 } =
    useContext(ProductImagesContext);
  const {
    checkoutSteps,
    currentStep,
    handleClick,
    productData,
    setProductData,
    handleChange,
  } = useContext(productStepsContext);

  const handleImageUpload = (imageData: any) => {
    console.log(imageData, "jkl");
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

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const selectedFiles = Array.from(e.target.files || []);
    console.log(selectedFiles, "kk");
  

    const updatedFiles: FileData[] = selectedFiles.map((file) => ({
      name: file.name,
      file: file,
    }));
    console.log(updatedFiles, "updatedFiles");
    console.log(field);
    setImg(field, updatedFiles);

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
          <CreateProductImage
            img={"img1"}
            handleImage={handleImage}
            setImageUrl={setImageUrl1}
            imageUrl={imageUrl1}
          />
          <CreateProductImage
            img={"img2"}
            handleImage={handleImage}
            setImageUrl={setImageUrl2}
            imageUrl={imageUrl2}
          />
          <CreateProductImage
            img={"img3"}
            handleImage={handleImage}
            setImageUrl={setImageUrl3}
            imageUrl={imageUrl3}
          />
          <CreateProductImage
            img={"img4"}
            handleImage={handleImage}
            setImageUrl={setImageUrl4}
            imageUrl={imageUrl4}
          />
          <CreateProductImage
            img={"img5"}
            handleImage={handleImage}
            setImageUrl={setImageUrl5}
            imageUrl={imageUrl5}
          />
          <CreateProductImage
            img={"img6"}
            handleImage={handleImage}
            setImageUrl={setImageUrl6}
            imageUrl={imageUrl6}
          />
          <CreateProductImage
            img={"img7"}
            handleImage={handleImage}
            setImageUrl={setImageUrl7}
            imageUrl={imageUrl7}
          />
          <CreateProductImage
            img={"img8"}
            handleImage={handleImage}
            setImageUrl={setImageUrl8}
            imageUrl={imageUrl8}
          />
        </div>

        <div>
          {currentStep !== checkoutSteps.length - 1 && <StepperControl />}
        </div>
      </div>
    </>
  );
};

export default ProductImage;