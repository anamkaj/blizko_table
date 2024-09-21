import { formatDate, parse } from "date-fns";
import {
  UserDate,
  UserMoney,
  UserName,
  UserPhone,
  WebIcon,
} from "@/src/shared/ui/icon/IconCalltracking";
import { IconButton } from "@mui/material";
import { IconGoalsBtnRefresh } from "@/src/shared/ui/icon/IconGoals";
import { useCallTrackingClient } from "@/src/shared/hook/api/call-tacking/get-client";

export default function UserInfoTracking({ counter }: { counter: number }) {
  const span = "text-xs uppercase";
  const div = "flex items-center gap-2 text-white";
  const { data, isLoading, refetch } = useCallTrackingClient();

  const transformDate = (date: string | undefined) => {
    if (date !== undefined && date !== null) {
      const parsedDate = parse(date, "yyyy-MM-dd", new Date());
      const transform = formatDate(parsedDate, "dd.MM.yy");
      return transform;
    } else {
      return "❓";
    }
  };

  const handleRefetch = () => {
    refetch();
  };

  const filterCounter = () => {
    if (data?.data !== undefined) {
      return data?.data.map((f) => f.site_id).includes(counter);
    }
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!filterCounter()) {
    return (
      <p className="text-center text-xs text-white">Нет такого счетчика</p>
    );
  }

  return (
    <>
      {data?.data.map((x) => {
        if (x.site_id == counter) {
          return (
            <div key={x.id} className=" flex flex-col mt-2 gap-1 ">
              <div className={div}>
                <UserName />
                <span className={span}>{x.sitename}</span>
              </div>
              <div className={div}>
                <UserMoney />
                <span className="text-xs text-white">
                  {x.not_enough_money ? "Нет продления" : "Продление есть"}
                </span>
              </div>

              <div className={div}>
                <UserPhone />
                <span className={span}>{x.number[0]}</span>
              </div>

              <div className={div}>
                <WebIcon />
                <span className="text-xs">{`www.${x.domains}`}</span>
              </div>

              <div className={div}>
                <UserDate />
                <span className={span}>{transformDate(x.license_start)}</span>

                <span className={span}>{transformDate(x.license_end)}</span>
                <IconButton
                  onClick={() => handleRefetch()}
                  className="text-white"
                  color="primary"
                  size="small"
                >
                  <IconGoalsBtnRefresh />
                </IconButton>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
