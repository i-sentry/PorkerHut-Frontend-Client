
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
        className={`flex flex-auto justify-between flex-col p-3  h-[162px] w-full rounded-lg shadow-sm xxs:flex-shrink-0 md:flex-shrink border border-[${buttonColor}] shadow-md`}
        style={{
          backgroundColor: color,
          border: border,
          borderColor: buttonColor,
        }}
      >
        <div className="flex items-start ">
          <div className="text-[#333333] text-[16px] leading-[18px]  font-normal ">
            {type}
          </div>
        </div>
        <div>
          <span className="text-[#333333] font-normal   text-[24px] leading-[24px]">
            {value}
          </span>
        </div>
        <div>
          {/* AiOutlineRise */}
          <div className="">
            {/* AiOutlineFall */}
            <span
              className={`bg-[${buttonColor}] text-[${textColor}] flex py-2 rounded-md  transition-all active:scale-90 disabled:cursor-not-allowed`}
            >
              {percentage > 50 ? (
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
                    className={`text-[12px] leading-[24px] font-normal  ${
                      percentage > 50 ? "text-[#F91919]" : "text-[#22C55E]"
                    }  px-1`}
                  >
                    {percentageValue}%
                  </span>
                  {percentage > 50 ? (
                    <span className="pr-1 text-[#333333] text-[12px] leading-[24px] font-normal">
                      Decrease from yesterday
                    </span>
                  ) : (
                    <span className="pr-1 text-[#333333] text-[12px] leading-[24px] font-normal">
                      Increase from yesterday
                    </span>
                  )}
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <p className=" text-center text-[12px] leading-[24px] font-normal text-[#a2a2a2] mt-5">
        {text}
      </p>
    </div>
  );
};

export default PerformanceWidget;
