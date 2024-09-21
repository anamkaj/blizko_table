import { NewClientContext } from "@/src/app/provider/new-client/NewClientProvider";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { z } from "zod";
import InputPercent from "./PercentageInput";

const Info = z.object({
  account_manager: z.string().refine((value) => value !== "Не задан", {
    message: "Менеджер должен быть заполнен",
  }),
  percentage_lead: z
    .number()
    .refine((value) => !Number.isNaN(value) && value !== 0, {
      message: "Процент должен быть заполнен",
    }),
  region_client: z.string().refine((value) => value !== "Не задан", {
    message: "Регион должен быть заполнен",
  }),
  specialist_ads: z.string().refine((value) => value !== "Не задан", {
    message: "Специалист должен быть заполнен",
  }),
  specific_client: z
    .string()
    .min(5, "Вид деятельности должен быть заполнен")
    .refine((value) => value !== "Не задан", {
      message: "Вид деятельности должен быть заполнен",
    }),
});

type SchemaInfo = z.infer<typeof Info>;

export default function InfoClient() {
  const { setNewClientData } = useContext(NewClientContext);
  const [otherInfo, setOtherInfo] = useState<SchemaInfo>({
    account_manager: "Не задан",
    percentage_lead: NaN,
    region_client: "Не задан",
    specialist_ads: "Не задан",
    specific_client: "Не задан",
  });


  const changeManager = (name: string) => {
    setOtherInfo(
      (value) => ((value.account_manager = name.trim()), { ...value }),
    );
  };
  const changeSpecialist = (name: string) => {
    setOtherInfo(
      (value) => ((value.specialist_ads = name.trim()), { ...value }),
    );
  };

  const changeRegion = (region: string) => {
    setOtherInfo(
      (value) => ((value.region_client = region.trim()), { ...value }),
    );
  };
  const changeSpecific = (spec: string) => {
    setOtherInfo(
      (value) => ((value.specific_client = spec.trim()), { ...value }),
    );
  };

  const changePercentage = (percentage: string) => {
    setOtherInfo(
      (value) => ((value.percentage_lead = Number(percentage)), { ...value }),
    );
  };

  const changeContext = () => {
    if (Info.safeParse({ ...otherInfo }).success) {
      setNewClientData((prevState) => ({
        ...prevState,
        account_manager: otherInfo.account_manager,
        percentage_lead: otherInfo.percentage_lead,
        region_client: otherInfo.region_client,
        specialist_ads: otherInfo.specialist_ads,
        specific_client: otherInfo.specific_client,
      }));
    }
  };

  useEffect(() => {
    changeContext();
  }, [otherInfo]);

  return (
    <>
      <h3 className="text-xs mt-4">Дополниетльная информация</h3>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <FormControl className="">
          <InputLabel id="select-account-manager">Аккаунт-Менеджер</InputLabel>
          <Select
            labelId="select-label-company"
            id="account-manager"
            label="account-manager"
            size="small"
            value={otherInfo.account_manager}
            onChange={(e) => changeManager(e.target.value as string)}
            className="w-full"
          >
            <MenuItem value={"Не задан"}>Не задан</MenuItem>
            <MenuItem value={"Кизина"}>Кизина</MenuItem>
            <MenuItem value={"Приказчикова"}>Приказчикова</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="">
          <InputLabel id="select-specialist-ads">Специалист</InputLabel>
          <Select
            labelId="select-specialist-ads"
            id="specialist-ads"
            label="specialist-ads"
            size="small"
            value={otherInfo.specialist_ads}
            onChange={(e) => changeSpecialist(e.target.value as string)}
            className="w-full"
          >
            <MenuItem value={"Не задан"}>Не задан</MenuItem>
            <MenuItem value={"Цырлина"}>Цырлина</MenuItem>
            <MenuItem value={"Пеньков"}>Пеньков</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-2">
        <FormControl fullWidth>
          <TextField
            required
            id="percentage_lead"
            label="Процент ведения"
            // value={otherInfo.percentage_lead}
            InputProps={{
              inputComponent: InputPercent,
              inputProps: {
                value: otherInfo.percentage_lead,
              },
            }}
            onChange={(e) => changePercentage(e.target.value)}
          />
          <Button
            onClick={() => changePercentage("0.45")}
            className="absolute right-0 top-[-28px]"
            color="primary"
            size="small"
          >
            <span className="text-xs">0.45%</span>
          </Button>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            required
            size="small"
            value={otherInfo.region_client}
            id="region"
            label="Регион клиента"
            variant="outlined"
            className="w-full"
            onChange={(e) => changeRegion(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth className=" col-span-2">
          <TextField
            required
            size="small"
            value={otherInfo.specific_client}
            id="specific"
            label="Вид деятельности"
            variant="outlined"
            className="w-full"
            onChange={(e) => changeSpecific(e.target.value)}
          />
        </FormControl>
      </div>
      <div className="mt-2 col-span-5">
        <span className="text-red-500 text-xs ">
          {Info.safeParse({ ...otherInfo }).success
            ? ""
            : `${Info.safeParse({ ...otherInfo }).error?.issues[0].message}`}
        </span>
      </div>
    </>
  );
}
