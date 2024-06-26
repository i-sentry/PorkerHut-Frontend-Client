import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
//@ts-ignore
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useCreateBlog } from "../../services/hooks/users/blog";
import { IoMdCloudUpload } from "react-icons/io";
import draftToHtml from "draftjs-to-html";
import { LuLoader } from "react-icons/lu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog = () => {
  const createBlog = useCreateBlog();
  const [currentImage, setCurrentImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [subject, setSubject] = useState<string>("");
  const [blogContent, setBlogContent] = useState<string>("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const contentState = editorState.getCurrentContent();
  const contentRaw = convertToRaw(contentState);
  const contentJson = JSON.stringify(contentRaw);
  const [isLoading, setIsLoading] = useState(false);

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    setBlogContent(
      draftToHtml(convertToRaw(newEditorState.getCurrentContent())),
    );
  };
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setCurrentImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) {
      setCurrentImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };


  const handleUpload = (e: any) => {
    // setCurrentImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Validate form data


    if (!currentImage || !subject) {
      alert("Please fill in all fields");
      return;
    }
    const formData = new FormData();
    formData.append("title", subject);
    formData.append("slug", subject.toLowerCase().replace(/ /g, "_"));
    formData.append("content", contentJson);
    if (currentImage) {
      formData.append("featuredImage", currentImage);
    }
    createBlog
      .mutateAsync(formData)
      .then((res) => {
        setIsLoading(false);
      toast.success("Blog added successfully");
        setImagePreview(null);
        setSubject("");
        setEditorState(EditorState.createEmpty());

      })
      .catch((err) => {
        setIsLoading(false);
      });

    // Clear form fields
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isDisabled = !currentImage || !subject

  return (
    <div className="h-screen py-6 pl-8  pr-5">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="mb-2">
            <h1 className="text-2xl font-medium ">Create Blog</h1>
            <span className="text-sm font-light text-[#A2A2A2]">
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
        <form onSubmit={handleSubmit}>
          <div>
            <div
              className="dnd flex h-[220px] items-center justify-center overflow-hidden rounded-md border border-dashed border-[#A2A2A2] bg-[#fff]"
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="blogImg"
                    className="max-h-full w-full"
                  />
                </>
              ) : (
                <>
                  <label
                    htmlFor={"inputId"}
                    className="font- text-center text-3xl text-[#797979] "
                  >
                    <span className="mb-4">
                      Drag and drop blog header here or
                    </span>{" "}
                    <br />
                    <div className="mt-3 inline-flex cursor-pointer items-center gap-1 rounded-md border border-[#197B30] p-3 text-center text-sm font-normal  text-[#197B30] hover:bg-[#197b30] hover:text-[#fff] active:scale-90">
                      <IoMdCloudUpload />
                      <span> Browse to add</span>
                    </div>{" "}
                  </label>
                  <input
                    onChange={(e) => handleFileChange(e)}
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
          <div className="mt-1 flex flex-col">
            <label htmlFor="subject" className=" font-light">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-sm border border-gray-300 px-4 py-2 font-bold placeholder:text-sm placeholder:font-light focus:border-[#197B30] focus:outline-none focus:ring focus:ring-[#197b30]"
            />
          </div>

          <div className="mt-2  h-60">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName border border-gray-300"
              wrapperClassName="wrapperClassName h-60 "
              editorClassName="editorClassName border focus:ring-[#197b30] focus:border-[#197b30] focus:outline-none border-gray-300 px-3 h-full"
              onEditorStateChange={onEditorStateChange}
              hashtag={{
                separator: " ",
                trigger: "#",
              }}
              toolBar={{
                options: [
                  "inline",
                  "blockType",
                  "fontSize",
                  "fontFamily",
                  "list",
                  "textAlign",
                  "colorPicker",
                  "link",
                  "embedded",
                  "emoji",
                  "image",
                  "remove",
                  "history",
                ],
                inline: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "monospace",
                    "superscript",
                    "subscript",
                  ],
                  bold: { icon: "bold", className: undefined },
                  italic: { icon: "italic", className: undefined },
                  underline: { icon: "underline", className: undefined },
                  strikethrough: {
                    icon: "strikethrough",
                    className: undefined,
                  },
                  monospace: { icon: "monospace", className: undefined },
                  superscript: { icon: "superscript", className: undefined },
                  subscript: { icon: "subscript", className: undefined },
                },
                blockType: {
                  inDropdown: true,
                  options: [
                    "Normal",
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
                    "H6",
                    "Blockquote",
                    "Code",
                  ],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
                fontSize: {
                  icon: "fontSize",
                  options: [
                    8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96,
                  ],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
                fontFamily: {
                  options: [
                    "Arial",
                    "Georgia",
                    "Impact",
                    "Tahoma",
                    "Times New Roman",
                    "Verdana",
                  ],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
                list: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ["unordered", "ordered", "indent", "outdent"],
                  unordered: { icon: "unordered", className: undefined },
                  ordered: { icon: "ordered", className: undefined },
                  indent: { icon: "indent", className: undefined },
                  outdent: { icon: "outdent", className: undefined },
                },
                textAlign: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ["left", "center", "right", "justify"],
                  left: { icon: "left", className: undefined },
                  center: { icon: "center", className: undefined },
                  right: { icon: "right", className: undefined },
                  justify: { icon: "justify", className: undefined },
                },
                colorPicker: {
                  icon: "color",
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  colors: [
                    "rgb(97,189,109)",
                    "rgb(26,188,156)",
                    "rgb(84,172,210)",
                    "rgb(44,130,201)",
                    "rgb(147,101,184)",
                    "rgb(71,85,119)",
                    "rgb(204,204,204)",
                    "rgb(65,168,95)",
                    "rgb(0,168,133)",
                    "rgb(61,142,185)",
                    "rgb(41,105,176)",
                    "rgb(85,57,130)",
                    "rgb(40,50,78)",
                    "rgb(0,0,0)",
                    "rgb(247,218,100)",
                    "rgb(251,160,38)",
                    "rgb(235,107,86)",
                    "rgb(226,80,65)",
                    "rgb(163,143,132)",
                    "rgb(239,239,239)",
                    "rgb(255,255,255)",
                    "rgb(250,197,28)",
                    "rgb(243,121,52)",
                    "rgb(209,72,65)",
                    "rgb(184,49,47)",
                    "rgb(124,112,107)",
                    "rgb(209,213,216)",
                  ],
                },
                link: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  dropdownClassName: undefined,
                  showOpenOptionOnHover: true,
                  defaultTargetOption: "_self",
                  options: ["link", "unlink"],
                  link: { icon: "link", className: undefined },
                  unlink: { icon: "unlink", className: undefined },
                  linkCallback: undefined,
                },
                emoji: {
                  icon: "emoji",
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  emojis: [
                    "😀",
                    "😁",
                    "😂",
                    "😃",
                    "😉",
                    "😋",
                    "😎",
                    "😍",
                    "😗",
                    "🤗",
                    "🤔",
                    "😣",
                    "😫",
                    "😴",
                    "😌",
                    "🤓",
                    "😛",
                    "😜",
                    "😠",
                    "😇",
                    "😷",
                    "😈",
                    "👻",
                    "😺",
                    "😸",
                    "😹",
                    "😻",
                    "😼",
                    "😽",
                    "🙀",
                    "🙈",
                    "🙉",
                    "🙊",
                    "👼",
                    "👮",
                    "🕵",
                    "💂",
                    "👳",
                    "🎅",
                    "👸",
                    "👰",
                    "👲",
                    "🙍",
                    "🙇",
                    "🚶",
                    "🏃",
                    "💃",
                    "⛷",
                    "🏂",
                    "🏌",
                    "🏄",
                    "🚣",
                    "🏊",
                    "⛹",
                    "🏋",
                    "🚴",
                    "👫",
                    "💪",
                    "👈",
                    "👉",
                    "👉",
                    "👆",
                    "🖕",
                    "👇",
                    "🖖",
                    "🤘",
                    "🖐",
                    "👌",
                    "👍",
                    "👎",
                    "✊",
                    "👊",
                    "👏",
                    "🙌",
                    "🙏",
                    "🐵",
                    "🐶",
                    "🐇",
                    "🐥",
                    "🐸",
                    "🐌",
                    "🐛",
                    "🐜",
                    "🐝",
                    "🍉",
                    "🍄",
                    "🍔",
                    "🍤",
                    "🍨",
                    "🍪",
                    "🎂",
                    "🍰",
                    "🍾",
                    "🍷",
                    "🍸",
                    "🍺",
                    "🌍",
                    "🚑",
                    "⏰",
                    "🌙",
                    "🌝",
                    "🌞",
                    "⭐",
                    "🌟",
                    "🌠",
                    "🌨",
                    "🌩",
                    "⛄",
                    "🔥",
                    "🎄",
                    "🎈",
                    "🎉",
                    "🎊",
                    "🎁",
                    "🎗",
                    "🏀",
                    "🏈",
                    "🎲",
                    "🔇",
                    "🔈",
                    "📣",
                    "🔔",
                    "🎵",
                    "🎷",
                    "💰",
                    "🖊",
                    "📅",
                    "✅",
                    "❎",
                    "💯",
                  ],
                },
                embedded: {
                  icon: "embedded",
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  embedCallback: undefined,
                  defaultSize: {
                    height: "auto",
                    width: "auto",
                  },
                },
                image: {
                  icon: "image",
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  urlEnabled: true,
                  uploadEnabled: true,
                  alignmentEnabled: true,
                  uploadCallback: undefined,
                  previewImage: false,
                  inputAccept:
                    "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                  alt: { present: false, mandatory: false },
                  defaultSize: {
                    height: "auto",
                    width: "auto",
                  },
                },
                remove: {
                  icon: "eraser",
                  className: undefined,
                  component: undefined,
                },
                history: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ["undo", "redo"],
                  undo: { icon: "undo", className: undefined },
                  redo: { icon: "redo", className: undefined },
                },
              }}
            />
          </div>
          <div className="mt-16 flex items-end justify-end">
            <button
              disabled={isDisabled}
              type="submit"
              className="mt-3 rounded-md bg-[#197b30] py-2.5 px-6 text-center text-[#fff] shadow-md disabled:bg-[#9eb6a3]"
            >
              {isLoading ? <LuLoader className="animate-spin" /> : "Post Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;





interface DeleteConfirmationProps {
  name: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  name,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white w-96 p-6 rounded-lg">
        <div className="text-xl font-semibold mb-4">Confirm Deletion</div>
        <div className="mb-4">Are you sure you want to delete {name}?</div>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="mr-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// export default DeleteConfirmation;
