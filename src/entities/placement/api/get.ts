export const GetRequest = async (start: string, end: string, id: number) => {
  const response = await fetch(
    `http://localhost:3000/placement?start=${start}&end=${end}&id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data;
};
