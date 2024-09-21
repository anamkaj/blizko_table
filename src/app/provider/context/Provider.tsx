import NotificationBar from "@/src/shared/ui/notification/Notification";
import React, { createContext, ReactNode, useRef, useState } from "react";

interface NotificationContextType {
  notification: string;
  open: boolean;
  setNotification: (notification: string) => void;
  setOpen: (open: boolean) => void;
  status: string;
  setStatus: (status: string) => void;
  content: React.MutableRefObject<string>;
}

// Создание контекста с начальным значением
export const NotificationContext = createContext<NotificationContextType>({
  notification: "Welcome!",
  setNotification: () => {},
  open: false,
  setOpen: () => {},
  status: "",
  setStatus: () => {},
  content: { current: "" },
});

export default function NotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notification, setNotification] = useState("Welcome!");
  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const content = useRef<string>("");

  return (
    <NotificationContext.Provider
      value={{
        notification,
        open,
        setNotification,
        setOpen,
        status,
        setStatus,
        content
      }}
    >
      {children}
      <NotificationBar />
    </NotificationContext.Provider>
  );
}
