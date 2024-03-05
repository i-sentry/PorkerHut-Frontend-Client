import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

type ProductImageUploadProps = {
  id: string;
};

const ProductImageUpload: React.FC<ProductImageUploadProps> = ({ id }) => {
  const [image, setImage] = useState<string>("");

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log(id, file, e.target.files, "jdhdhdhdhdh");

    if (file) {
      // setImage(file);
      // setImageUrl(URL.createObjectURL(file));
    }
    // handleImage(e, img);
  };

  return (
    <div className="h-[150px] w-[200px] flex justify-center items-center border-gray-200 bg-white border-dashed border-2 relative">
      {!true ? (
        <>
          <img src={"imageUrl"} alt="product" className="w-full h-full" />
          <button
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
            onClick={() => {}}
          >
            <FaTimes />
          </button>
        </>
      ) : (
        <>
          <label
            htmlFor={`file-${id}`}
            className="text-sm h-full flex text-right"
          >
            <span className="cursor-pointer my-auto border border-[#197B30] text-[#197B30] py-2 px-8 text-[14px] leading-[24px] rounded-md active:scale-90 duration-300 ease-in-out">
              Browse
            </span>
          </label>
          <input
            type="file"
            id={`file-${id}`}
            name={`file-${id}`}
            onChange={(evt) => uploadImg(evt)}
            className="hidden appearance-none outline-none text-sm"
          />
        </>
      )}
    </div>
  );
};

export default ProductImageUpload;
