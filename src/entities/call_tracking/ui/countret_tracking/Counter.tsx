import { CounterIcon } from "@/src/shared/ui/icon/IconCalltracking";
import { Chip } from "@mui/material";

export default function Counter({ counter }: { counter: number }) {
  return (
    <div className="flex items-center">
      <Chip
        icon={<CounterIcon />}
        label={counter == 0 ? "Нет данных" : counter}
        size="small"
        variant="filled"
        className="p-2 font-thin text-gray-600"
        // onClick={() => handelClick()}
      />
    </div>
  );
}
