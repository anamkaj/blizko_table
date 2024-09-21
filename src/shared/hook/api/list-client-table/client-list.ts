import {
  Clients,
  getClient,
} from "@/src/shared/api/list-client-blizko/get-client";
import { useQuery } from "@tanstack/react-query";

//* Получение списка клиентов 
export const useClientTableList = () => {
  const { data, isLoading, refetch } = useQuery<Clients>({
    queryKey: [`get_client_list_table`],
    queryFn: () => getClient(),
    enabled: true,
  });

  return { data, isLoading, refetch };
};




