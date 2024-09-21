import { useAddPayClient } from "@/src/shared/hook/api/pay-client/pay-lot";
import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { z } from "zod";

const Info = z.object({
  sum: z.number().refine((value) => Number.isNaN(value), {
    message: "Сумма должна быть заполнена",
  }),
  lot: z.string().refine((value) => value !== "Не задан", {
    message: "Лот должен быть заполнен",
  }),
});

type SchemaInfo = z.infer<typeof Info>;

export default function PayInput({
  newClient,
}: {
  newClient: { id: number; name_client: string };
}) {
  const [payInfo, setPayInfo] = useState<SchemaInfo>({
    sum: NaN,
    lot: "Не задан",
  });
  const data = {
    ...payInfo,
    id: newClient.id,
    name_client: newClient.name_client,
  };

  const { mutation } = useAddPayClient(data);

  const handelAddNewPay = () => {
    mutation.mutate();
  };

  const changeSum = (sum: string) => {
    setPayInfo((value) => ((value.sum = Number(sum.trim())), { ...value }));
  };
  const changeLot = (lot: string) => {
    setPayInfo((value) => ((value.lot = lot.trim()), { ...value }));
  };
  return (
    <>
      <div className="flex gap-2">
        <FormControl fullWidth className="col-span-2">
          <TextField
            required
            id="outlined-read-only-input"
            label="Название клиента"
            variant="outlined"
            value={newClient.name_client}
            className="w-full"
          />
        </FormControl>
        <FormControl fullWidth className="col-span-2">
          <TextField
            required
            id="outlined-read-only-input"
            label="Сумма"
            variant="outlined"
            value={payInfo.sum}
            className="w-full"
            onChange={(e) => changeSum(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth className="col-span-2">
          <TextField
            required
            id="outlined-read-only-input"
            label="Лот"
            variant="outlined"
            value={payInfo.lot}
            className="w-full"
            onChange={(e) => changeLot(e.target.value)}
          />
        </FormControl>
      </div>
      <Button onClick={handelAddNewPay}>Добавить лот</Button>
    </>
  );
}
