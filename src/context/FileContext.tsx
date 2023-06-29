import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export interface FileData {
  name: string;
  file: File;
}

export interface FileContextProps {
  selectedFileNames: any;
  selectedFiles: FileData[] | null;
  selecFiles: FileData[] | null;
  seFiles: FileData[] | null;
  setFiles: (field: string, files: FileData[]) => void;
}

export const FileContext = createContext<FileContextProps>({
  selectedFileNames: {
    selected1: "",
    selected2: "",
    selected3: "",
  },
  selectedFiles: null,
  selecFiles: null,
  seFiles: null,
  setFiles: () => {},
});

export const FileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileData[] | null>(null);
  const [selecFiles, setSelecFiles] = useState<FileData[] | null>(null);
  const [seFiles, setSeFiles] = useState<FileData[] | null>(null);
  const [selectedFileNames, setSelectedFileNames] = useState({
    selected1: "",
    selected2: "",
    selected3: "",
  });

  const setFiles = (field: string, files: FileData[]) => {
    switch (field) {
      case "selected":
        setSelectedFiles(files);
        break;
      case "selec":
        setSelecFiles(files);
        break;
      case "se":
        setSeFiles(files);
        break;
      default:
        break;
    }
  };

  const contextValue: FileContextProps = {
    selectedFileNames,
    selectedFiles,
    selecFiles,
    seFiles,
    setFiles,
  };

  return (
    <FileContext.Provider value={contextValue}>{children}</FileContext.Provider>
  );
};
