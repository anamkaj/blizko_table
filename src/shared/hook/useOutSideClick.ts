import { RefObject, useEffect } from "react";

type OutSideHook = {
  ref: RefObject<HTMLElement>;
  callback: () => void;
};

export const useOutsideClick = ({ ref, callback }: OutSideHook) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
};
