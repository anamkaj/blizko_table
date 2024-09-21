//* Добавление целей и счетчика в базу данных

export interface AddCounter {
  data: DataCounter;
  response_time: string;
  status: string;
}

export interface DataCounter {
  counter_id: number;
  goals: Goal[];
}

export interface Goal {
  goal_id: number;
  name: string;
  status: boolean;
}

// _________________________________________-
//* Получение статистики
export interface Statictics {
  data: StatData;
  response_time: string;
  status: string;
}

export interface StatData {
  date1: string;
  date2: string;
  goal: StatGoal[];
  len_goals: number;
}

export interface StatGoal {
  goal_id: number;
  metrics: number;
  name: string;
  status: boolean;
}

export type UpdateCounter = {
  data: string;
  response_time: string;
  status: string;
};

//* Получение целей 
export const addGoals = async (id: number) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/metrika/goals?id_count=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: AddCounter = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

//* Обновление статуса целей
export const updateGoals = async (goals: Goal[]) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/blizko/update-goals`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goals: goals,
        }),
      },
    );
    const data: UpdateCounter = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

//* Получение статистики
export const getStatistics = async ({
  id_count,
  date_start,
  date_end,
}: {
  id_count: number;
  date_start: string;
  date_end: string;
}) => {
  try {
    const response = await fetch(`http://localhost:8080/api/statistics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_count: id_count,
        date_start: date_start,
        date_end: date_end,
      }),
    });
    const data: Statictics = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
