import { ClientComment } from "@/src/shared/ui/icon/ClientInfo";
import FormControlTemplate from "@/src/shared/ui/modal/FormControl";
import { useState } from "react";
import { IconButton } from "@mui/material";
import NoteList from "./Comment/NoteList";


export default function CommentClient({
  name,
  id,
}: {
  name: string;
  id: number;
}) {
  const [value, setValue] = useState(false);

  const handelOpen = () => {
    setValue(!value);
  };

  return (
    <>
      <IconButton onClick={handelOpen}>
        <ClientComment />
      </IconButton>

      <FormControlTemplate active={handelOpen} state={value} title={name}>
        <NoteList name={name} id={id} />
      </FormControlTemplate>
    </>
  );
}
