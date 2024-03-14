import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { todo } from "../types/todo";

const useFetch = (url: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const result = await axios.get<{ data: todo[]; next: number | null }>(
        url
      );
      return result.data;
    },
    onError: () => {
      toast.error("error while loading data");
    },
  });

  return { data, isLoading };
};

export default useFetch;
