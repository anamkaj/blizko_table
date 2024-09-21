"use client";
import { InfoClient } from "@/src/shared/api/list-client-blizko/get-client";
import CounterNumber from "./CounterNumber";
import StatMetrika from "./stat/StatMetrika";

export default function MetrikaCount({ data }: { data: InfoClient }) {
  return (
    <div className="flex flex-col items-center break-keep">
      <CounterNumber data={data} />
      <StatMetrika statData={data} />
    </div>
  );
}
