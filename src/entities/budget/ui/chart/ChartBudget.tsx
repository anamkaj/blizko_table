import { InfoClient } from "@/src/views/main_page/model/type/blizko/clients-list";
import { Pay } from "@/src/views/main_page/model/type/blizko/pay";
import { useCalculate } from "../../model/hook/Calculate";
import ProgressCost from "./ProgressCost";

type ChartBudgetProps = {
  data: InfoClient;
  pay: Pay | undefined;
};

export default function ChartBudget({ data, pay }: ChartBudgetProps) {
  const startDate = new Date(data.date_start);
  const endDate = new Date(data.data_end);

  const { percent, consumption, sum } = useCalculate({
    startDate,
    endDate,
    pay,
    data,
  });

  return (
    <div className="w-full">
      <ProgressCost sum={sum} consumption={consumption} percent={percent} />
    </div>
  );
}
