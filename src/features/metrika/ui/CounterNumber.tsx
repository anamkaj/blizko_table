
import { Chip } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";
import NotificationProvider from "@/src/app/provider/context/Provider";
import { InfoClient } from "@/src/shared/api/list-client-blizko/get-client";

export default function CounterNumber({ data }: { data: InfoClient }) {
  const [opened, setOpened] = useState<boolean>(false);

  const handelClick = () => {
    setOpened(!opened);
  };
  return (
    <>
      <div className="flex items-center">
        <Chip
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15 21H9V3h6zm-4-2h2V5h-2zm-3 2H2V11h6zm-4-2h2v-6H4zm18 2h-6V8h6zm-4-2h2v-9h-2z"
              />
            </svg>
          }
          label={data.count_metrika}
          size="small"
          variant="filled"
          className="p-2 font-thin text-gray-600 "
          onClick={() => handelClick()}
        />
      </div>
      <NotificationProvider>
        <Form active={handelClick} state={opened} id={data.count_metrika} />
        {/* <NotificationBar /> */}
      </NotificationProvider>
    </>
  );
}
