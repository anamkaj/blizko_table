import { Tooltip } from "@mui/material";

export default function RowDown({ percent }: { percent: number }) {
  return (
    <div className="flex items-center gap-2">
      <Tooltip title="Процент перерасхода">
        <span className=" bg-slate-200 p-1 rounded-xl text-xs">{percent}%</span>
      </Tooltip>

      <Tooltip title="Идет перерасход бюджета">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          className="animate-bounce text-red-600"
        >
          <path
            fill="currentColor"
            d="m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7z"
          />
        </svg>
      </Tooltip>
    </div>
  );
}
