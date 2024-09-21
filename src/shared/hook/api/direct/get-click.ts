import {
  ClientList,
  clientList,
  costClient,
  DirestStatistics,
} from "@/src/shared/api/direct-api/direct";
import { useQuery } from "@tanstack/react-query";

//* Статистика кликов из Direct Yandex
export const useAdsStat = (login: string) => {
  const { data, isLoading, refetch } = useQuery<DirestStatistics>({
    queryKey: [`get_ads${login}`],
    queryFn: () => costClient(login),
    enabled: true,
  });

  return { data, isLoading, refetch };
};


//* Список клиентов с агентского аккаунта.
export const useClientListAds = () => {
  const { data, isLoading, refetch } = useQuery<ClientList>({
    queryKey: [`get_list_client_ads`],
    queryFn: () => clientList(),
    enabled: false,
  });

  return { data, isLoading, refetch };
};

