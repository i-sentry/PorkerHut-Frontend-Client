import { ReactNode } from "react";
export const Tooltip = ({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute top-0  flex-col items-center hidden mt-6 group-hover:flex">
        <div className="w-3 h-3 mt-[2px] rotate-45 bg-gray-600"></div>
        <span className="relative z-10 p-2 top-[-6px] text-xs leading-none text-white whitespace-nowrap bg-gray-600 shadow-lg rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
};
