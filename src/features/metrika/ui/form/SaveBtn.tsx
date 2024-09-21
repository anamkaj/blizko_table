import { LoadingButton } from "@mui/lab";
import React, { useEffect } from "react";
import { useUpdateGoals } from "../../model/hook/get-goals";
import { useNotification } from "@/src/app/provider/context/use-notifi";

type SaveBtnProps = {
  id: number;
  checked: { goal_id: number; status: boolean; name: string }[];
};

export default function SaveBtn({ checked, id }: SaveBtnProps) {
  const { mutation } = useUpdateGoals(checked);
  const { notifi, handelChange, notified } = useNotification();


  const handelSave = () => {
    mutation.mutate();
    handelChange(true);
  };

  useEffect(() => {
    if (mutation.data !== undefined && notified) {
      notifi({
        time: mutation.data.response_time,
        status: mutation.data.status,
        notification:
          mutation.data.status == "ok"
            ? `${id} список целей обнавлен успешно `
            : `Ошибка обновления - ${mutation.data.data}`,
      });
    }
  }, [mutation]);

  return (
    <>
      <LoadingButton
        loading={mutation.isPending}
        variant="contained"
        className="mt-8 w-full"
        onClick={() => handelSave()}
      >
        Сохранить
      </LoadingButton>
    </>
  );
}
