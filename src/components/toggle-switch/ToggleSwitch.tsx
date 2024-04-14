import { useEffect, useState } from "react";
import { useCreateNotification } from "../../services/hooks/notifications";

function ToggleSwitch({
  type,
  status,
  notification,
  email,
}: {
  type?: string;
  status?: boolean;
  notification?: any;
  email?: string | undefined;
}) {
  const [toggle, setToggle] = useState(status);
  const [notType, setNotType] = useState("");
  const createNot = useCreateNotification();

  useEffect(() => {
    switch (type?.toLowerCase()) {
      case "new orders":
        setNotType(type?.toLowerCase());
        break;
      case "new stores":
        setNotType(type?.toLowerCase());
        break;
      case "new product":
        setNotType(type?.toLowerCase());
        break;
      case "messages":
        setNotType(type?.toLowerCase());
        break;
      default:
        setNotType("");
        break;
    }
  }, [type]);

  const handleToggle = () => {
    setToggle(!toggle);
    createNot
      .mutateAsync({
        type: notType,
        email: `${email}`,
        status: !status,
      })
      .then((res: any) => {
        console.log(res, "notificatiuonnsnsnsns");
      })
      .catch((err: any) => {
        console.log(err, "notificatiuonnsnsnsns");
      });
  };

  return (
    <div className="r">
      {/* Switch Container */}
      <div
        className={`flex h-7 w-20 cursor-pointer items-center md:h-6 md:w-24 ${
          toggle
            ? "rounded-sm border-2 border-red-500"
            : "rounded-sm border-2 border-[#22c55e]"
        } `}
        onClick={handleToggle}
      >
        {/* Switch */}
        <div
          className={`relative h-5 w-[34px] border-2 shadow-lg  duration-300  ease-in-out md:h-5  md:w-12 ${
            toggle
              ? "translate-x-11 transform border-red-500 bg-red-500 "
              : "border-[#22c55e] bg-[#22C55E]"
          }`}
        >
          {/* Text */}
          <span
            className={`absolute inset-0 flex items-center justify-center text-[16px] font-normal leading-[19px] text-white ${
              toggle ? "bg-[#22c55e] opacity-0" : "opacity-100"
            }`}
          >
            ON
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center text-[16px] font-normal leading-[19px] text-white ${
              toggle ? "opacity-100" : "opacity-0"
            }`}
          >
            OFF
          </span>
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
