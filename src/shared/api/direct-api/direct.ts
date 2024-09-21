export interface DirestStatistics {
  data: Data;
  response_time: string;
  status: string;
}

export interface Data {
  avg_cpc: number;
  avg_impression_position: number;
  avg_pageviews: number;
  bounce_rate: number;
  clicks: number;
  client_login: string;
  cost: number;
  id: number;
  update_date: string;
}

export interface ClientList {
  data: DataList[];
  response_time: string;
  status: string;
}

export interface DataList {
  archived: string;
  awaiting_bonus: number;
  awaiting_bonus_without_nds: number;
  client_id: number;
  client_info: string;
  created_at: string;
  login: string;
}

//* Получение кликов , отказы, ctr , расход по РК
export const costClient = async (login: string) => {
  try {
    const response = await fetch(
      `http://localhost:8060/api/statistic_client?client_login=${login}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: DirestStatistics = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

//* Список клиентов из агентсокго аккаунта
export const clientList = async () => {
  try {
    const response = await fetch(
      `http://localhost:8060/api/start_parser_client`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: ClientList = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
