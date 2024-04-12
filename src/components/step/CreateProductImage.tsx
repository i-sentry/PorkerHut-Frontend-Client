import React, { useState, ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";

interface CreateProductImageProps {
  img: string;
  imageUrl: string;
  handleImage: (e: ChangeEvent<HTMLInputElement>, field: string) => void;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const CreateProductImage: React.FC<CreateProductImageProps> = ({
  img,
  handleImage,
  imageUrl,
  setImageUrl,
}) => {
  const [, setImage] = useState<File | null>(null);

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
    handleImage(e, img);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageUrl("");
    // setImg([], img)
  };

  

  return (
    <div>
      <div className="m-auto">
        <div className="relative flex  h-52 w-full items-center justify-center border-2 border-dashed border-gray-200 bg-white md:h-56 lg:h-56">
          {imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt="product"
                className="h-full w-full object-cover"
              />
              <button
                className="absolute top-2 right-2 rounded-full bg-white p-1 shadow"
                onClick={handleRemoveImage}
              >
                <FaTimes />
              </button>
            </>
          ) : (
            <>
              <label htmlFor="file" className="flex h-full text-right text-sm">
                <span className="my-auto cursor-pointer rounded-md border border-[#197B30] py-2 px-8 text-[14px] leading-[24px] text-[#197B30] duration-300 ease-in-out active:scale-90">
                  Browse
                </span>
              </label>
              <input
                id="file"
                type="file"
                name="file"
                onChange={(evt) => uploadImg(evt)}
                className="hidden appearance-none text-sm outline-none"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProductImage;
