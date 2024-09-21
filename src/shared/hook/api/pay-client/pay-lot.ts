import {
  addPay,
  AddPayType,
  getPayList,
  NewPayType,
  PayType,
} from "@/src/shared/api/list-client-blizko/get-pay";
import { useMutation, useQuery } from "@tanstack/react-query";

//* Лист оплат и лотов
export const usePayClient = () => {
  const { data, isLoading, refetch } = useQuery<PayType>({
    queryKey: [`get_pay_list`],
    queryFn: () => getPayList(),
  });

  return { data, isLoading, refetch };
};

//* Добавление лота в оплаты
export const useAddPayClient = ({ ...param }: AddPayType) => {
  const mutation = useMutation<NewPayType>({
    mutationKey: [`add_new_pay`],
    mutationFn: () => addPay(param),
  });

  return { mutation };
};
