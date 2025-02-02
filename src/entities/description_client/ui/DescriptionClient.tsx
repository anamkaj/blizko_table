"use client";
import FormControlTemplate from "@/src/shared/ui/modal/FormControl";
import { LoadingButton } from "@mui/lab";
import { FormControl } from "@mui/material";
import React, { useState } from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export default function DescriptionClient() {
  const [loading, setLoading] = useState<boolean>(false);

  const iconBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M21 10V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6v-1.87l8.39-8.39c.44-.44 1-.68 1.61-.74m-7-5.5l5.5 5.5H14zm8.85 9.69l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"
      />
    </svg>
  );
  return (
    <FormControlTemplate button={""} icon={iconBtn}>
      <FormControl fullWidth className="mt-4">
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          maxRows={15}
          onScroll={(e) => e.preventDefault()}
          placeholder="Информация о клиенте"
          className="mt-10 font-normal text-sm outline-1 outline-slate-400"
        />
        <LoadingButton
          loading={loading}
          variant="outlined"
          className="mt-4 w-full"
          //   onClick={() => sendData()}
        >
          Сохранить
        </LoadingButton>
      </FormControl>
    </FormControlTemplate>
  );
}
