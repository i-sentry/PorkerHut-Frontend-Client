import React, { useState } from "react";
// import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";

const Blog = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const cancelDefaultBehavior = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  // Function to handle drag enter
  const handleDragEnter = (evt: any) => {
    cancelDefaultBehavior(evt);
    evt.target.classList.add("border-dashed-[#197b30]");

    return false;
  };

  // Function to handle drag leave
  const handleDragLeave = (evt: any) => {
    cancelDefaultBehavior(evt);
    evt.target.classList.remove("border-dashed");

    return false;
  };

  // Function to handle drag over
  const handleDragOver = (evt: any) => {
    cancelDefaultBehavior(evt);

    return false;
  };

  // Function to handle drop
  const handleDrop = (evt: any) => {
    cancelDefaultBehavior(evt);

    const acceptedFileTypes = ["image/png", "image/jpg", "image/jpeg"];

    if (acceptedFileTypes.includes(evt.dataTransfer.files[0].type)) {
      setCurrentImage(URL.createObjectURL(evt.target.files[0]));
    } else {
      throw new Error("Invalid File Type. This file cannot be accepted.");
    }

    return false;
  };



  const handleUpload = (e: any) => {
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="p-14">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="mb-2">
            <h1 className="text-2xl font-medium ">Create Blog</h1>
            <span className="text-[#A2A2A2] font-light text-sm">
              Create your blog here.
            </span>
          </div>
          {currentImage && (
            <div
              onClick={() => {
                setCurrentImage(null);
              }}
              className="cursor-pointer text-sm text-[#f91919]"
            >
              <span>Remove image</span>
            </div>
          )}
        </div>
        <form>
          <div>
            <div
              className="dnd bg-[#fff] h-[220px] flex items-center justify-center border border-dashed border-[#A2A2A2] rounded-md"
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {currentImage ? (
                <>
                  <img
                    src={currentImage}
                    alt="blogImg"
                    className=" w-full h-full object-cover"
                  />
                </>
              ) : (
                <>
                  <label
                    htmlFor={"inputId"}
                    className="text-3xl font- text-center text-[#797979] "
                  >
                    <span className="mb-4">
                      Drag and drop blog header here or
                    </span>{" "}
                    <br />
                    <div className="mt-3 inline-block text-[#197B30] border border-[#197B30] p-3 rounded-md text-sm cursor-pointer text-center  font-normal active:scale-90 hover:text-[#fff] hover:bg-[#197b30]">
                      Browse to add
                    </div>{" "}
                  </label>
                  <input
                    onChange={(e) => handleUpload(e)}
                    className="hidden"
                    accept="image/*"
                    type="file"
                    name={"inputId"}
                    id={"inputId"}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-1">
            <label htmlFor="subject" className=" font-light">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              name="subject"
              id="subject"
              className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-[#197b30] focus:border-[#197B30] placeholder:text-sm placeholder:font-light"
            />
          </div>

          <div className="mt-2">
            {/* <ReactQuill
              className=""
              theme="snow"
              value={description}
              placeholder="Type something..."
              onChange={setDescription}
            /> */}
          </div>
          <div className="flex items-end justify-end">
            <button className="mt-3 bg-[#197b30] py-2.5  px-6 shadow-md rounded-md text-[#fff]">
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;
