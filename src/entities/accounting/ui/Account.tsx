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
import React, { useState } from "react";

export default function Account() {
  const [value, setValue] = useState("Регион");
  const [loading, setLoading] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  const sendData = () => {
    if (link !== "" && value !== "Регион") {
      setLoading(true);
    }
  };

  return (
    <div>
      <FormControlTemplate button={value}>
        <FormControl fullWidth className="mt-4">
          <InputLabel id="select-label">ЦУ</InputLabel>
          <Select
            labelId="select-label"
            id="select-label"
            value={value}
            label="ЦУ"
            onChange={(e) => setValue(e.target.value as string)}
          >
            <MenuItem value={"БКНС"}>БКНС</MenuItem>
            <MenuItem value={"БКРС"}>БКРС</MenuItem>
            <MenuItem value={"БКСП"}>БКСП</MenuItem>
            <MenuItem value={"БКЕК"}>БКЕК</MenuItem>
            <MenuItem value={"БКРЕ"}>БКРЕ</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="link-basic"
          label="Ссылка на CRM"
          variant="standard"
          className="mt-4 w-full"
          onChange={(e) => setLink(e.target.value)}
        />

        <LoadingButton
          loading={loading}
          variant="outlined"
          className="mt-4 w-full"
          onClick={() => sendData()}
        >
          Сохранить
        </LoadingButton>
      </FormControlTemplate>
    </div>
  );
}
