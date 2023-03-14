export async function categoriePageLoader({ params: { id } }) {
  try {
    const response = await fetch(`https://restapi.fr/api/categories/${id}`);
    const datas = await response.json();
    console.log(response.headers);
    if (response.ok) {
      return Array.isArray(datas) ? datas : [datas];
    } else {
      throw new Error("Une erreur est survenue");
    }
  } catch (e) {
    throw new Error("une erreur est survenue");
  }
}
