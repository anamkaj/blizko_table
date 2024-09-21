import { NewClientContext } from "@/src/app/provider/new-client/NewClientProvider";
import { FormControl, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";

const urlType = z.object({
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

type SchemaInfo = z.infer<typeof urlType>;

export default function LinkClient() {
  const { setNewClientData } = useContext(NewClientContext);
  const [url, setUrl] = useState<SchemaInfo>({
    url_crm: "Не задан",
    url_site: "Не задан",
  });

  const changeUrlCrm = (crm: string) => {
    setUrl((value) => ((value.url_crm = crm.trim()), { ...value }));
  };

  const changeUrlSite = (site: string) => {
    setUrl((value) => ((value.url_site = site.trim()), { ...value }));
  };

  const changeContext = () => {
    if (urlType.safeParse({ ...url }).success) {
      setNewClientData((prevState) => ({
        ...prevState,
        url_crm: url.url_crm,
        url_site: url.url_site,
      }));
    }
  };

  useEffect(() => {
    changeContext();
  }, [url]);

  return (
    <div className="mt-4">
      <h3 className="text-xs">Ссылки</h3>
      <div className="flex gap-2 mt-4">
        <FormControl fullWidth>
          <TextField
            required
            size="small"
            value={url.url_crm}
            id="region"
            label="Ссылка на CRM"
            variant="outlined"
            className="w-full"
            onChange={(e) => changeUrlCrm(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            required
            size="small"
            value={url.url_site}
            id="region"
            label="Сайт клиента"
            variant="outlined"
            className="w-full"
            onChange={(e) => changeUrlSite(e.target.value)}
          />
        </FormControl>
      </div>
      <div className="mt-2 col-span-5">
        <span className="text-red-500 text-xs ">
          {urlType.safeParse({ ...url }).success
            ? ""
            : `${urlType.safeParse({ ...url }).error?.issues[0].message}`}
        </span>
      </div>
    </div>
  );
}
