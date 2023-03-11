export async function createQuizz(datas) {
  const { id, ...rest } = datas;
  try {
    const response = await fetch("https://restapi.fr/api/questions", {
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
