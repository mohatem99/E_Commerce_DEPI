import { useEffect, useState } from "react";
import { api } from "../Utils/axios.js";

function useFetch(params = "", query = "", tag = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await api.get(`${params}`);
      if (res.data.hasOwnProperty("products")) {
        setData(res.data.posts);
      } else {
        setData(res.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [query]);
  return [data, loading];
}

export default useFetch;
