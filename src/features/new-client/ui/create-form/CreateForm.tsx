import { useState } from "react";
import DateWork from "../element/DateWork";
import FormLegalInfo from "../element/FormLegalInfo";
import InfoClient from "../element/InfoClient";
import LinkClient from "../element/LinkClient";
import StatisticAccount from "../element/StatisticAccount";
import ButtonSend from "./ButtonSend";
import PayInput from "../pay-element/PayInput";

export default function CreateForm() {
  const [newClient, setNewClient] = useState<{
    id: number;
    name_client: string;
  }>({} as { id: number; name_client: string });

  const handelAddClient = (id: number, name_client: string) => {
    setNewClient({
      id,
      name_client,
    });
  };

  return (
    <div className="w-[800px] ">
      <>
        <DateWork />
        <FormLegalInfo />
        <StatisticAccount />
        <InfoClient />
        <LinkClient />
        <PayInput newClient={newClient} />
      </>

      <ButtonSend handelAddClient={handelAddClient} />
    </div>
  );
}
