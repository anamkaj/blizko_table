"use client";
import { InfoClient } from "@/src/views/main_page/model/type/blizko/clients-list";
import { PayType } from "@/src/views/main_page/model/type/blizko/pay";
import { Chip, Tooltip } from "@mui/material";
import ChartBudget from "./chart/ChartBudget";
import { BudgetIcon } from "@/src/shared/ui/icon/BudgetIcon";

type BudgetProps = {
  data: InfoClient;
  payList: PayType;
};

//! добавить запрос на получение расхода бюджета для кампании
export default function Budget({ data, payList }: BudgetProps) {
  const pay = payList.data.find(
    (x) => x.fk_pay_table_client_table_id === data.id,
  );

  return (
    <div className=" flex flex-col items-center">
      <Chip
        label="Бюджет"
        size="small"
        variant="filled"
        icon={<BudgetIcon />}
        className="p-2 font-thin text-gray-600"
      />

      <div className="flex gap-2 mt-2">
        <Tooltip title="Рекламный бюджет">
          <div className="text-xs px-2 bg-green-200 font-bold rounded-xl">
            {pay ? Math.round(pay.sum * data.percentage_lead).toLocaleString("ru") : 0}
            {"₽"}
          </div>
        </Tooltip>

        <Tooltip title="Весь бюджет оплаченый клиентом">
          <div className="text-xs px-2 bg-slate-200 rounded-xl">
            {pay ? pay.sum.toLocaleString("ru") : 0}
            {"₽"}
          </div>
        </Tooltip>
      </div>
      <>
        <ChartBudget data={data} pay={pay} />
      </>
    </div>
  );
}
