import { Button, FormControl, IconButton } from "@mui/material";
import { format } from "date-fns";
import InputNote from "./InputNote";
import {
  useDeleteNote,
  useNoteClient,
} from "../../model/hook/useNote";
import { DeleteIcon } from "@/src/shared/ui/icon/NoteIcon";
import { useEffect, useState } from "react";

export default function NoteList({ name, id }: { name: string; id: number }) {
  const [idNote, serIdNote] = useState<number>(NaN);
  const { data, isLoading, refetch } = useNoteClient(name);
  const { mutationFn } = useDeleteNote(idNote);
  const sortDate = data?.data.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  const handelDelete = (id: number) => {
    serIdNote(id);
    mutationFn.mutate();
  };

  useEffect(() => {
    if (mutationFn.status == "success") {
      refetch();
    }
  }, [mutationFn.status]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FormControl fullWidth>
        <Button
          className="text-xs flex items-center gap-2"
          onClick={() => refetch()}
          variant="text"
        >
          Получить комментарии
          <span className="font-bold rounded bg-slate-100 px-2 text-purple-800">
            {data?.data.length}
          </span>
        </Button>
        <div className="w-[500px] overflow-y-auto mt-2">
          <div className="p-2 h-[180px]">
            {sortDate?.map((x) => {
              return (
                <div
                  key={x.id}
                  className="p-1 flex items-center gap-2 justify-between border-b-2 border-slate-100"
                >
                  <span className=" text-xs border px-2 rounded-lg whitespace-nowrap">
                    {format(x.created_at, "MM-dd-yy")}
                  </span>
                  <h3 className="text-xs break-words w-full">{x.note}</h3>

                  <IconButton
                    onClick={() => handelDelete(x.id)}
                    className="text-red-500"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            })}
          </div>
        </div>
      </FormControl>

      <InputNote name={name} id={id} refetch={() => refetch()} />
    </>
  );
}
