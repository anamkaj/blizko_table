export interface ClientsCallTracking {
  data: Client[];
  response_time: string;
  status: string;
}

export interface Client {
  active: string;
  domains: string;
  id: number;
  license_end?: string;
  license_start?: string;
  not_enough_money?: boolean;
  number: string[];
  site_id: number;
  sitename: string;
}

//*_____________________________________________________

export interface ClientConversion {
  data: Actions[];
  response_time: string;
  status: string;
}

export interface Actions {
  calls: Call[];
  email: Email[];
  site_id: number;
}

export interface Call {
  call_id: number;
  call_status: string;
  channel_id: number;
  conversations_number: number;
  date: string;
  id: number;
  is_lid: boolean;
  landing_page: string;
  name_type: string;
  source: string;
  traffic_type: string;
}

export interface Email {
  conversations_number: number;
  date: string;
  email_id: number;
  id: number;
  is_lid: boolean;
  landing_page: string;
  lid_landing: string;
  source: string;
  traffic_type: string;
}

//* Все клиенты метрики (true | false - регулирует активные или выключенные)
export const getClientCallTracking = async (status: boolean) => {
  try {
    const response = await fetch(
      `http://localhost:8070/api/status?status=${status}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: ClientsCallTracking = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch calltracking data");
  }
};


type ClientConversionProps = {
  id: number;
  start: string;
  end: string;
};


//* Звонки и заявки по одному клиенту
export const getClientConversion = async ({
  id,
  start,
  end
}:ClientConversionProps) => {
  try {
    const response = await fetch(
      `http://localhost:8070/api/onecall?date_start=${start}&date_end=${end}&id=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: ClientConversion = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch calltracking data");
  }
};
