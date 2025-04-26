export const getApiService = ({
  url,
  method,
}: {
  url: string;
  method: string;
}): Promise<Response> => {
  return fetch(url, {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};
