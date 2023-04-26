import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            StoreID:   +process.env.REACT_APP_STORE_ID,
            Authorization:`${process.env.REACT_APP_AUTHORIZATION}`,
            UserAddressID: +process.env.REACT_APP_USER_ADDRESS,
          },
        });
        setData(res.data.data.items);
        setIsLoading(false);
        console.log(res.data.data.items);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading };
};
export default useFetch;
