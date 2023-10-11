import React, {
  createContext,
  useState,
  ReactNode,
} from "react";
import { FileData } from "./FileContext";

export interface ImgContextProps {
  img1?: FileData[] | null;
  img2?: FileData[] | null;
  img3?: FileData[] | null;
  img4?: FileData[] | null;
  img5?: FileData[] | null;
  img6?: FileData[] | null;
  img7?: FileData[] | null;
  img8?: FileData[] | null;
  setImg: (field: string, files: FileData[]) => void;
}

export const ProductImagesContext = createContext<ImgContextProps>({
  img1: null,
  img2: null,
  img3: null,
  img4: null,
  img5: null,
  img6: null,
  img7: null,
  img8: null,
  setImg: () => {},
});

export const ImgProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [img1, setImg1] = useState<FileData[] | null>(null);
  const [img2, setImg2] = useState<FileData[] | null>(null);
  const [img3, setImg3] = useState<FileData[] | null>(null);
  const [img4, setImg4] = useState<FileData[] | null>(null);
  const [img5, setImg5] = useState<FileData[] | null>(null);
  const [img6, setImg6] = useState<FileData[] | null>(null);
  const [img7, setImg7] = useState<FileData[] | null>(null);
  const [img8, setImg8] = useState<FileData[] | null>(null);


  const setImg = (field: string, files: FileData[]) => {
    switch (field) {
      case "img1":
        setImg1(files);
        break;
      case "img2":
        setImg2(files);
        break;
      case "img3":
        setImg3(files);
        break;
      case "img4":
        setImg4(files);
        break;
      case "img5":
        setImg5(files);
        break;
      case "img6":
        setImg6(files);
        break;
      case "img7":
        setImg7(files);
        break;
      case "img8":
        setImg8(files);
        break;

      default:
        break;
    }
  };

  const contextValue: ImgContextProps = {
    setImg,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  };
  return (
    <ProductImagesContext.Provider value={contextValue}>
      {children}
    </ProductImagesContext.Provider>
  );
};
