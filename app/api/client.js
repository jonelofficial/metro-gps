import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://10.10.8.22:1337",
});

const get = apiClient.get;
apiCLient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
