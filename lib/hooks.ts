import { RefObject, useEffect, useState } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

function useHover<T extends HTMLElement>(ref: RefObject<T>): Boolean {
  const [value, setValue] = useState<Boolean>(false);
  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);
  if (ref.current) {
    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);
  }
  return value;
}

export { useOutsideClick, useHover };
