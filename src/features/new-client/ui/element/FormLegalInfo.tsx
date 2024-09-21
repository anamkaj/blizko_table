import {
  CreateClientStateType,
  updateCreateClient,
  useCreateClient,
} from "@/src/app/provider/new-client/create-client-form";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { z } from "zod";
import ErrorComponent from "./ErrorComponent";

const objType = z.object({
  name: z.string().min(5, "Имя должно быть заполнено").trim(),
  pay_company: z.string().refine((value) => value !== "", {
    message: "Юр. лицо должно быть заполнено",
  }),
  plan: z.string().refine((value) => value !== "", {
    message: "Статус должен быть заполнен",
  }),
  center_accounting: z.string().refine((value) => value !== "", {
    message: "Центр учета должен быть заполнен",
  }),
});

type objType = z.infer<typeof objType>;

export default function FormLegalInfo() {
  const { ...param } = useCreateClient((state) => state);
  const changeState = ({
    name,
    value,
  }: {
    name: keyof CreateClientStateType;
    value: string;
  }) => {
    updateCreateClient(name, value.trim());
  };

  return (
    <div className="grid grid-cols-5 items-center gap-1 mt-8">
      <FormControl fullWidth className="col-span-2">
        <TextField
          required
          name="name"
          id="outlined-read-only-input"
          label="Название клиента"
          variant="outlined"
          value={param.name}
          className="w-full"
          onChange={(e) =>
            changeState({
              name: e.target.name as keyof CreateClientStateType,
              value: e.target.value,
            })
          }
        />
      </FormControl>

      <FormControl className="relative">
        <InputLabel id="select-label-company">Юр.лицо</InputLabel>
        <Select
          labelId="select-label-company"
          id="select-company"
          label="company"
          name="pay_company"
          value={param.pay_company}
          onChange={(e) =>
            changeState({
              name: e.target.name as keyof CreateClientStateType,
              value: e.target.value,
            })
          }
          className="w-full"
        >
          <MenuItem value={""}>Не задан</MenuItem>
          <MenuItem value={"Адверта"}>Адверта</MenuItem>
          <MenuItem value={"Медиаплощадь"}>Медиаплощадь</MenuItem>
        </Select>
      </FormControl>

      <FormControl className="relative">
        <InputLabel id="select-label-management">Ценр учета</InputLabel>
        <Select
          labelId="select-label-management"
          id="select-management"
          name="center_accounting"
          label="management"
          value={param.center_accounting}
          className="w-full"
          onChange={(e) =>
            changeState({
              name: e.target.name as keyof CreateClientStateType,
              value: e.target.value,
            })
          }
        >
          <MenuItem value={""}>Не задан</MenuItem>
          <MenuItem value={"БКНС"}>БКНС</MenuItem>
          <MenuItem value={"БКРС"}>БКРС</MenuItem>
          <MenuItem value={"БКСП"}>БКСП</MenuItem>
          <MenuItem value={"БКЕК"}>БКЕК</MenuItem>
          <MenuItem value={"БКРЕ"}>БКРЕ</MenuItem>
        </Select>
      </FormControl>

      <FormControl className="relative">
        <InputLabel id="select-label-statusCompany">Статус</InputLabel>
        <Select
          labelId="select-label-statusCompany"
          id="select-statusCompany"
          label="statusCompany"
          name="plan"
          value={param.plan}
          className="w-full"
          onChange={(e) =>
            changeState({
              name: e.target.name as keyof CreateClientStateType,
              value: e.target.value,
            })
          }
        >
          <MenuItem value={""}>Не задан</MenuItem>
          <MenuItem value={"Комбо"}>Комбо</MenuItem>
          <MenuItem value={"Мегатрафик"}>Мегатрафик</MenuItem>
        </Select>
      </FormControl>

      <ErrorComponent param={{ ...param }} />
    </div>
  );
}
