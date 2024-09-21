import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { TextareaAutosize } from "@mui/material";
import { useAddNote } from "../../model/hook/useNote";

type InputNoteProps = {
  name: string;
  id: number;
  refetch: () => void;
};

export default function InputNote({ name, id, refetch }: InputNoteProps) {
  const [note, setNote] = useState<string>("");
  const { mutationFn } = useAddNote(id, name, note);

  const handelSubmit = () => {
    if (note.length > 3) {
      mutationFn.mutate();
    }
  };

  const changeNote = (event: HTMLTextAreaElement["value"]) => {
    setNote(event);
  };

  useEffect(() => {
    if (mutationFn.status == "success") {
      refetch();
      setNote("");
    }
  }, [mutationFn.status]);

  return (
    <div className="mt-4 flex flex-col items-center">
      <TextareaAutosize
        placeholder="Новый комментарий"
        value={note}
        onChange={(e) => changeNote(e.target.value)}
        className="w-full outline-none text-xs border border-slate-200 rounded-lg p-2"
        minRows={3}
      />
      <Button className="text-xs w-full mt-4" onClick={() => handelSubmit()}>
        Сохранить
      </Button>
    </div>
  );
}
