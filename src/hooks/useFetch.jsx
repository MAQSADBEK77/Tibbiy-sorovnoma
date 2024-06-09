import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
  useState;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [APIKEY, setAPIKEY] = useState(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjIyMzI0MDUyNjl9._FSuIemMlKRz2RD5kAV3QJHDFrjghHewmkWMzyil_DM"
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;

        // Tekshirish, agar so'rov DELETE bo'lsa, yoki emas
        if (options.method && options.method.toUpperCase() === "DELETE") {
          response = await fetch(url, {
            ...options,
            headers: {
              ...options.headers,
              // API keyni yuborish
              Authorization: APIKEY,
            },
          });
        } else {
          response = await fetch(url, {
            ...options,
            headers: {
              ...options.headers,
              // API keyni yuborish
              "Content-Type": "application/json", // POST so'rov bo'lsa, kontent turi
              Authorization: APIKEY,
            },
          });
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        setData(responseData);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
