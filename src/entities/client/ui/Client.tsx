"use client";
import FormControlTemplate from "@/src/shared/ui/modal/FormControl";
import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { postClient } from "../api/post";

export default function Client() {
  const [name, setName] = useState<string>("Клиент");
  const [value, setValue] = useState("Новый клиент");
  const [link, setLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    response_time: string;
    status: string;
  }>({ response_time: "", status: "" });

  const sendData = async () => {
    if (link !== "" && value !== "Новый клиент" && name !== "") {
      setLoading(true);
      const status = await postClient({
        id: 234234,
        name: name,
        link: link,
        status: value,
      });

      setStatus(status);
      setLoading(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <FormControlTemplate button={name}>
      <FormControl fullWidth className="mt-4">
        <InputLabel id="select-label">Статус</InputLabel>
        <Select
          labelId="select-label"
          id="select-label"
          value={value}
          label="Статус"
          onChange={(e) => setValue(e.target.value as string)}
        >
          <MenuItem value={"Комбо"}>Комбо</MenuItem>
          <MenuItem value={"Лайт"}>Лайт</MenuItem>
          <MenuItem value={"Мегатрафик"}>Мегатрафик</MenuItem>
        </Select>

        <TextField
          id="link-basic"
          label="Ссылка на сайт клиента"
          variant="standard"
          className="mt-4 w-full"
          onChange={(e) => setLink(e.target.value)}
        />
        <TextField
          id="link-basic"
          label="Название клиента"
          variant="standard"
          className="mt-4 w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <LoadingButton
          loading={loading}
          variant="outlined"
          className="mt-4 w-full"
          onClick={() => sendData()}
        >
          Сохранить
        </LoadingButton>
        <div className="mt-4 flex justify-between">
          <span>{status.response_time}</span>
          <span>{status.status}</span>
        </div>
      </FormControl>
    </FormControlTemplate>
  );
}
