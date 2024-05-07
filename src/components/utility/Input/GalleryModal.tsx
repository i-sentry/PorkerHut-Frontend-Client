import React from "react";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { IoMdClose, IoMdDownload } from "react-icons/io";

interface GalleryModalProps {
  clickedImg: string;
  setClickedImg: (url: string | null) => void;
  handelRotationRight: () => void;
  handelRotationLeft: () => void;

  downloadImage: () => void;
  zoomLevel: number;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,

  downloadImage,
  zoomLevel,
}) => {
  const handleClick = (e: any) => {
    setClickedImg(null);
    // if (e.target.classList.contains("dismiss")) {
    // }
  };

  return (
    <>
      <div className="overlay ">
        <img
          src={clickedImg}
          alt="bigger pic"
          style={{ width: `${zoomLevel}%` }}
        />
        <section className=" flex items-center gap-4">
          <span className=" hover:text-slate-500" onClick={() => {}}>
            <BsZoomOut size={23} />
          </span>
          <span className=" hover:text-slate-500" onClick={() => {}}>
            <BsZoomIn size={23} />
          </span>
          <span className=" hover:text-slate-500" onClick={downloadImage}>
            <IoMdDownload size={23} />
          </span>
          <span className="dismiss " onClick={handleClick}>
            <IoMdClose />
          </span>
        </section>

        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div onClick={handelRotationRight} className="overlay-arrows_right">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;
