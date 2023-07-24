import React, { useState, ChangeEvent, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ProductImagesContext } from "../../context/ProductImagesContext";
import { FileData } from "../../context/FileContext";

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
  const [image, setImage] = useState<File | null>(null);
  // const [imageUrl, setImageUrl] = useState<string>("");
  // const { setImg, img1, img2, img3, img4, img5, img6, img7 } =
  //   useContext(ProductImagesContext);

  // const removeFile = (
  //   event: React.MouseEvent<HTMLButtonElement>,
  //   index: number,
  //   files: FileData[] | null,
  //   field: string
  // ) => {
  //   event.preventDefault();
  //   if (files) {
  //     const updatedFiles = [...files];
  //     updatedFiles.splice(index, 1);
  //     console.log(updatedFiles, "updatedFiles");
  //     setImg(field, updatedFiles);
  //   }
  // };

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
                onChange={(evt) => uploadImg(evt)}
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
