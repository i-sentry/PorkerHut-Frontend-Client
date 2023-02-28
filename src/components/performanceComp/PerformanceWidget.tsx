import React from "react";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { Link } from "react-router-dom";

// const Container = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: space-between;
//   flex-direction: column;
//   gap: 3;
//   box-shadow: -1px 3px 5px 0px rgba(237, 220, 220, 0.75);
//   -webkit-box-shadow: -1px 3px 5px 0px rgba(237, 220, 220, 0.75);
//   -moz-box-shadow: -1px 3px 5px 0px rgba(237, 220, 220, 0.75);
//   padding: 10px;
//   height: 150px;
//   border-radius: 8px;
// `;
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
    text: string
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
    text

}: Iprops) => {
  const openModal = (e: any) => {
    e.preventDefault();
    action();
  };

  const min = 0;
  const max = 100;

  const percentageValue = ((percentage - min) / (max - min)) * 100;

    return (
      <div className="w-[300px]">
        <div
          className={`flex flex-auto justify-between flex-col p-3 xxs:w-[280px] h-[162px] w-full rounded-lg shadow-sm xxs:flex-shrink-0 md:flex-shrink border border-[${buttonColor}] shadow-md`}
          style={{
            backgroundColor: color,
            border: border,
            borderColor: buttonColor,
          }}
        >
          <div className="flex items-start ">
            <div className="text-[#333333] text-base  font-medium ">{type}</div>
          </div>
          <div className="text-[#333333] font-bold   text-xl">
            <span>{value}</span>
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
                    <AiOutlineFall color="red" size={20} />
                  </span>
                ) : (
                  <span className="text-[##77e49d]">
                    {" "}
                    <AiOutlineRise color="lime" size={23} />
                  </span>
                )}

                <div>
                  <p className="flex text-sm">
                    <span
                      className={`text-sm font-bold ${
                        percentage > 50 ? "text-red-700" : "text-[#58FD4B]"
                      }  px-1`}
                    >
                      {percentageValue}%
                    </span>
                    {percentage > 50 ? (
                      <span className="pr-1 text-[#333333]">
                        Decrease from yesterday
                      </span>
                    ) : (
                      <span className="pr-1 text-[#333333]">
                        Increase from yesterday
                      </span>
                    )}
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
        <p className=" text-center text-sm text-[#a2a2a2] mt-5">
         {text}
        </p>
      </div>
    );
};

export default PerformanceWidget;
