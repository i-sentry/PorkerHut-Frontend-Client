import React, { useState } from 'react'
import GalleryModal from './GalleryModal';

function Gallery({data}: any) {

  const [clickedImg, setClickedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [zoomLevel, ] = useState<number>(100);
  const [, setEdit] = useState(false);


  const handleClick = (item: any, index: number) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
console.log(data);

  const handelRotationRight = () => {
    const totalLength = data.images.length;
    if (currentIndex === null) return;

    let newIndex = (currentIndex + 1) % totalLength;
    if (newIndex < 0) newIndex += totalLength;

    const newItem = data.data[newIndex].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.images.length;
    if (currentIndex === null) return;

    let newIndex = (currentIndex - 1) % totalLength;
    if (newIndex < 0) newIndex += totalLength;

    const newItem = data.images[newIndex].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };



  const downloadImage = () => {
    // Implement download image logic here
    // You can use the 'clickedImg' URL to download the image
    if (clickedImg) {
      // Create a link element and trigger a download
      const link = document.createElement("a");
      link.href = clickedImg;
      link.download = "image.jpg"; // Set a default filename
      link.click();
    }
  };

  return (
    <div className=" max-w-2xl py-16  sm:py-8  lg:max-w-7xl  ">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {data?.images.map((image: any, index: any) => (
          <BlurImage
            key={index}
            image={image}
            handleClick={handleClick}
            index={index}
            setEdit={setEdit}
          />
        ))}
      </div>

      <div>
        {clickedImg && (
          <GalleryModal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            downloadImage={downloadImage}
            zoomLevel={zoomLevel}
          />
        )}
      </div>
    </div>
  );
}

interface BlurImageProps {
  image: any;
  handleClick: (item: any, index: number) => void;
  index: number;
  setEdit: any;
}

function BlurImage({ image, handleClick, index, setEdit }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  console.log(image,"image");

  return (
    <a href="gallery" className="group">
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={"productimg"}
          className={cn(
            " object-cover w-full h-56",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoad={handleImageLoad}
          onClick={() => handleClick(image, index)}
        />
      </div>

    </a>
  );
}

// Function to concatenate class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default Gallery