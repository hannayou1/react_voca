import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`조회 실패: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("조회 결과:", data);
        setData(data);
      })
      .catch(error => console.error("조회 실패:", error));
  }, [url]);

  return data;
}