"use client";
import { InfoClient } from "@/src/shared/api/list-client-blizko/get-client";
import AccountDirect from "./login_account/Account";
import StatisticAds from "./stat-ads/StatisticAds";

export default function DirectCount({ data }: { data: InfoClient }) {
  const login = data.direct_login;

  return (
    <div className="flex flex-col items-center break-keep">
      <AccountDirect login={login} />
      <StatisticAds login={login} />
    </div>
  );
}
