/* eslint-disable @typescript-eslint/no-unused-vars */
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
  // const [imageUrl5, setImageUrl5] = useState<string>("");
  // const [imageUrl6, setImageUrl6] = useState<string>("");
  // const [imageUrl7, setImageUrl7] = useState<string>("");
  // const [imageUrl8, setImageUrl8] = useState<string>("");
  const { setImg } = useContext(ProductImagesContext);
  const { checkoutSteps, currentStep } = useContext(productStepsContext);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    const selectedFiles = Array.from(e.target.files || []);
    // console.log(selectedFiles, "kk");

    const updatedFiles: FileData[] = selectedFiles.map((file) => ({
      name: file.name,
      file: file,
    }));
    // console.log(updatedFiles, "updatedFiles");
    // console.log(field);
    setImg(field, updatedFiles);
  };

  // console.log(currentStep, "currentStep");

  return (
    <>
      <div className=" rounded-md bg-[#F4F4F4]  p-5 lg:p-8">
        <div className=" mb-8">
          <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
            Product Images
          </h1>
          <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
            Images need to be at least 800 x 800 pixel with a maximum of 3000 x
            3000 pixel.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 ">
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
          {/* <CreateProductImage
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
          /> */}
        </div>

        <div>
          {currentStep !== checkoutSteps.length - 1 && <StepperControl />}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
