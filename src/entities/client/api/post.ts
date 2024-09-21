type PostReqType = {
  id: number;
  name: string;
  link: string;
  status: string;
};

export const postClient = async ({ id, name, link, status }: PostReqType) => {
  const url = "http://localhost:8090/api/client_info";

  const postReq = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      id: id,
      name: name,
      url: link,
      status: status,
    }),
  });

  const data: { response_time: string; status: string } = await postReq.json();

  return data;
};
