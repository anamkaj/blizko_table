import { StatGoal } from "@/src/shared/api/metrika-api/metrika";

const array = [
  {
    form: [
      "Забронировать, Записаться, Заказать, Заявка -> Отправка",
      "В корзину",
      "Заказать в 1 клик -> Отправка",
      "Отправить заказ из Корзины -> Отправка",
      "Отправить сообщение, Написать нам, задать вопрос -> Отправка",
      "Перезвоните мне -> Отправка",
      "Получить скидку, Хочу скидку -> Отправка",
      "Участвовать в акции, Получить скидку -> Отправка",
      "Хочу скидку -> Отправка",
    ],
    whatsapp: ["Написать в Whatsapp"],
    phone: ["Показать телефон", "Позвонить (мобильная)"],
    call: ["Звонок Callibri"],
  },
];

export const filterGoals = (goal: StatGoal[] | undefined) => {
  if (goal === undefined) return { form: 0, whatsapp: 0, phone: 0, call: 0 };

  const counts = {
    form: 0,
    whatsapp: 0,
    phone: 0,
    call: 0,
  };

  goal?.forEach((goal) => {
    if (array[0].form.includes(goal.name)) {
      counts.form += goal.metrics;
    }
    if (array[0].whatsapp.includes(goal.name)) {
      counts.whatsapp += goal.metrics;
    }
    if (array[0].phone.includes(goal.name)) {
      counts.phone += goal.metrics;
    }
    if (array[0].call.includes(goal.name)) {
      counts.call += goal.metrics;
    }
  });

  return counts;
};
