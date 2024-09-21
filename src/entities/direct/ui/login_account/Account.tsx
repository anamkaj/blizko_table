import { AdsIcon, CounterIcon } from "@/src/shared/ui/icon/IconCalltracking";
import { Chip } from "@mui/material";

export default function AccountDirect({ login }: { login: string }) {
  return (
    <div className="flex items-center">
      <Chip
        icon={<AdsIcon />}
        label={login}
        size="small"
        variant="filled"
        className="p-2 font-thin text-gray-600"
        // onClick={() => handelClick()}
      />
    </div>
  );
}
