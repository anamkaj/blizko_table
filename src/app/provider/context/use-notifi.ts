import { useContext, useState } from "react";
import { NotificationContext } from "./Provider";

type NotifiProps = {
  time?: string;
  status?: string;
  notification?: string;
};

export const useNotification = () => {
  const [notified, setNotified] = useState<boolean>(false);
  const { setNotification, setOpen, setStatus, content } =
    useContext(NotificationContext);

  const handelChange = (status: boolean) => {
    setNotified(status);
  };

  const notifi = ({ time, status, notification }: NotifiProps) => {
    if (status == "ok") {
      setOpen(true);
      setNotification(`${notification} - ${time}`);
      content.current = notification !== undefined ? notification : "";
      setStatus("success");
    } else if (status == "error") {
      setOpen(true);
      setNotification(`${notification}`);
      setStatus("error");
    }
  };

  return { notifi, notified, handelChange };
};
