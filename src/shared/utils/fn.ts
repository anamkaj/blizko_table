import { format } from "date-fns";

//*Трансформация даты
export const transformDate = (date: Date): string => {
  return format(date, "dd-MM-yy");
};
