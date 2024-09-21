import { InfoClient } from "@/src/shared/api/list-client-blizko/get-client";
import { Pay } from "@/src/shared/api/list-client-blizko/get-pay";
import { useAdsStat } from "@/src/shared/hook/api/direct/get-click";
import { useDate } from "@/src/shared/hook/useDate";

type CalculateProps = {
  pay: Pay | undefined;
  startDate: Date;
  endDate: Date;
  data: InfoClient;
};

// расход из я директа
export const useCalculate = ({
  pay,
  startDate,
  endDate,
  data,
}: CalculateProps) => {
  const login = data.direct_login;
  const { data: result, isLoading, refetch } = useAdsStat(login);
  const { timeCalc, timeCalcEnd } = useDate(startDate, endDate);

  const percentDay = Math.round((timeCalcEnd() / timeCalc()) * 100);
  const freeSum = pay ? pay.sum * data.percentage_lead : 0;
  const direct = result?.data ? result.data.cost : 0;

  const sum = Math.round((direct / freeSum) * 100);
  const consumption = Math.round(freeSum - direct);

  const percent = percentDay - sum;

  return { percent, result, isLoading, refetch, sum, consumption };
};
