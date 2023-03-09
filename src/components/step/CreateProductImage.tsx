import React, {useState} from 'react'

const CreateProductImage = () => {
      const [image, setImage] = useState("");
      const [imageUrl, setImageUrl] = useState("");

      const handleImage = (e: any) => {
        const file = e.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
      };


    
  return (
    <div>
      <div className="m-auto">
        <div className="w-56 flex justify-center items-center h-56 border-gray-200 bg-white border-dashed border-2 relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="uploaded image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <>
              <label
                htmlFor="file"
                className="text-sm  h-full flex  text-right"
              >
                <span className=" cursor-pointer  my-auto border border-[#197B30] text-[#197B30] py-3 px-6">
                  Browse
                </span>{" "}
              </label>
              <input
                id="file"
                type="file"
                name="file"
                onClick={handleImage}
                className=" hidden appearance-none outline-none text-sm "
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateProductImage