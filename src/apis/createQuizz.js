const BASE_URL_API = "https://restapi.fr/api";
export async function createQuizz(datas) {
  const { id, ...rest } = datas;
  try {
    const response = await fetch(`${BASE_URL_API}/questions`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(rest),
    });
  } catch (err) {
    throw new Error("une erreur est survenue");
  }
}

export async function getQuizz() {
  try {
    const response = await fetch(BASE_URL_API);
    if (response.ok) {
      return response;
    }
  } catch (err) {
    throw new Error("Une erreur est survenue");
  }
}
