import { CallsIcon, FormIcon } from "@/src/shared/ui/icon/IconCalltracking";
import { IconButton } from "@mui/material";
import { IconGoalsBtnRefresh } from "@/src/shared/ui/icon/IconGoals";
import InfoClient from "../user_info/InfoClient";
import { useConversationClient } from "@/src/shared/hook/api/call-tacking/get-client";

type StatCallTrackingProps = {
  counter: number;
  dateStart: string;
  dateEnd: string;
};

export default function StatCallTracking({
  counter,
  dateStart,
  dateEnd,
}: StatCallTrackingProps) {
  const { data, isLoading, refetch } = useConversationClient(
    counter,
    dateStart,
    dateEnd,
  );

  const handleRefetch = () => {
    refetch();
  };

  //* Фильтрафия заявок на рекламные и всего
  const filterAdsCalls = () => {
    if (data?.data !== undefined) {
      return data.data.map((x) => {
        const calls = x.calls.filter(
          (z) =>
            (z.traffic_type == "Переходы по рекламе" &&
              z.conversations_number === 1) ||
            (z.traffic_type == "" && z.conversations_number === 1),
        ).length;
        const form = x.email.filter(
          (c) =>
            (c.traffic_type == "Переходы по рекламе" &&
              c.conversations_number === 1) ||
            (c.traffic_type == "" && c.conversations_number === 1),
        ).length;

        return {
          calls: calls,
          form: form,
        };
      });
    } else {
      return [
        {
          calls: 0,
          form: 0,
        },
      ];
    }
  };

  return (
    <div className="absolute bottom-0">
      {isLoading ? (
        <div className="text-xs font-bold">Загрузка...</div>
      ) : (
        data?.data.map((x) => {
          return (
            <div key={x.site_id} className=" flex gap-2">
              <div className="flex items-center gap-1">
                <CallsIcon />
                <span className="text-sm font-bold">
                  {filterAdsCalls()[0].calls}
                  {" | "}
                  {`${x.calls.length}`}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FormIcon />
                <span className="text-sm font-bold">
                  {filterAdsCalls()[0].form}
                  {" | "}
                  {`${x.email.length}`}
                </span>
              </div>
              <InfoClient counter={counter} />

              <IconButton
                onClick={() => handleRefetch()}
                className=""
                color="primary"
                size="small"
              >
                <IconGoalsBtnRefresh />
              </IconButton>
            </div>
          );
        })
      )}
    </div>
  );
}
