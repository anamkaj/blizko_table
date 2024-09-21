export interface NoteClient {
  data: DateNote[];
  response_time: string;
  status: string;
}

export interface DateNote {
  created_at: string;
  fk_note_client_client_table_id: number;
  id: number;
  name_client: string;
  note: string;
}

export type NoteSuccess = {
  data: string;
  response_time: string;
  status: string;
};

//* Записей ведения клиента
export const getNote = async (name: string) => {
  try {
    const response = await fetch(
      `http://localhost:8090/api/get_note?login=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: NoteClient = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch create note");
  }
};

//* добавление записей
export const addNote = async (id: number, name: string, note: string) => {
  try {
    const response = await fetch(`http://localhost:8090/api/note_create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        login: name,
        note: note,
      }),
    });

    const data: NoteSuccess = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch add note");
  }
};

//* удаление записеи
export const deleteNote = async (id: number) => {
  try {
    const response = await fetch(
      `http://localhost:8090/api/delete_note?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: NoteSuccess = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch delete note");
  }
};
