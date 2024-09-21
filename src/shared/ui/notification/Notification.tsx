"use client";
import { NotificationContext } from "@/src/app/provider/context/Provider";
import { useContext, useEffect, useRef } from "react";

export default function NotificationBar() {
  const { notification, open, setOpen, status } =
    useContext(NotificationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="fixed bottom-5 left-5 z-[1500] " hidden={!open}>
      <div className="m-auto">
        <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
          <div className="flex flex-row">
            <div className="px-2">
              {status == "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 48 48"
                  className="fill-current text-green-500"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z" />
                    <path d="m17 24l5 5l10-10" />
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="fill-current text-red-500"
                >
                  <path
                    fill="currentColor"
                    d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"
                  />
                </svg>
              )}
            </div>
            <div className="ml-2 mr-6">
              <span className="font-semibold">
                {status === "success" ? "Успешно" : "Ошибка"}
              </span>
              <span className="block text-gray-500">{notification}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
