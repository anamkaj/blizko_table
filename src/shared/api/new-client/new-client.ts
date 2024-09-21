export type NewClientType = {
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

export interface ClientType {
  data: Data;
  response_time: string;
  status: string;
}

export interface Data {
  account_manager: string;
  call_tracking_id: number;
  center_accounting: string;
  count_metrika: number;
  created_at: string;
  data_end: string;
  date_start: string;
  direct_login: string;
  id: number;
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
}

//* Создание нового клиента
export const createClient = async ({ ...param }: NewClientType) => {
  try {
    const response = await fetch(`http://localhost:8090/api/new_client`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...param }),
    });

    const data: ClientType = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to create new client");
  }
};
