import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjIyMjExMjM3NjF9.Il-1zhRwn601QwiW0VL9szFZlnVW7_e3c0u0vOMW60w",
  };
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const postGetData = (data) => {
    if (method == "POST") {
      const config = {
        method: method,
        headers: headers,
        body: JSON.stringify(data),
      };
      setPostData(config);
    } else if (method == "DELETE") {
      const config = {
        method: method,
      };
      setDeleteData(config);
    }
  };
  useEffect(() => {
    const getData = async (fetchConfig) => {
      setIsPending(true);
      try {
        const req = await fetch(url, { ...fetchConfig });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
        console.log(err.message);
      }
    };
    if (method == "GET") {
      getData({
        method: method,
        headers: headers,
      });
    }
    if (method == "POST" && postData) {
      getData(postData);
    }
    if (method == "DELETE") {
      getData();
    }
    getData(deleteData);
  }, [url, method, postData]);
  return { data, isPending, error, postGetData };
};
