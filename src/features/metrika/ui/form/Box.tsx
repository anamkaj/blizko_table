import { Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useGoals } from "../../model/hook/get-goals";
import UpdateGoals from "./UpdateGoals";
import SaveBtn from "./SaveBtn";
import { useNotification } from "@/src/app/provider/context/use-notifi";

export default function Box({ id }: { id: number }) {
  const [checked, setChecked] = useState<
    {
      goal_id: number;
      status: boolean;
      name: string;
    }[]
  >([]);

  const { data, isLoading, refetch } = useGoals(id);
  const { notifi, handelChange, notified } = useNotification();

  const checkedTrue = checked.filter((x) => x.status === true).length;

  const handelChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked((state) => {
      return state.map((x) => {
        if (x.goal_id === Number(event.target.value)) {
          return {
            goal_id: x.goal_id,
            status: event.target.checked,
            name: x.name,
          };
        }
        return x;
      });
    });
  };

  const handleRefetch = () => {
    refetch();
    handelChange(true);
  };

  const handelClear = () => {
    setChecked((state) => {
      return state.map((x) => {
        return { goal_id: x.goal_id, status: false, name: x.name };
      });
    });
  };

  const goalsList =
    data?.data !== undefined && typeof data.data !== "string"
      ? data.data.goals
      : [];

  const err = typeof data?.data === "string" && (data.data as string);

  useEffect(() => {
    setChecked(() =>
      goalsList.map((x) => {
        return {
          goal_id: x.goal_id,
          status: x.status,
          name: x.name,
        };
      }),
    );
  }, [data]);

  //* Уведомления
  useEffect(() => {
    if (data !== undefined && notified) {
      notifi({
        time: data?.response_time,
        status: data?.status,
        notification:
          data.status == "ok"
            ? `Цели счетчика - ${id} получены`
            : `Ошибка получения целей - ${data.data}`,
      });
    }
  }, [data]);

  if (isLoading) {
    return <p className=" text-xs">Loading ...</p>;
  }
  return (
    <>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex gap-2 items-center">
          <Button onClick={() => handleRefetch()}>Обновить цели</Button>
          <span className="text-xs">{`Найдено: ${checked.length}`}</span>
          {" | "}
          <span className="text-xs">{`Выбрано: ${checkedTrue}`}</span>
        </div>

        <Button onClick={() => handelClear()}>Очистить</Button>
      </div>

      <UpdateGoals
        goalsList={goalsList}
        err={err}
        checked={checked}
        handelChecked={handelChecked}
      />

      <SaveBtn checked={checked} id={id} />
    </>
  );
}
