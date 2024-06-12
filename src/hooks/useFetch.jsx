import { useState, useEffect, useCallback } from "react";

// Custom useFetch hook with support for GET, POST, DELETE and Authentication
const useFetch = (
  url,
  method = "GET",
  body = null,
  headers = {},
  auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjIyMzQxOTgwMTN9.n_nrUuzjMBS3MEv0mWyyC6ZxZnEAdXzxnfpicKbaqno"
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      };

      if (auth) {
        options.headers["Authorization"] = `Bearer ${auth}`;
      }

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
