import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data featching is not successfull !");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoding(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoding(false);
      });
  }, [url]);

  return { data, loding, error };
};

export default useFetch;
