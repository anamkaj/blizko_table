import { CreateClientStateType } from "@/src/app/provider/new-client/create-client-form";
import { z } from "zod";

const objType = z.object({
  name: z.string().min(5, "Имя должно быть заполнено").trim(),
  pay_company: z.string().refine((value) => value !== "", {
    message: "Юр. лицо должно быть заполнено",
  }),
  plan: z.string().refine((value) => value !== "", {
    message: "Статус должен быть заполнен",
  }),
  center_accounting: z.string().refine((value) => value !== "", {
    message: "Центр учета должен быть заполнен",
  }),
  account_manager: z.string().refine((value) => value !== "Не задан", {
    message: "Менеджер должен быть заполнен",
  }),
  percentage_lead: z
    .number()
    .refine((value) => !Number.isNaN(value) && value !== 0, {
      message: "Процент должен быть заполнен",
    }),
  region_client: z.string().refine((value) => value !== "Не задан", {
    message: "Регион должен быть заполнен",
  }),
  specialist_ads: z.string().refine((value) => value !== "Не задан", {
    message: "Специалист должен быть заполнен",
  }),
  specific_client: z
    .string()
    .min(5, "Вид деятельности должен быть заполнен")
    .refine((value) => value !== "Не задан", {
      message: "Вид деятельности должен быть заполнен",
    }),
  url_crm: z
    .string()
    .refine((value) => value !== "Не задан" && value.length !== 0, {
      message: "Ссылка должен быть заполнен",
    }),
  url_site: z
    .string()
    .refine((value) => value !== "Не задан" && value.length !== 0, {
      message: "Ссылка должен быть заполнен",
    }),
});

type SchemaInfo = z.infer<typeof objType>;

export default function ErrorComponent({ ...param }: { param: SchemaInfo }) {
  return (
    <div className="mt-2 col-span-5">
      <span className="text-red-500 text-xs ">
        {objType.safeParse({ ...param }).success
          ? ""
          : `${objType.safeParse({ ...param }).error?.issues[0].message}`}
      </span>
    </div>
  );
}
