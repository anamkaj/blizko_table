import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNotification } from "@/src/app/provider/context/use-notifi";
import { useStatictics } from "../../model/hook/get-goals";
import { filterGoals } from "../../model/name-goals";

import {
  IconGoalsForm,
  IconGoalsWhatsapp,
  IconGoalsPhone,
  IconGoalsCall,
  IconGoalsBtnRefresh,
} from "@/src/shared/ui/icon/IconGoals";

type IconStatProps = {
  countMetrika: number;
  date: string;
  formattedDate: string;
};

export default function IconStat({
  countMetrika,
  date,
  formattedDate,
}: IconStatProps) {
  const [goals, setGoals] = useState<{
    form: number;
    whatsapp: number;
    phone: number;
    call: number;
  }>({
    form: 0,
    whatsapp: 0,
    phone: 0,
    call: 0,
  });

  const { notifi, handelChange, notified } = useNotification();

  const { data, isLoading, refetch } = useStatictics(
    countMetrika,
    date,
    formattedDate,
  );

  const handleRefetch = () => {
    refetch();
    handelChange(true);
  };

  useEffect(() => {
    if (data !== undefined && data.data !== undefined) {
      const result = filterGoals(data.data.goal);
      setGoals(result);
    }
  }, [data]);

  //* Уведомления
  useEffect(() => {
    if (data !== undefined && notified) {
      notifi({
        time: data?.response_time,
        status: data?.status,
        notification:
          data.status == "ok"
            ? `Статистика по счетчику - ${countMetrika} получены`
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
            <IconGoalsForm />
            {/* <h3 className=" text-xs">Формы:</h3> */}
            <span className="text-sm font-bold"> {goals.form}</span>
          </div>
          <div className=" flex items-center">
            <IconGoalsWhatsapp />
            {/* <h3 className=" text-xs">Whatsapp:</h3> */}
            <span className="text-sm font-bold">{goals.whatsapp}</span>
          </div>
          <div className=" flex items-center">
            <IconGoalsPhone />
            {/* <h3 className=" text-xs">Показать телефон:</h3> */}
            <span className="text-sm font-bold">{goals.phone}</span>
          </div>
          <div className=" flex items-center">
            <IconGoalsCall />
            {/* <h3 className=" text-xs">Call Tracking:</h3> */}
            <span className="text-sm font-bold">{goals.call}</span>
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
