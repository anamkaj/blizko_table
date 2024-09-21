"use client";

import { useOutsideClick } from "@/src/shared/hook/useOutSideClick";
import React, { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { transformDate, useChangeDate } from "../utils/hook/useChangeDate";

import Localization from "@/src/app/provider/localization-provider/Provider";
import { useDate } from "@/src/shared/hook/useDate";

export default function Placement() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [date, setIsOpen] = useState({
    start: true,
    end: true,
  });

  const openClose = () => setIsOpen({ ...date, start: true, end: true });
  useOutsideClick({ ref: wrapper, callback: openClose });

  const {
    startValue,
    endValue,
    saveNewDate,
    changeStartDate,
    changeEndDate,
    setSaveNewDate,
  } = useChangeDate();

  const closeCalendar = () => {
    setSaveNewDate((state) => {
      openClose();
      return { ...state, start: false, end: false };
    });
  };

  const { timeCalc, timeCalcRange, timeCalcEnd } = useDate(
    startValue.current,
    endValue.current,
  );

  return (
    <Localization>
      <Box className="flex items-center " ref={wrapper}>
        <Button
          variant="text"
          onClick={() =>
            setIsOpen((stat) => ({
              ...stat,
              start: !stat.start,
              end: true,
            }))
          }
        >
          {transformDate(startValue.current)}
        </Button>
        <div hidden={date.start} className="top-[50px] absolute">
          <DateCalendar className="absolute z-30" onChange={changeStartDate} />
        </div>
        <Button
          hidden={!saveNewDate.start}
          variant="contained"
          onClick={() => closeCalendar()}
        >
          Сохранить
        </Button>
        {"|"}
        <Button
          variant="text"
          onClick={() =>
            setIsOpen((stat) => ({
              ...stat,
              end: !stat.end,
              start: true,
            }))
          }
        >
          {transformDate(endValue.current)}
        </Button>
        <div hidden={date.end} className=" top-[50px] absolute ">
          <DateCalendar className="absolute z-30" onChange={changeEndDate} />
        </div>
        <Button
          hidden={!saveNewDate.end}
          variant="contained"
          onClick={() => closeCalendar()}
        >
          Сохранить
        </Button>
        <div className="flex gap-2">
          <span>План дней {timeCalc()}</span>
          <span>Осталось дней {timeCalcRange()}</span>
          <span>Разместили дней {timeCalcEnd()}</span>
        </div>
      </Box>
    </Localization>
  );
}
