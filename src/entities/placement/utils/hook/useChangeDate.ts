import { format } from "date-fns";
import { useRef, useState } from "react";

export const useChangeDate = () => {
  // const [startValue, onChangeStart] = useState(new Date());
  // const [endValue, onChangeEnd] = useState(new Date());

  const startValue = useRef(new Date());
  const endValue = useRef(new Date());

  const [saveNewDate, setSaveNewDate] = useState({
    start: false,
    end: false,
  });

  const changeStartDate = (e: Date) => {
    if (e !== null) {
      if (transformDate(startValue.current) !== transformDate(e)) {
        setSaveNewDate((state) => ({ ...state, start: true, end: false }));
        startValue.current = e;
      }
    }
  };

  const changeEndDate = (e: Date) => {
    if (e !== null) {
      if (transformDate(endValue.current) !== transformDate(e)) {
        setSaveNewDate((state) => ({ ...state, start: false, end: true }));
        endValue.current = e;
      }
    }
  };

  return {
    startValue,
    endValue,
    saveNewDate,
    changeStartDate,
    changeEndDate,
    setSaveNewDate,
  };
};

export const transformDate = (date: Date): string => {
  return format(date, "dd-MM-yy");
};
