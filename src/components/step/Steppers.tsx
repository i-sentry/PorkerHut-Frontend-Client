// import React, { useState, useEffect, useRef } from "react";

// interface IStepperProps {
//   steps: string[];
//   currentStep: number;
// }

// const Stepper = (steps: any, currentStep: number) => {
//   const [newStep, setNewStep] = useState<any[]>([]);
//   const stepsRef = useRef();

//   const updateStep = (stepNumber: number, steps: string) => {

//     const newSteps = [...steps];
//     console.log(newSteps);
//     let count = 0;
//     while (count < newSteps.length) {

//       if (count === stepNumber) {
//         newSteps[count] = {
//           ...newSteps[count],
//           highlighted: true,
//           selected: true,
//           completed: true,
//         };
//         count++;
//       }

//       //step completed
//       else if (count < stepNumber) {
//         newSteps[count] = {
//           ...newSteps[count],
//           highlighted: false,
//           selected: true,
//           completed: true,
//         };
//         count++;
//       }
//       //step pending
//       else {
//         newSteps[count] = {
//           ...newSteps[count],
//           highlighted: false,
//           selected: false,
//           completed: false,
//         };
//         count++;
//       }
//     }

//     return newSteps;
//   };

//   useEffect(() => {
//     const stepsState = steps.map((step: number, index: number) =>
//       Object.assign(
//         {},
//         {
//           description: step,
//           completed: false,
//           highlighted: index === 0 ? true : false,
//           selected: index === 0 ? true : false,
//         }
//       )
//     );
//     // console.log(Object.prototype.toString.call(stepsState));
//     stepsRef.current = stepsState;

//     // const current = updateStep(currentStep - 1, stepsRef.current);
//       const current = stepsRef.current
//         ? updateStep(currentStep - 1, stepsRef.current)
//         : currentStep - 1;

//     setNewStep(current as any);
//   }, [steps, currentStep]);

//   const stepsDisplay = newStep.map((step, index) => {
//     return (
//       <div
//         key={index}
//         className={
//           index !== newStep.length - 1
//             ? "w-full flex items-center"
//             : "flex items-center"
//         }
//       >
//         <div className="relative flex flex-col items-center text-teal-600">
//           <div
//             className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
//               step.selected
//                 ? "bg-green-600 text-white font-bold border border-green-600 "
//                 : ""
//             }`}
//           >
//             {step.completed ? (
//               <span className="text-white font-bold text-xl">&#10003;</span>
//             ) : (
//               index + 1
//             )}
//           </div>
//           <div
//             className={`absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase ${
//               step.highlighted ? "text-gray-900" : "text-gray-400"
//             }`}
//           >
//             {step.description}
//           </div>
//         </div>
//         <div
//           className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
//             step.completed ? "border-green-600" : "border-gray-300 "
//           }  `}
//         ></div>
//       </div>
//     );
//   });

//   return (
//     <div className="mx-4 p-4 flex justify-between items-center">
//       {stepsDisplay}
//     </div>
//   );
// };
// export default Stepper;

import React, { useState, useEffect, useRef } from "react";
import { HiOutlineCheck, HiOutlineChevronDoubleRight } from "react-icons/hi";

interface IStepProps {
  steps: string[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: IStepProps) => {
  const [newStep, setNewStep] = useState<any[]>([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber: number, steps: string[]) => {
    const newSteps = [...steps];
    
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          //@ts-ignore
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          //@ts-ignore
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          //@ts-ignore
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    //@ts-ignore
    stepsRef.current = stepsState;
    //@ts-ignore
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? " flex items-center justify-between"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center ">
          <div
            className={`transition duration-500 ease-in-out  border-gray-300 h-8 w-8 flex items-center justify-center py-3  ${
              step.selected
                ? "bg-[#197B30] text-white font-bold"
                : "bg-[#A2A2A2] text-white"
            }`}
          >
            {step.completed ? (
                        <span className="text-white font-bold text-xl">
                            <HiOutlineCheck />
                        </span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          ></div>
        </div>
        <div
          className={`flex items-center justify-between text-xs transition pl-2 duration-500 ease-in-out  ${
            step.completed ? "text-green-600" : "border-gray-300 "
          }  `}
        >
          <span className="">{step.description}</span>
          <HiOutlineChevronDoubleRight />
        </div>
      </div>
    );
  });

  return (
    <div className="flex items-center gap-2">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;
