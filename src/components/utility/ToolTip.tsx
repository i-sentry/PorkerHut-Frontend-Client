import { ReactNode } from "react";
export const Tooltip = ({
  message,
  children,
  className,
}: {
  message: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`group relative flex flex-col  ${className || "items-center"}`}
    >
      {children}
      <div className="absolute top-0  mt-6 hidden flex-col items-center group-hover:flex">
        <div className="mt-[2px] h-3 w-3 rotate-45 bg-gray-600"></div>
        <span className="relative top-[-6px] z-10 whitespace-nowrap rounded-md bg-gray-600 p-2 text-xs leading-none text-white shadow-lg">
          {message}
        </span>
      </div>
    </div>
  );
};
