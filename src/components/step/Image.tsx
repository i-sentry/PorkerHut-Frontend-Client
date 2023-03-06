import React, { useState } from 'react';


const Image = () => {

  const [imgage, setImage] = useState("");

  const handleImage = (e: any) => {
    console.log(e.target.files);
    
    setImage(e.target.files[0])
    
  }


  return (
    <div className="flex flex-col gap-2 bg-[#F4F4F4] px-4 py-6">
      <div className="mb-2">
        <h1>Images</h1>
        <span className="text-xs text-[#797979]">
          Images need to be at least 800 x 800 pixel with a maximum of 3000 x
          3000 pixel.{" "}
        </span>
      </div>
      <div className="">
        
        <div className="w-60 flex justify-center items-center h-60 border-gray-200 bg-white border-dashed border-2 ">
          <input
            type="file"
            name='file'
            onClick={handleImage}
          
            className=" appearance-none outline-none text-sm block"
          />
          <button></button>
        </div>
        
      </div>
    </div>
  );
}

export default Image
