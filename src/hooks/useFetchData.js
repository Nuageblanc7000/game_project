//hook personnalisé
import { useEffect, useState } from "react";

export function useFetchData(url, page) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    let cancel = false;
    const queryParams = new URLSearchParams();
    if (page) {
      queryParams.append("limit", 18);
      queryParams.append("skip", (page - 1) * 18);
    }
    async function fetchData() {
      try {
        const response = await fetch(url + `? ${queryParams}`);
        if (response.ok && !cancel) {
          const data = await response.json();
          setDatas(Array.isArray(data) ? data : [data]);
        }
      } catch (e) {
      } finally {
      }
    }
    fetchData();
    //cleanup
    return () => (cancel = true);
  }, [page, url]);

  return {
    datas,
    setDatas,
  };
}
