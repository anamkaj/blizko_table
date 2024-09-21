"use client";
import { useOutsideClick } from "@/src/shared/hook/useOutSideClick";
import { InfoClient } from "@/src/views/main_page/model/type/blizko/clients-list";
import { PayType } from "@/src/views/main_page/model/type/blizko/pay";
import { Chip } from "@mui/material";
import { useRef, useState } from "react";

export default function InfoBar({
  data,
  payList,
}: {
  data: InfoClient;
  payList: PayType;
}) {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef(null);

  const handleClick = () => {
    setActive(!active);
  };

  const lotClient = payList.data.find((item) => {
    if (item.fk_pay_table_client_table_id == data.id) {
      return item;
    }
  });

  useOutsideClick({ ref, callback: handleClick });

  const InfoBarActive = () => {
    return (
      <div ref={ref} className="absolute right-8 bottom-0 w-[800px]">
        <div className="shadow-lg border border-gray-300 bg-white rounded-lg p-2 flex gap-2 items-start justify-between">
          <div className=" flex flex-col items-center gap-2 break-keep">
            <Chip
              label="Регион клиента"
              size="small"
              variant="filled"
              className="p-2 font-thin text-gray-600 "
            />
            <span className="text-xs font-bold">{data.region_client}</span>
          </div>

          <div className=" flex flex-col items-center gap-2 break-keep">
            <Chip
              label="Лот"
              size="small"
              variant="filled"
              className="p-2 font-thin text-gray-600 "
            />
            <span className="text-xs font-bold">{lotClient?.lot || ""}</span>
          </div>

          <div className=" flex flex-col items-center gap-2 break-keep">
            <Chip
              label="Менеджер"
              size="small"
              variant="filled"
              className="p-2 font-thin text-gray-600 "
            />
            <span className="text-xs font-bold">{data.account_manager}</span>
          </div>

          <div className=" flex flex-col items-center gap-2 break-keep">
            <Chip
              label="Специалист"
              size="small"
              variant="filled"
              className="p-2 font-thin text-gray-600"
            />
            <span className="text-xs font-bold">{data.specialist_ads}</span>
          </div>
          <div className=" flex flex-col items-center gap-2 break-keep">
            <Chip
              label="Metrica"
              size="small"
              variant="filled"
              className="p-2 font-thin text-gray-600"
            />
            <span className="text-xs font-bold">{data.count_metrika}</span>
          </div>
          <div className=" flex flex-col items-center gap-2 break-keep">
            <Chip
              label="Direct"
              size="small"
              variant="filled"
              className="p-2 font-thin text-gray-600"
            />
            <span className="text-xs font-bold">{data.direct_login}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute right-2 bottom-2">
      <div onClick={() => handleClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="21" fill="#2196f3" />
          <path fill="#fff" d="M22 22h4v11h-4z" />
          <circle cx="24" cy="16.5" r="2.5" fill="#fff" />
        </svg>
      </div>
      <div>{active && InfoBarActive()}</div>
    </div>
  );
}
