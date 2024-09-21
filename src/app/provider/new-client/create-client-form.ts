import { create } from "zustand";

export type CreateClientStateType = {
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

export const useCreateClient = create<CreateClientStateType>(() => ({
  account_manager: "",
  call_tracking_id: NaN,
  center_accounting: "",
  count_metrika: NaN,
  data_end: "",
  date_start: "",
  direct_login: "",
  name: "",
  pay_company: "",
  percentage_lead: NaN,
  plan: "",
  region_client: "",
  specialist_ads: "",
  specific_client: "",
  status_ads: true,
  status_client: true,
  url_crm: "",
  url_site: "",
}));

export const updateCreateClient = <K extends keyof CreateClientStateType>(
  key: K,
  value: CreateClientStateType[K],
) => {
  useCreateClient.setState((state) => ({
    ...state,
    [key]: value,
  }));
  console.log(useCreateClient.getState());
};
