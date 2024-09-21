import CommentClient from "@/src/features/note/ui/Comment";
import { ClientAvatar } from "@/src/shared/ui/icon/ClientInfo";
import { InfoClient } from "@/src/views/main_page/model/type/blizko/clients-list";
import { Chip, Tooltip } from "@mui/material";
import Link from "next/link";

export default function ClientInfo({ data }: { data: InfoClient }) {
  const name = data.name;
  const id = data.id;
  return (
    <div className="flex items-center gap-1">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={data.url_site}
        className="text-slate-700 hover:underline hover:text-blue-600 hover:bg-slate-100 uppercase font-semibold border px-4 rounded-full flex items-center gap-1"
      >
        <ClientAvatar />
        {data.name}
      </Link>
      <Tooltip title="Адверта | Медиаплощадь">
        <Chip
          label={data.pay_company[0]}
          size="small"
          variant="filled"
          className={
            data.pay_company == "Адверта"
              ? " bg-purple-500 text-white text-xs font-semibold"
              : " bg-green-500 text-white text-xs font-semibold"
          }
        />
      </Tooltip>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={data.url_crm}
        className="text-slate-700 hover:underline hover:text-blue-600 font-bold border px-2 rounded-lg text-md bg-slate-100"
      >
        {data.center_accounting}
      </Link>

      <div
        className={
          data.plan == "Комбо"
            ? "text-xs uppercase bg-yellow-300 px-2 absolute left-[-17px] rounded-r-full top-[-17px]"
            : "text-xs text-white uppercase bg-sky-600 px-2 absolute left-[-17px] rounded-r-full top-[-17px]"
        }
      >
        {data.plan}
      </div>
      <CommentClient name={name} id={id} />
    </div>
  );
}
