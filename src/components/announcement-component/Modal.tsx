import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { HiMinusSm, HiX } from "react-icons/hi";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { toast } from "react-toastify";
import { useCreateAnnoucement } from "../../services/hooks/Vendor";
import Timer from "./Timer";

type ModalProps = {
  isVisible: boolean;
  onClose: any;
  refetch: any;
};

const Modal = ({ isVisible, onClose, refetch }: ModalProps) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [openTimer, setOpenTimer] = useState(false);
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
    // setLoading(true);

    if (timestamp > 0) {
      createAnnouncement
        .mutateAsync({
          ...form,
          startDate: new Date(),
          endDate: new Date(timestamp),
        })
        .then((res: any) => {
          toast.success("New Accouncement Created!!!");
          setForm({
            subject: "",
            content: "",
            startDate: "",
            endDate: "",
          });
          onClose();
          refetch();
          console.log(res, "res ann", res?.data?.announcement?._id);
          setLoading(false);
          localStorage.setItem(
            "expirationTimestamp",
            JSON.stringify({
              _id: res?.data?.announcement?._id,
              endDate: timestamp,
            }),
          );
          localStorage.removeItem("timer");
        })
        .catch((err: any) => {
          toast.error("Error Ocurred. Try again!!!");
          console.log(err, "res ann");
          setLoading(false);
        });
    } else {
      setErr(true);
    }
    console.log(form, "form", timestamp);
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="mt-20 h-fit w-[550px]">
        <div className="rounded  bg-white">
          <div className="flex items-center justify-between bg-[#F4F4F4] px-4 py-3">
            <h1>New Annoucement</h1>
            <div className="flex items-center gap-3">
              <HiMinusSm className="hover:cursor-pointer" />
              <MdOutlineAccessAlarm
                className={`hover:cursor-pointer ${err && timestamp < 1 ? "animate-bounce text-red-700" : ""}`}
                onClick={() => setOpenTimer(true)}
              />
              <HiX
                onClick={() => {
                  onClose();
                  localStorage.removeItem("timer");
                }}
                className="hover:cursor-pointer"
              />
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
                required
                className="form-input h-10 w-full border px-4 font-medium outline-none placeholder:text-sm placeholder:font-normal focus:border-green-700 focus:ring-green-700"
              />

              <div className="mt-3">
                <div className="h-80 overflow-hidden rounded bg-white">
                  <textarea
                    placeholder="Type message here...."
                    name="content"
                    id="content"
                    required
                    value={form.content}
                    onChange={(e: any) => handleChange(e)}
                    className="form-textarea h-80 w-full resize-none appearance-none border px-4 font-medium outline-none placeholder:text-sm placeholder:font-normal focus:border-[3px] focus:border-green-700 focus:ring-green-700"
                  />
                </div>
              </div>
              <p className="mt-2 text-red-600">
                {err &&
                  timestamp < 1 &&
                  "You need to set a timer for the annoucement"}
              </p>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 rounded bg-[#197B30] py-2 px-6 text-white hover:bg-[#197B39]"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <CgSpinner size={16} className="animate-spin" />
                    Processing...
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {openTimer && (
        <Timer setOpenTimer={setOpenTimer} setTimestamp={setTimestamp} />
      )}
    </div>
  );
};

export default Modal;
