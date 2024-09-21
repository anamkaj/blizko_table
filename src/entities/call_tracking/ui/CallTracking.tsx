"use client";
import { InfoClient } from "@/src/shared/api/list-client-blizko/get-client";
import Counter from "./countret_tracking/Counter";
import StatCallTracking from "./stat_tracking/StatCallTracking";

export default function CallTracking({ data }: { data: InfoClient }) {
  return (
    <div className=" flex flex-col items-center break-keep relative w-full h-full">
      <Counter counter={data.call_tracking_id} />
      <StatCallTracking
        counter={data.call_tracking_id}
        dateStart={data.date_start}
        dateEnd={data.data_end}
      />
    </div>
  );
}
