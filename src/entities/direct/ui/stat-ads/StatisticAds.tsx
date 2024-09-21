import NotificationProvider from "@/src/app/provider/context/Provider";
import IconAds from "./IconAds";

export default function StatisticAds({ login }: { login: string }) {
  return (
    <>
      <NotificationProvider>
        <IconAds login={login} />
      </NotificationProvider>
    </>
  );
}
