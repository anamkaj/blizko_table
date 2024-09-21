import {
  ClientConversion,
  ClientsCallTracking,
  getClientCallTracking,
  getClientConversion,
} from "@/src/shared/api/call-tracking/calibri";
import { useQuery } from "@tanstack/react-query";

export const useCallTrackingClient = () => {
  const { data, isLoading, refetch } = useQuery<ClientsCallTracking>({
    queryKey: [`get_client_call_tracking`],
    queryFn: () => getClientCallTracking(true),
    enabled: true,
  });

  return { data, isLoading, refetch };
};

export const useConversationClient = (
  id: number,
  start: string,
  end: string,
) => {
  const { data, isLoading, refetch } = useQuery<ClientConversion>({
    queryKey: [`get_client_conversation_${id}`],
    queryFn: () =>
      getClientConversion({
        id: id,
        start: start,
        end: end,
      }),
    enabled: true,
  });

  return { data, isLoading, refetch };
};
