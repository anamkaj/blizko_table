"use client";
import FormControlTemplate from "@/src/shared/ui/modal/FormControl";
import { Button } from "@mui/material";
import { useState } from "react";
import CreateForm from "./create-form/CreateForm";
import NewClientProvider from "@/src/app/provider/new-client/NewClientProvider";

export default function NewClient() {
  const [open, setOpen] = useState<boolean>(false);

  const handelOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button className="text-black" size="small" onClick={() => handelOpen()}>
        Создать нового
      </Button>

      <FormControlTemplate active={handelOpen} state={open}>
        <NewClientProvider>
          <CreateForm />
        </NewClientProvider>
      </FormControlTemplate>
    </>
  );
}
