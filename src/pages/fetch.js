import useSWR from "swr";

export const fetchAPI = (endpoint) => {
  const api = process.env.API_KEY+endpoint;

  const { data, error } = useSWR(api, async (url) => {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  })
  return {data, error};
}