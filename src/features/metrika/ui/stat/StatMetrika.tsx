import NotificationProvider from "@/src/app/provider/context/Provider";
import IconStat from "./IconStat";
import { format } from "date-fns";
import { InfoClient } from "@/src/shared/api/list-client-blizko/get-client";


export default function StatMetrika({ statData }: { statData: InfoClient }) {
  const date1 = statData.date_start;
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd");

  const countMetrika = statData.count_metrika;

  return (
    <NotificationProvider>
      <IconStat
        countMetrika={countMetrika}
        date={date1}
        formattedDate={formattedDate}
      />
    </NotificationProvider>
  );
}
