"use client";
import { Budget } from "@/src/entities/budget";
import { CallTracking } from "@/src/entities/call_tracking";
import { DirectCount } from "@/src/entities/direct";
import { InfoBar } from "@/src/entities/info-bar";
import { MetrikaCount } from "@/src/features/metrika";
import NotificationBar from "@/src/shared/ui/notification/Notification";
import ClientHead from "../client-header/ClientHead";
import { useClientTableList } from "@/src/shared/hook/api/list-client-table/client-list";
import { usePayClient } from "@/src/shared/hook/api/pay-client/pay-lot";
import { Button } from "@mui/material";

export default function LineClient() {
  const {
    data: clientList,
    isLoading: clientListIsLoading,
    refetch: refetchClient,
  } = useClientTableList();
  const {
    data: payList,
    isLoading: payListIsLoading,
    refetch: refetchPay,
  } = usePayClient();

  const handelRefresh = () => {
    refetchClient();
    refetchPay();
  };

  const activeClient =
    "relative border border-gray-200 rounded-lg p-4 grid grid-cols-6 gap-4 mt-1";
  const disableClient =
    "relative border border-gray-200 rounded-lg p-4 grid grid-cols-6 gap-4 mt-1 bg-slate-100";

  if (clientListIsLoading || payListIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
        <Button onClick={handelRefresh}>Обновить</Button>
        <span>{clientList !== undefined ? clientList.data.length : 0}</span>
      </>
      {clientList?.data.map((x, index) => {
        return (
          <div
            key={x.id}
            className={x.status_client ? activeClient : disableClient}
          >
            <ClientHead data={x} index={index} />
            <Budget data={x} payList={payList} />
            <InfoBar data={x} payList={payList} />
            <DirectCount data={x} />
            <MetrikaCount data={x} />
            <CallTracking data={x} />
          </div>
        );
      })}
      <NotificationBar />
    </>
  );
}
