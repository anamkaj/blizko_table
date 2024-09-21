import { Box, LinearProgress, Tooltip } from "@mui/material";
import RowDown from "./RowDown";
import RowUp from "./RowUp";

export default function ProgressCost({
  sum,
  consumption,
  percent,
}: {
  sum: number;
  consumption: number;
  percent: number;
}) {
  const max = sum > 80 ? "#f41313" : "#119df4";

  return (
    <div className="relative flex items-center gap-1">
      <Tooltip title="Израсходовано в %">
        <span
          className="text-xs text-white p-1 border border-gray-100 rounded-xl"
          style={{ backgroundColor: max }}
        >
          {sum}%
        </span>
      </Tooltip>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          title="Остаток бюджета на аккаунте"
          variant="determinate"
          value={sum}
          sx={{
            height: "15px",
            "& .MuiLinearProgress-bar1Determinate": {
              backgroundColor: max,
              borderRadius: "5px",
            },
            "& .MuiLinearProgress-bar2Determinate": {
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              backgroundColor: "dbdbdb",
            },
          }}
        />
        <span className="absolute text-[12px] text-black top-[8px] left-12">
          {consumption.toLocaleString("ru")} {"₽"}
        </span>
      </Box>
      {percent < 0 ? (
        <RowDown percent={percent} />
      ) : (
        <RowUp percent={percent} />
      )}
    </div>
  );
}
