export interface AllData {
  data: Data[];
  response_time: string;
  status: string;
}

export interface Data {
  account_manager: string;
  count_metrika: number;
  created_at: string;
  data_end: string;
  date_start: string;
  direct_login: string;
  id: number;
  lot: string;
  name: string;
  pay_company: string;
  pay_id: number;
  plan: string;
  region_client: string;
  region_manager: string;
  specialist_ads: string;
  specific_client: string;
  status_ads: boolean;
  status_client: boolean;
  sum: number;
  uniq_id: string;
  url_crm: string;
  url_site: string;
  center_accounting: string;
}
