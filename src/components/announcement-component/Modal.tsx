import React, { useState } from "react";
import { HiMinusSm, HiX } from "react-icons/hi";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { useCreateAnnoucement } from "../../services/hooks/Vendor";
import { toast } from "react-toastify";

type ModalProps = {
  isVisible: boolean;
  onClose: any;
};

type FormProps = {
  subject: string;
  content: string;
  startDate: Date;
  endDate: Date;
};

const Modal = ({ isVisible, onClose }: ModalProps) => {
  const [form, setForm] = useState({
    subject: "",
    content: "",
    startDate: "",
    endDate: "",
  });
  const createAnnouncement = useCreateAnnoucement();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((form: any) => {
      return { ...form, [name]: value };
    });
  };

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  const createNewAnnouncement = (e: any) => {
    e.preventDefault();

    createAnnouncement
      .mutateAsync({
        ...form,
        startDate: new Date(),
        endDate: new Date(2024, 4, 13),
      })
      .then((res: any) => {
        toast.success("New Accouncement Created!!!");
        // onClose();
        console.log(res, "res ann");
        setForm({
          subject: "",
          content: "",
          startDate: "",
          endDate: "",
        });
      })
      .catch((err: any) => {
        toast.error("Error Ocurred. Try again!!!");
        onClose();
        console.log(err, "res ann");
      });
    console.log(form, "form");
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="mt-20 h-full w-[550px]">
        <div className="rounded  bg-white">
          <div className="flex items-center justify-between bg-[#F4F4F4] px-4 py-3">
            <h1>New Annoucement</h1>
            <div className="flex items-center gap-3">
              <HiMinusSm className="hover:cursor-pointer" />
              <MdOutlineAccessAlarm className="hover:cursor-pointer" />
              <HiX onClick={() => onClose()} className="hover:cursor-pointer" />
            </div>
          </div>
          <div>
            <form
              id="create-annoucement"
              className="mx-2 py-4"
              onSubmit={createNewAnnouncement}
            >
              <input
                type="text"
                name="subject"
                id="subject"
                value={form.subject}
                onChange={(e: any) => handleChange(e)}
                placeholder="Subject"
                className="h-10 w-full border-b-2 px-4 font-medium outline-none placeholder:text-sm placeholder:font-normal"
              />

              <div className="">
                <div className="h-80 overflow-hidden rounded bg-white">
                  <textarea
                    placeholder="Type message here...."
                    name="content"
                    id="content"
                    value={form.content}
                    onChange={(e: any) => handleChange(e)}
                    className="h-80 w-full appearance-none border-none py-2 px-4  outline-none placeholder:text-sm focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="rounded bg-[#197B30] py-2 px-6 text-white hover:bg-[#197B39]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
