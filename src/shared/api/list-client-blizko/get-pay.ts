export interface PayType {
  data: Pay[];
  response_time: string;
  status: string;
}

// Возвращаемые добавленный лот
export interface NewPayType {
  data: Pay;
  response_time: string;
  status: string;
}

export interface Pay {
  created_at: string;
  fk_pay_table_client_table_id: number;
  id: number;
  lot: string;
  name_client: string;
  sum: number;
}

export type AddPayType = {
  id: number;
  lot: string;
  name_client: string;
  sum: number;
};

//* Таблица платежей
export const getPayList = async () => {
  try {
    const response = await fetch("http://localhost:8090/api/pay_list");
    const data: PayType = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

//* Добавление лота в оплаты
export const addPay = async ({ ...param }: AddPayType) => {
  try {
    const response = await fetch("http://localhost:8090/api/pay_client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ param }),
    });
    const data: NewPayType = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
