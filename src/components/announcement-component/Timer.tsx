import { useEffect, useState } from "react";

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: (days = 10),
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft((prevTime) => ({
          ...prevTime,
          seconds: prevTime.seconds - 1,
        }));
      } else if (timeLeft.minutes > 0) {
        setTimeLeft((prevTime) => ({
          ...prevTime,
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      } else if (timeLeft.hours > 0) {
        setTimeLeft((prevTime) => ({
          ...prevTime,
          hours: prevTime.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (timeLeft.days > 0) {
        setTimeLeft((prevTime) => ({
          ...prevTime,
          days: prevTime.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div>
      <h1>Countdown</h1>
      <div>
        <span>{timeLeft.days}</span> days :<span>{timeLeft.hours}</span> hours :
        <span>{timeLeft.minutes}</span> minutes :<span>{timeLeft.seconds}</span>{" "}
        seconds
      </div>
    </div>
  );
};

export default function Timer({ setOpenTimer }: any) {
  const [days, setDays] = useState(10);
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

  return (
    <>
      <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
        <div className="w-[500px] bg-neutral-50 py-10 px-8">
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
                min={1}
                max={3}
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
                min={1}
                max={3}
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
              className="col-[3_/_4] rounded-md bg-transparent px-4 py-3 text-xs uppercase text-green-700 shadow-[0_0_0_1px_rgb(21,128,61)]"
            >
              Reset
            </button>
            <button
              type="submit"
              className="col-[4] rounded-md bg-green-700 px-6 py-3 text-xs uppercase text-white"
            >
              Set
            </button>
          </form>
          <Countdown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </div>
    </>
  );
}
