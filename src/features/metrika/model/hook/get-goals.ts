import {
  AddCounter,
  addGoals,
  getStatistics,
  Statictics,
  updateGoals,
} from "@/src/shared/api/metrika-api/metrika";
import { useMutation, useQuery } from "@tanstack/react-query";

type UpdateProps = {
  goal_id: number;
  status: boolean;
  name: string;
};

//* Получение целей счетчика
export const useGoals = (id: number) => {
  const { data, isLoading, refetch } = useQuery<AddCounter>({
    queryKey: [`get_goals_${id}`],
    queryFn: () => addGoals(id),
    enabled: true,
  });

  return { data, isLoading, refetch };
};



//* Изменение статусов целей в базе
export const useUpdateGoals = (checked: UpdateProps[]) => {
  const mutation = useMutation({
    mutationFn: () => updateGoals(checked),
  });

  return { mutation };
};

//*Получение статистики по целям
export const useStatictics = (
  id_count: number,
  date_start: string,
  date_end: string,
) => {
  const { data, isLoading, refetch } = useQuery<Statictics>({
    queryKey: [`statistics_${id_count}`],
    queryFn: () =>
      getStatistics({
        id_count: id_count,
        date_start: date_start,
        date_end: date_end,
      }),
    gcTime: 0,
    staleTime: 0,
    enabled: true,
  });

  return {
    data,
    isLoading,
    refetch,
  };
};
