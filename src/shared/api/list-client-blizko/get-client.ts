export interface Clients {
  data: InfoClient[];
  response_time: string;
  status: string;
}

export interface InfoClient {
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
  uniq_id: string;
  url_crm: string;
  url_site: string;
}

//* Таблица клиентов
export const getClient = async () => {
  try {
    const response = await fetch("http://localhost:8090/api/client_list");
    const data: Clients = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

// // //* Клиенты платежи и коментарии
// export const getAllData = async () => {
//   try {
//     const response = await fetch("http://localhost:8090/api/all_client", {
//       next: { revalidate: 3600 },
//     });
//     const data: AllData = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }
// };
