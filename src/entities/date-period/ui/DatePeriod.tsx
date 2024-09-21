import { useDate } from "@/src/shared/hook/useDate";
import { transformDate } from "@/src/shared/utils/fn";
import { Chip, Tooltip } from "@mui/material";

export default function DatePeriod({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const { timeCalc, timeCalcRange, timeCalcEnd } = useDate(startDate, endDate);
  return (
    <div className="flex gap-2 items-center absolute bottom-0">
      <Chip
        label={transformDate(startDate)}
        size="small"
        variant="outlined"
        // icon={<IconCalendar />}
        className="p-2 font-thin"
      />
      <Chip
        label={transformDate(endDate)}
        size="small"
        variant="outlined"
        // icon={<IconCalendar />}
        className="p-2 font-thin"
      />

      <Tooltip title="Всего дней">
        <Chip
          label={timeCalc()}
          size="small"
          variant="filled"
          className=" font-thin"
        />
      </Tooltip>

      <Tooltip title="Осталось дней">
        <Chip
          label={timeCalcRange()}
          size="small"
          variant="filled"
          className={
            timeCalcRange() < 4
              ? "font-thin bg-red-500 animate-bounce text-white"
              : "font-thin"
          }
        />
      </Tooltip>

      <Tooltip title="Разместили дней">
        <Chip
          label={timeCalcEnd()}
          size="small"
          variant="filled"
          className="font-thin"
        />
      </Tooltip>
    </div>
  );
}
