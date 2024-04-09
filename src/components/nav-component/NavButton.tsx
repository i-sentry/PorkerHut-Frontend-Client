import React from "react";
import { useNavigate } from "react-router-dom";
import { useSidebarState } from "../../store/overlay";

interface IProps {
  text: string;
  className: string;
  path: string;
}

const NavButton = ({ text, className, path }: IProps) => {
  const navigate = useNavigate();
  const toggleSideBar = useSidebarState((state) => state.toggleSidebar);

  return (
    <button
      onClick={() => {
        navigate(path);
        toggleSideBar(false);
      }}
      className={className}
    >
      {text}
    </button>
  );
};

export default NavButton;
