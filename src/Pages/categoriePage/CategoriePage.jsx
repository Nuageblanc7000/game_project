import { useLoaderData } from "react-router-dom";
export default function CategoriePage() {
  const categorie = useLoaderData();
  const cat = categorie[0];
  const state = false;
  console.log(state && state ? state && state && true : false);

  return <div>{cat.name}</div>;
}
