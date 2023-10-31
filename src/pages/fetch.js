import useSWR from "swr";

export const fetchAPI = (endpoint) => {
  const api = `http://127.0.0.1:8000/api${endpoint}`;

  const { data, error } = useSWR(api, async (url) => {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  })
  return {data, error};
}