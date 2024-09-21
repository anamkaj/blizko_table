"use client";
import { Chip } from "@mui/material";
import { AllData } from "@/src/views/main_page/model/type/all_data";

export default function PaymentClient({ clientList }: { clientList: AllData }) {

  return (
    <div>
      {clientList.data.map((x, index) => {
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 grid grid-cols-2 gap-4 mt-1"
          >
            <Chip
              label={x.lot}
              size="small"
              variant="outlined"
              // icon={<IconCalendar />}
              className="p-2 font-thin"
            />
          </div>
        );
      })}
    </div>
  );
}
