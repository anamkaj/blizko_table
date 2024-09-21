import {
  addNote,
  deleteNote,
  getNote,
  NoteClient,
  NoteSuccess,
} from "@/src/shared/api/note/getNote";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useNoteClient = (login: string) => {
  const { data, isLoading, refetch } = useQuery<NoteClient>({
    queryKey: [`get_note_${login}`],
    queryFn: () => getNote(login),
    enabled: false,
  });

  return { data, isLoading, refetch };
};

export const useAddNote = (id: number, login: string, note: string) => {
  const mutationFn = useMutation<NoteSuccess>({
    mutationFn: () => addNote(id, login, note),
    mutationKey: ["add_note"],
  });

  return { mutationFn };
};

export const useDeleteNote = (id: number) => {
  const mutationFn = useMutation<NoteSuccess>({
    mutationFn: () => deleteNote(id),
    mutationKey: ["delete_note"],
  });

  return { mutationFn };
};
