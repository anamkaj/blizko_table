import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import UserInfoTracking from "../user_info/UserInfoTracking";
import { useOutsideClick } from "@/src/shared/hook/useOutSideClick";
import { InfoIcon } from "@/src/shared/ui/icon/IconCalltracking";

export default function InfoClient({ counter }: { counter: number }) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setOpen(false);
  };
  useOutsideClick({ ref, callback: handleClick });

  return (
    <div className="flex items-center gap-1 relative">
      <IconButton onClick={() => setOpen(!open)} size="small" color="secondary">
        <InfoIcon />
      </IconButton>

      <div
        key={counter}
        ref={ref}
        hidden={!open}
        className="absolute bottom-[30px] left-[-70px] bg-slate-800 opacity-85 p-2 border w-[200px] rounded-lg z-30"
      >
        {counter !== 0 ? (
          <UserInfoTracking counter={counter} />
        ) : (
          <p className="flex justify-center text-white text-xs uppercase">
            Счетчик отсутствует 😩
          </p>
        )}
      </div>
    </div>
  );
}
