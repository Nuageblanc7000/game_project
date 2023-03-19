import { BASE_URL_API } from "../BASE_URL_API";

async function getQuizz() {
  const response = await fetch(BASE_URL_API);
  if (response.ok) {
    return Array.isArray(response) ? response : [response];
  } else {
    throw new Error("Une erreur est durant le rendu des quizz");
  }
}

async function createQuizz(datas) {
  const { id, ...rest } = datas;

  const response = await fetch(`${BASE_URL_API}/questions`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(rest),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("une erreur est durant la création");
  }
}

async function deleteQuizz(id) {
  const response = await fetch(`${BASE_URL_API}/${id}`, {
    method: "DELETE",
  });
}

async function updateQuizz(quizz) {
  const response = await fetch(`${BASE_URL_API}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(quizz),
  });
}

export { createQuizz, deleteQuizz, getQuizz, updateQuizz };
