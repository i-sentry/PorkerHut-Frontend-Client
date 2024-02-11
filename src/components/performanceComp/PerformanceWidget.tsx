import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

export interface Iprops {
  color: string;
  currency: string;
  value: string;
  border?: string;
  action: () => void;
  percentage: number;
  type: string;
  amount: string;
  borderColor: string;
  textColor: string;
  navigate: string;
  disable: boolean;
  text: string;
}

const PerformanceWidget = ({
  color,
  currency,

  border,
  action,
  percentage,
  amount,
  borderColor: buttonColor,
  textColor,
  type,
  value,
  text,
}: Iprops) => {
  // const openModal = (e: any) => {
  //   e.preventDefault();
  //   action();
  // };

  const min = 0;
  const max = 100;

  const percentageValue = ((percentage - min) / (max - min)) * 100;

  return (
    <div className="">
      <div
        className={`flex h-[162px] w-full flex-auto flex-col  justify-between rounded-lg border p-3 shadow-sm xxs:flex-shrink-0 md:flex-shrink border-[${buttonColor}] shadow-md`}
        style={{
          backgroundColor: color,
          border: border,
          borderColor: buttonColor,
        }}
      >
        <div className="flex items-start ">
          <div className="text-[16px] font-normal leading-[18px]  text-[#333333] ">
            {type}
          </div>
        </div>
        <div>
          <span className="text-[24px] font-bold leading-[24px] text-[#333333]">
            {value}
          </span>
        </div>
        <div>
          {/* AiOutlineRise */}
          <div className="">
            {/* AiOutlineFall */}
            <span
              className={`bg-[${buttonColor}] text-[${textColor}] flex rounded-md py-2  transition-all active:scale-90 disabled:cursor-not-allowed`}
            >
              {percentage < 0 ? (
                <span>
                  {" "}
                  <AiOutlineFall color="#F91919" size={23} />
                </span>
              ) : (
                <span className="text-[#22C55E]">
                  {" "}
                  <AiOutlineRise color="#22C55E" size={23} />
                </span>
              )}

              <div>
                <p className="flex ">
                  <span
                    className={`text-[12px] font-normal leading-[24px]  ${
                      percentage < 0 ? "text-[#F91919]" : "text-[#22C55E]"
                    }  px-1`}
                  >
                    {Math.abs(percentageValue)}%
                  </span>
                  {percentage > 50 ? (
                    <span className="pr-1 text-[12px] font-normal leading-[24px] text-[#333333]">
                      Decrease from yesterday
                    </span>
                  ) : (
                    <span className="pr-1 text-[12px] font-normal leading-[24px] text-[#333333]">
                      Increase from yesterday
                    </span>
                  )}
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <p className=" mt-2 text-center text-[12px] font-normal leading-[18px] text-[#a2a2a2]">
        {text}
      </p>
    </div>
  );
};

export default PerformanceWidget;
