import React from "react";
import { createPopper, Placement } from "@popperjs/core";
import { useOutsideAlerter } from "./OutsideAlerter";

type PopoverTypes = {
  buttonContent: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  closeOnClick?: boolean;
  placementOrder?: Placement;
};

const Popover = ({
  buttonContent,
  children,
  title,
  closeOnClick,
  placementOrder,
}: PopoverTypes) => { 
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef<HTMLButtonElement>();
  const popoverRef = React.createRef<HTMLDivElement>();
  useOutsideAlerter(popoverRef, popoverShow, () => setPopoverShow(false));
  const openPopover = () => {
    if (btnRef.current && popoverRef.current) {
      createPopper(btnRef.current, popoverRef.current, {
        placement: placementOrder ? placementOrder : "bottom",
        strategy: "fixed",
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              mainAxis: true, // true by default
              // margin: 320,
              // padding: 320,
              altAxis: true,
            },
          },

          {
            name: "offset",
            options: {
              offset: ({ placement, reference, popper }: any) => {
                if (placement === "bottom") {
                  // popper.width = 252
                  if (popper.width === 0) {
                    // return [-400, -9999]
                    return [0, 20];
                  } else {
                    return [0, 20];
                  }
                } else {
                  return [];
                }
              },
            },
          },

          {
            name: "flip",
            options: {
              fallbackPlacements: ["left"],
            },
          },
        ],
      });
    }
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className="flex  ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            {buttonContent}
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-white shadow-lg max-h-[50%] overflow-y-auto border mr-3 block z-50 font-normal leading-normal text-sm max-w-sm text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              {title && (
                <div className="font-semibold p-3 mb-0 border-b border-solid border-blueGray-100  rounded-t-lg">
                  {title}
                </div>
              )}
              <div
                onClick={() => {
                  closeOnClick && setPopoverShow(false);
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popover;
