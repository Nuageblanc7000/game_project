//hook personnalisé
import { useEffect, useState } from "react";
import { getCategorie } from "../apis";

export function useFetchCategories(page) {
  const limit = 18;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let cancel = false;
    const queryParams = new URLSearchParams();
    if (page) {
      queryParams.append("limit", limit);
      queryParams.append("skip", (page - 1) * limit);
    }
    async function fetchData() {
      const fetchCategories = await getCategorie(queryParams);
      if (!cancel) {
        setCategories((cat) => [...cat, ...fetchCategories]);
      }
    }
    fetchData();
    //cleanup
    return () => (cancel = true);
  }, [page]);

  return [categories, setCategories];
}
