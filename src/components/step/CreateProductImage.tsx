import React, { useState, ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";

interface CreateProductImageProps {
  onImageUpload: (imageData: FormData) => void;
}

const CreateProductImage: React.FC<CreateProductImageProps> = ({
  onImageUpload,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      onImageUpload(formData);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageUrl("");
  };

  return (
    <div>
      <div className="m-auto">
        <div className="h-52 w-full  lg:h-56 flex justify-center items-center md:h-56 border-gray-200 bg-white border-dashed border-2 relative">
          {imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt="uploaded image"
              className="w-full h-full"
              />
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                onClick={handleRemoveImage}
              >
                <FaTimes />
              </button>
            </>
          ) : (
            <>
              <label htmlFor="file" className="text-sm h-full flex text-right">
                <span className="cursor-pointer my-auto border border-[#197B30] text-[#197B30] py-2 px-8 text-[14px] leading-[24px] rounded-md active:scale-90 duration-300 ease-in-out">
                  Browse
                </span>
              </label>
              <input
                id="file"
                type="file"
                name="file"
                onChange={handleImage}
                className="hidden appearance-none outline-none text-sm"
              />
            </>
          )}
        </div>
        {/* {image && (
          <button
            onClick={handleUpload}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Upload
          </button>
        )} */}
      </div>
    </div>
  );
};

export default CreateProductImage;
