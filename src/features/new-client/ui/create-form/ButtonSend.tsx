import { NewClientContext } from "@/src/app/provider/new-client/NewClientProvider";
import { useCreateNewClient } from "@/src/shared/hook/api/create-client/create-client";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";

export default function ButtonSend({
  handelAddClient,
}: {
  handelAddClient: (id: number, name_client: string) => void;
}) {
  const { newClientData, setNewClientData } = useContext(NewClientContext);
  const { mutation } = useCreateNewClient(newClientData);

  const handelCreateClient = () => {
    setNewClientData((value) => ({
      ...value,
      status_ads: true,
      status_client: true,
    }));
    mutation.mutate();
  };

  useEffect(() => {
    if (mutation.data !== undefined && mutation.data.status == "ok") {
      const { id, name } = mutation.data.data;
      handelAddClient(id, name);
    }
  }, [mutation]);

  return (
    <div className="flex justify-end">
      <Button onClick={handelCreateClient}>Создать</Button>
    </div>
  );
}
