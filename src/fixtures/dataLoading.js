const BASE_API = "https://restapi.fr/api";
export async function dataLoading(data) {
  const response = await fetch(`${BASE_API}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Une erreur est survenue");
  }
}

export async function data() {
  try {
    const response = await fetch(`${BASE_API}/categories`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Une erreur est survenue");
    }
  } catch (err) {
    throw new Error("une erreur est survenue lors du chargement");
  }
}
