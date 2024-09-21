import {
  ClientType,
  createClient,
  NewClientType,
} from "@/src/shared/api/new-client/new-client";
import { useMutation } from "@tanstack/react-query";

export const useCreateNewClient = ({ ...param }: NewClientType) => {
  const mutation = useMutation<ClientType>({
    mutationKey: [`create_new_client`],
    mutationFn: () => createClient(param),
  });

  return { mutation };
};
