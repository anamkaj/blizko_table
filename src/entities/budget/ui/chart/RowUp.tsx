import { Tooltip } from "@mui/material";

export default function RowUp({ percent }: { percent: number }) {
  return (
    <div className="flex items-center gap-2">
      <Tooltip title="Процент недорасхода">
        <span className=" bg-slate-200 p-1 rounded-xl text-xs">{percent}%</span>
      </Tooltip>
      
      <Tooltip title="Можно поднять бюдежт">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="animate-bounce text-green-500"
          >
            <path
              fill="currentColor"
              d="M7.4 18.4L6 17l6-6l6 6l-1.4 1.4l-4.6-4.575zm0-6L6 11l6-6l6 6l-1.4 1.4L12 7.825z"
            />
          </svg>
        </span>
      </Tooltip>
    </div>
  );
}
