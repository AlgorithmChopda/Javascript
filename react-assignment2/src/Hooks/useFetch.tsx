import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(url);
        console.log("in this");
        setData(result.data);
      } catch {
        console.log("in error");
        toast.error("error while loading data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
