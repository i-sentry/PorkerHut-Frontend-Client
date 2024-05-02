import { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// const Countdown: React.FC<CountdownProps> = ({
//   days,
//   hours,
//   minutes,
//   seconds,
// }) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: (days = 10),
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timeLeft.seconds > 0) {
//         setTimeLeft((prevTime) => ({
//           ...prevTime,
//           seconds: prevTime.seconds - 1,
//         }));
//       } else if (timeLeft.minutes > 0) {
//         setTimeLeft((prevTime) => ({
//           ...prevTime,
//           minutes: prevTime.minutes - 1,
//           seconds: 59,
//         }));
//       } else if (timeLeft.hours > 0) {
//         setTimeLeft((prevTime) => ({
//           ...prevTime,
//           hours: prevTime.hours - 1,
//           minutes: 59,
//           seconds: 59,
//         }));
//       } else if (timeLeft.days > 0) {
//         setTimeLeft((prevTime) => ({
//           ...prevTime,
//           days: prevTime.days - 1,
//           hours: 23,
//           minutes: 59,
//           seconds: 59,
//         }));
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timeLeft]);

//   return (
//     <div>
//       <h1>Countdown</h1>
//       <div>
//         <span>{timeLeft.days}</span> days :<span>{timeLeft.hours}</span> hours :
//         <span>{timeLeft.minutes}</span> minutes :<span>{timeLeft.seconds}</span>{" "}
//         seconds
//       </div>
//     </div>
//   );
// };

