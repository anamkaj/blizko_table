import { useNotification } from "@/src/app/provider/context/use-notifi";
import {
  IconBounceRate,
  IconBudget,
  IconClick,
} from "@/src/shared/ui/icon/AdsIcon";
import { IconButton } from "@mui/material";
import { IconGoalsBtnRefresh } from "@/src/shared/ui/icon/IconGoals";
import { useEffect } from "react";
import { useAdsStat } from "@/src/shared/hook/api/direct/get-click";

export default function IconAds({ login }: { login: string }) {
  const { notifi, handelChange, notified } = useNotification();
  const { data, isLoading, refetch } = useAdsStat(login);

  const handleRefetch = () => {
    refetch();
    handelChange(true);
  };

  const sumClick = data?.data ? data.data.clicks : 0;
  const sumCost = data?.data ? data.data.cost : 0;
  const bounceRate = data?.data ? data.data.bounce_rate : 0;

  //* Уведомления
  useEffect(() => {
    if (data !== undefined && notified) {
      notifi({
        time: data?.response_time,
        status: data?.status,
        notification:
          data.status == "ok"
            ? `Статистика по клиенту - ${login} получена`
            : `Ошибка получения статистики - ${data.data}`,
      });
    }
  }, [data]);

  return (
    <div className="relative w-full h-full">
      {isLoading ? (
        <div className="flex justify-center items-center w-full absolute bottom-0 right-0 left-0">
          <p className="text-xs font-bold">Загрузка...</p>
        </div>
      ) : (
        <div className="flex gap-2 absolute bottom-0 right-0 left-0 justify-center">
          <div className="flex items-center">
            <IconClick />
            <span className="text-sm font-bold"> {sumClick}</span>
          </div>
          <div className="flex items-center">
            <IconBudget />
            <span className="text-sm font-bold">
              {" "}
              {sumCost.toLocaleString("ru-RU")}₽
            </span>
          </div>
          <div className="flex items-center">
            <IconBounceRate />
            <span className="text-sm font-bold">{bounceRate}%</span>
          </div>

          <IconButton
            onClick={() => handleRefetch()}
            color="primary"
            size="small"
          >
            <IconGoalsBtnRefresh />
          </IconButton>
        </div>
      )}
    </div>
  );
}
