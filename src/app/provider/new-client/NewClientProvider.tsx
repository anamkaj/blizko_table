import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type NewClientContextType = {
  account_manager: string;
  call_tracking_id: number;
  center_accounting: string;
  count_metrika: number;
  data_end: string;
  date_start: string;
  direct_login: string;
  name: string;
  pay_company: string;
  percentage_lead: number;
  plan: string;
  region_client: string;
  specialist_ads: string;
  specific_client: string;
  status_ads: boolean;
  status_client: boolean;
  url_crm: string;
  url_site: string;
};

interface NewClientProviderProps {
  newClientData: NewClientContextType;
  setNewClientData: Dispatch<SetStateAction<NewClientContextType>>;
}

export const NewClientContext = createContext<NewClientProviderProps>({
  newClientData: {} as NewClientContextType,
  setNewClientData: () => {},
});

export default function NewClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [newClientData, setNewClientData] = useState<NewClientContextType>(
    {} as NewClientContextType,
  );

  // console.log(newClientData);

  return (
    <NewClientContext.Provider
      value={{
        setNewClientData,
        newClientData,
      }}
    >
      {children}
    </NewClientContext.Provider>
  );
}
