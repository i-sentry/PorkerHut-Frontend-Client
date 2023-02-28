import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
  className,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}) => (
  <div
    className={`${
      isActive ? "active-tab-left" : "active-tab-right"
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);
