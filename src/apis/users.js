const API_USERS = "/api/users";

export async function createUser(newUser) {
  const response = await fetch(API_USERS, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const body = await response.json();
  if (response.ok) {
    return body;
  } else {
    throw new Error("error api createUser");
  }
}
export async function getCurrentUser() {
  const response = await fetch(`${API_USERS}/current`);
  return response.json();
}
export async function signout() {
  await fetch(API_USERS, {
    method: "delete",
  });
}
