import Localization from "@/src/app/provider/localization-provider/Provider";
import {
  updateCreateClient,
  useCreateClient,
} from "@/src/app/provider/new-client/create-client-form";
import { FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { differenceInDays, format } from "date-fns";

export default function DateWork() {
  const { data_end, date_start } = useCreateClient((state) => state);

  const changeDateStart = (start: Date | null) => {
    if (start !== null) {
      updateCreateClient("date_start", formatDate(start));
    }
  };

  const changeDateEnd = (end: Date | null) => {
    if (end !== null) {
      updateCreateClient("data_end", formatDate(end));
    }
  };

  const formatDate = (value: Date) => {
    return format(value, "yyyy-MM-dd");
  };

  const distance = () => {
    if (data_end !== "" && date_start !== "") {
      return differenceInDays(new Date(data_end), new Date(date_start));
    } else {
      return 0;
    }
  };

  return (
    <>
      <Localization>
        <FormControl fullWidth className="grid grid-cols-5 items-center gap-2">
          <div className="flex gap-2 items-center col-span-3">
            <DatePicker
              label="Начало размещения"
              onChange={(e) => changeDateStart(e)}
            />
            <DatePicker
              label="Конец размещения"
              onChange={(e) => changeDateEnd(e)}
            />
          </div>
          <div className=" text-base ">
            <span>{!Number.isNaN(distance()) ? distance() : 0} дн.</span>
            {" | "}
            <span>
              {!Number.isNaN(distance()) ? (distance() / 7).toFixed(1) : 0} нд.
            </span>
          </div>
        </FormControl>
      </Localization>
    </>
  );
}
