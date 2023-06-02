import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

export interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

const CustomDND = ({
  getFiles,
  inputId,
}: {
  getFiles: (files: any) => void;
  inputId: string;
}) => {
  const [componentFiles, setComponentFiles] = useState<IFile[]>([]);
  const [filenames, setFilenames] = useState<string[]>([]);
  const [fileArr, setFileArr] = useState<any[]>([]);
  // Cancel Default DnD Behavior using events preventDefault & stopPropagation
  const cancelDefaultBehavior = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // Function to convert files to dataUrl && Blob
  const handleFileProcessing = (
    files: any[],
    doneFn: (files: IFile[]) => void
  ) => {
    const processedFiles: IFile[] = [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataUrl = evt?.target?.result as string;

        const processedFile: any = {
          dataUrl,
          name: file?.name,
          type: file?.type,
          size: file?.size,
        };
        processedFiles.push(processedFile);
        if (processedFiles.length === files?.length) {
          doneFn(processedFiles);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const processFiles = (files: any[]) => {
    getFiles([...files]);
    setFilenames(
      [...filenames].concat(Array.from(files).map((file: any) => file.name))
    );

    // handleFileProcessing(files, (processedFiles) => {
    //   getFiles(processedFiles);
    // });
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