export default function Timer({ setOpenTimer, setTimestamp, id }: any) {
  const [countdown, setCountdown] = useState<any>(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: Function,
  ) => {
    const value = parseInt(e.target.value);
    setter(value >= 0 ? value : 0);
  };

  useEffect(() => {
    // Check if expiration timestamp is stored in localStorage
    const timer = JSON.parse(localStorage.getItem(id) as string);
    console.log(timer);
    if (timer && id === timer?._id) {
      // // Calculate expiration timestamp if not found
      // const currentDate = new Date();
      // currentDate.setDate(currentDate.getDate() + 4); // Add 4 days
      // // localStorage.setItem("expirationTimestamp", "0");
      setDays(timer?.days);
      setHours(timer?.hours);
      setMinutes(timer?.minutes);
      setSeconds(timer?.seconds);
    }

    // Update countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference =
        timer?.endDate && parseInt(timer?.endDate || "0", 10) - now;
      console.log(timeDifference, "timeDifference", timer?.endDate);
      if (timeDifference > 0 && timeDifference !== "undefined") {
        // Calculate remaining time
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          localStorage.removeItem("expirationTimestamp");
          clearInterval(interval);
        }
      } else {
        // Trigger delete action when countdown expires
        // Perform your delete action here
        // localStorage.removeItem("expirationTimestamp");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleSetTimer = (e: any) => {
    e.preventDefault();
    const timer = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    // Convert days, hours, minutes, and seconds to seconds
    const daysToSeconds = days * 24 * 60 * 60;
    const hoursToSeconds = hours * 60 * 60;
    const minutesToSeconds = minutes * 60;
    const second = seconds;
    const totalSeconds =
      daysToSeconds + hoursToSeconds + minutesToSeconds + seconds;
    const currentTimestamp = Date.now();
    const futureTimestamp = currentTimestamp + totalSeconds * 1000;
    console.log(futureTimestamp);
    setTimestamp(futureTimestamp);
    toast.success("Timer set successfully!!!");
    setOpenTimer(false);
    localStorage.setItem("timer", JSON.stringify(timer));
  };

  const handleReset = () => {
    localStorage.removeItem("expirationTimestamp");
    localStorage.removeItem("timer");

    setCountdown(0);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    toast.info("Timer reset successfully!!!");
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-[70] flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
        <div className="relative w-[500px] bg-neutral-50 py-10 px-8">
          <span
            className="absolute top-3 right-3 cursor-pointer text-[#333]"
            onClick={() => {
              setOpenTimer(false);
            }}
          >
            <BsX size={32} />
          </span>
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-light">Porker Hut</h2>
            <h3 className="text-xl font-semibold">T - MINUS:</h3>
          </div>
          <form
            id="countdown"
            className="grid grid-cols-4 justify-end gap-5 gap-y-8"
          >
            <label
              htmlFor="days"
              className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
            >
              <input
                type="number"
                name="days"
                id="days"
                max={366}
                value={days}
                onChange={(e) => handleInputChange(e, setDays)}
                className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
              />
              <span className="inline-block text-xs uppercase text-[#A2A2A2]">
                Days
              </span>
            </label>
            <label
              htmlFor="hours"
              className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
            >
              <input
                type="number"
                name="hours"
                id="hours"
                max={60}
                value={hours}
                onChange={(e) => handleInputChange(e, setHours)}
                className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
              />
              <span className="inline-block text-xs uppercase text-[#A2A2A2]">
                Hours
              </span>
            </label>
            <label
              htmlFor="minutes"
              className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
            >
              <input
                type="number"
                name="minutes"
                id="minutes"
                max={60}
                value={minutes}
                onChange={(e) => handleInputChange(e, setMinutes)}
                className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
              />
              <span className="inline-block text-xs uppercase text-[#A2A2A2]">
                minutes
              </span>
            </label>
            <label
              htmlFor="seconds"
              className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
            >
              <input
                type="number"
                name="seconds"
                id="seconds"
                max={60}
                value={seconds}
                onChange={(e) => handleInputChange(e, setSeconds)}
                className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
              />
              <span className="inline-block text-xs uppercase text-[#A2A2A2]">
                seconds
              </span>
            </label>

            <button
              type="reset"
              onClick={handleReset}
              className="col-[3_/_4] rounded-md bg-transparent px-4 py-3 text-xs uppercase text-green-700 shadow-[0_0_0_1px_rgb(21,128,61)]"
            >
              Reset
            </button>
            <button
              onClick={(e: any) => handleSetTimer(e)}
              type="submit"
              className="col-[4] rounded-md bg-green-700 px-6 py-3 text-xs uppercase text-white"
            >
              Set
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// const CountdownTimer = () => {
//   const [countdown, setCountdown] = useState<any>(0);

//   useEffect(() => {
//     // Check if expiration timestamp is stored in localStorage
//     const expirationTimestamp = localStorage.getItem("expirationTimestamp");

//     if (!expirationTimestamp) {
//       // Calculate expiration timestamp if not found
//       const currentDate = new Date();
//       currentDate.setDate(currentDate.getDate() + 4); // Add 4 days
//       localStorage.setItem(
//         "expirationTimestamp",
//         currentDate.getTime().toString(),
//       );
//     }

//     // Update countdown every second
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const timeDifference =
//         parseInt(localStorage.getItem("expirationTimestamp") || "0", 10) - now;

//       if (timeDifference <= 0) {
//         // Trigger delete action when countdown expires
//         // Perform your delete action here
//         clearInterval(interval);
//       } else {
//         // Calculate remaining time
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//         );
//         const minutes = Math.floor(
//           (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
//         );
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
//         setCountdown({ days, hours, minutes, seconds });
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
//       <div className="w-[500px] bg-neutral-50 py-10 px-8">
//         <div className="mb-4 text-center">
//           <h2 className="text-3xl font-light">Porker Hut</h2>
//           <h3 className="text-xl font-semibold">T - MINUS:</h3>
//         </div>
//         <form
//           id="countdown"
//           className="grid grid-cols-4 justify-end gap-5 gap-y-8"
//         >
//           <label
//             htmlFor="days"
//             className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
//           >
//             <input
//               type="number"
//               name="days"
//               id="days"
//               max={366}
//               value={days}
//               onChange={(e) => handleInputChange(e, setDays)}
//               className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
//             />
//             <span className="inline-block text-xs uppercase text-[#A2A2A2]">
//               Days
//             </span>
//           </label>
//           <label
//             htmlFor="hours"
//             className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
//           >
//             <input
//               type="number"
//               name="hours"
//               id="hours"
//               min={1}
//               max={3}
//               value={hours}
//               onChange={(e) => handleInputChange(e, setHours)}
//               className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
//             />
//             <span className="inline-block text-xs uppercase text-[#A2A2A2]">
//               Hours
//             </span>
//           </label>
//           <label
//             htmlFor="minutes"
//             className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
//           >
//             <input
//               type="number"
//               name="minutes"
//               id="minutes"
//               min={1}
//               max={3}
//               value={minutes}
//               onChange={(e) => handleInputChange(e, setMinutes)}
//               className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
//             />
//             <span className="inline-block text-xs uppercase text-[#A2A2A2]">
//               minutes
//             </span>
//           </label>
//           <label
//             htmlFor="seconds"
//             className="flex appearance-none flex-col items-center overflow-hidden rounded-[15px] border border-[#A2A2A2] bg-neutral-100 py-3 focus-within:ring-1 focus-within:ring-green-700"
//           >
//             <input
//               type="number"
//               name="seconds"
//               id="seconds"
//               max={60}
//               value={seconds}
//               onChange={(e) => handleInputChange(e, setSeconds)}
//               className="form-input w-full appearance-none border-none bg-transparent text-center text-3xl font-black outline-0 focus:border-none focus:outline-0 focus:ring-0 "
//             />
//             <span className="inline-block text-xs uppercase text-[#A2A2A2]">
//               seconds
//             </span>
//           </label>

//           <button
//             type="reset"
//             className="col-[3_/_4] rounded-md bg-transparent px-4 py-3 text-xs uppercase text-green-700 shadow-[0_0_0_1px_rgb(21,128,61)]"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="col-[4] rounded-md bg-green-700 px-6 py-3 text-xs uppercase text-white"
//           >
//             Set
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
