import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

export interface IFile {
  dataUrl: string;
  blob: Blob;
  formData: FormData;
}

const CustomDND = ({
  getFiles,
  inputId,
}: {
  getFiles: (files: IFile[]) => void;
  inputId: string;
}) => {
  const [filenames, setFilenames] = useState<string[]>([]);
  const [componentFiles, setComponentFiles] = useState<IFile[]>([]);
  // Cancel Default DnD Behavior using events preventDefault & stopPropagation
  const cancelDefaultBehavior = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // Function to convert files to dataUrl && Blob
  const handleFileProcessing = (
    files: File[],
    doneFn: (files: IFile[]) => void
  ) => {
    const fileList: IFile[] = [];
    Array.from(files).forEach((file: File, index: number) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", async (e: ProgressEvent<FileReader>) => {
        let result = e.target?.result as string;
        const blob = await (await fetch(result)).blob();
        const formData = new FormData(document.createElement("form"));

        formData.append(file.name, blob);

        fileList.push({ dataUrl: result, blob, formData });
        if (index === files.length - 1) {
          doneFn([...componentFiles, ...fileList]);
          setComponentFiles(fileList);
        }
      });
    });
  };

  const processFiles = (files: File[]) => {
    setFilenames(
      [...filenames].concat(Array.from(files).map((file: File) => file.name))
    );

    handleFileProcessing(files, (processedFiles) => {
      getFiles(processedFiles);
    });
  };

  // Function to listen for and handle input change
  const handleInputChange = (evt: any) => {
    processFiles(evt.target.files);
  };

  // Function to handle drag enter
  const handleDragEnter = (evt: any) => {
    cancelDefaultBehavior(evt);
    evt.target.classList.add("border-dashed-[#0eb683]");

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

    const acceptedFileTypes = [
      "application/pdf",
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "application/msword",
      " application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      " application/vnd.ms-powerpoint",
      " application/vnd.openxmlformats-officedocument.presentationml.slideshow",
      " application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    if (acceptedFileTypes.includes(evt.dataTransfer.files[0].type)) {
      processFiles(evt.dataTransfer.files);
    } else {
      throw new Error("Invalid File Type. This file cannot be accepted.");
    }

    return false;
  };

  const removeFile = (index: number) => {
    let newFiles = componentFiles.filter((_, i) => i !== index);
    let newFilenames = filenames.filter((_, i) => i !== index);

    setFilenames(newFilenames);
    setComponentFiles(newFiles);
    getFiles(newFiles);
  };

  return (
    <div className="flex flex-col">
      <div
        className="dnd bg-[#fff] h-12 flex items-center justify-end border rounded-md relative"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <label
          htmlFor={inputId}
          className="text-sm  bg-[#D9D9D9] h-full flex  text-right"
        >
          <span className="text-[#333333] cursor-pointer px-8 my-auto">Select file</span>{" "}
        </label>
        <input
          onChange={handleInputChange}
          className="hidden"
          accept="image/*,.pdf,.docx,.doc,.txt"
          type="file"
          name={inputId}
          id={inputId}
        />

         <div className="uploaded flex flex-wrap gap-1 text-sm py-3 absolute left-2">
        {filenames.map((filename: string, index: number) => (
          <div
            key={index}
            className="text-xs shrink-0 bg-emerald-600 text-white px-2 rounded-md flex items-center"
          >
            <span>{filename}</span>
            <button className="p-2" onClick={() => removeFile(index)}>
              <RiCloseLine />
            </button>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default CustomDND;
