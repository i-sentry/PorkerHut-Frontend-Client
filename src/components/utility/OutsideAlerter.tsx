import { useEffect, RefObject } from "react";

export const useOutsideAlerter = (
  ref: RefObject<any>,
  itemActive: boolean,
  fireEvent: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (itemActive) {
          fireEvent();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, itemActive, fireEvent]);
};
