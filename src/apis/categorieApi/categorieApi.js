import { BASE_URL_API } from "../BASE_URL_API";

async function getCategorie(queryParams) {
  const response = await fetch(
    `${BASE_URL_API}/categories${queryParams ? `?${queryParams}` : ""}`
  );
  const datas = await response.json();
  console.log(response.headers);
  if (response.ok) {
    return Array.isArray(datas) ? datas : [datas];
  } else {
    throw new Error("Une erreur est survenue");
  }
}
export { getCategorie };
