"use client";
import { InfoClient } from "@/src/views/main_page/model/type/blizko/clients-list";
import { DatePeriod } from "@/src/entities/date-period";
import ClientInfo from "./ClientInfo";

export default function ClientHead({
  data,
  index,
}: {
  data: InfoClient;
  index: number;
}) {
  const startDate = new Date(data.date_start);
  const endDate = new Date(data.data_end);

  return (
    <div className="flex flex-col gap-1 relative col-span-2">
      <span className="bg-green-400 h-full top-0 absolute left-[-37px] w-[18px] flex items-center justify-center font-thin">
        {index + 1}
      </span>

      <ClientInfo data={data} />

      <DatePeriod startDate={startDate} endDate={endDate} />
    </div>
  );
}
