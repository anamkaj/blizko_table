import {
  Autocomplete,
  Button,
  FormControl,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { IconGoalsBtnRefresh } from "@/src/shared/ui/icon/IconGoals";
import { useCallTrackingClient } from "@/src/shared/hook/api/call-tacking/get-client";
import { NewClientContext } from "@/src/app/provider/new-client/NewClientProvider";
import Link from "next/link";
import { useClientListAds } from "@/src/shared/hook/api/direct/get-click";

export default function StatisticAccount() {
  const { data: adsList, refetch: getAdsList } = useClientListAds();
  const { data: callList } = useCallTrackingClient();
  const { setNewClientData } = useContext(NewClientContext);

  const [accountData, setAccountData] = useState({
    direct_login: "",
    count_metrika: NaN,
    call_tracking_id: NaN,
  });

  const changeLogin = (value: string) => {
    setAccountData((prev) => ((prev.direct_login = value.trim()), { ...prev }));
  };

  const changeMetrika = (value: string) => {
    setAccountData(
      (prev) => ((prev.count_metrika = Number(value.trim())), { ...prev }),
    );
  };

  const changeCallTracking = (value: number) => {
    setAccountData((prev) => ((prev.call_tracking_id = value), { ...prev }));
  };

  const getClientAds = () => {
    getAdsList();
  };

  const noCallTracking = () => {
    setAccountData((prev) => ((prev.call_tracking_id = 0), { ...prev }));
  };

  // const getTrackingList = () => {
  //   getCallList();
  // };

  const changeContext = () => {
    setNewClientData((prevState) => ({
      ...prevState,
      direct_login: accountData.direct_login,
      count_metrika: accountData.count_metrika,
      call_tracking_id: accountData.call_tracking_id,
    }));
  };

  useEffect(() => {
    changeContext();
  }, [accountData]);

  return (
    <div className="mt-6 grid grid-cols-3 items-center gap-2">
      <Stack className="relative">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          size="small"
          loading={true}
          loadingText="Обновите данные"
          className="text-xs"
          onChange={(e, value) =>
            changeLogin(typeof value !== "string" ? value.login : "")
          }
          options={
            adsList?.data?.map((option) => {
              return {
                ...option,
                label: option.login,
              };
            }) || []
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Логин Директ"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <IconButton
          onClick={() => getClientAds()}
          className="absolute right-0 top-[-28px]"
          color="primary"
          size="small"
        >
          <IconGoalsBtnRefresh />
        </IconButton>
      </Stack>

      <FormControl fullWidth>
        <TextField
          required
          size="small"
          id="metrika"
          label="Номер счетчика Метрики"
          variant="outlined"
          value={
            Number.isNaN(accountData.count_metrika)
              ? ""
              : accountData.count_metrika
          }
          className="w-full"
          onChange={(e) => changeMetrika(e.target.value)}
        />
        <Link
          className="absolute right-0 top-[-28px] uppercase hover:underline text-blue-500"
          href="https://metrika.yandex.ru/list?"
          target="_blank"
        >
          <span className="text-xs">Метрика (Ссылка)</span>
        </Link>
      </FormControl>

      <Stack className="relative">
        <Autocomplete
          freeSolo
          id="call-tracking"
          disableClearable
          disabled={accountData.call_tracking_id === 0}
          size="small"
          loading={true}
          loadingText="Обновите данные"
          onInputChange={() => changeCallTracking(NaN)}
          onChange={(e, value, reason) =>
            changeCallTracking(typeof value !== "string" ? value.site_id : NaN)
          }
          options={
            callList?.data.map((option) => {
              return {
                ...option,
                label: option.sitename,
              };
            }) || []
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Номер(ID) Каллтрекинга"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Button
          onClick={() => noCallTracking()}
          className="absolute right-0 top-[-28px]"
          color="primary"
          size="small"
        >
          <span className="text-xs">Не подключено</span>
        </Button>
      </Stack>
    </div>
  );
}
