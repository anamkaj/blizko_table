import { differenceInCalendarDays, startOfToday } from "date-fns";

export const useDate = (startValue: Date, endValue: Date) => {
  const today = startOfToday();

  //* Всего дней
  const timeCalc = () => {
    if (startValue !== null && endValue !== null) {
      const result = differenceInCalendarDays(
        new Date(endValue.toString()),
        new Date(startValue.toString()),
      );
      return result;
    } else {
      return 0;
    }
  };

  // * Осталось дней
  const timeCalcRange = () => {
    if (startValue !== null && endValue !== null) {
      const result = differenceInCalendarDays(
        new Date(endValue.toString()),
        new Date(today.toString()),
      );
      return result;
    } else {
      return 0;
    }
  };

  //* "Разместили дней"
  const timeCalcEnd = () => {
    if (startValue !== null && endValue !== null) {
      const result = differenceInCalendarDays(
        new Date(today.toString()),
        new Date(startValue.toString()),
      );
      return result;
    } else {
      return 0;
    }
  };

  return { timeCalc, timeCalcRange, timeCalcEnd };
};
