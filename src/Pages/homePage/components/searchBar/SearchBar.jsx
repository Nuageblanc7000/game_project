export default function SearchBar({ setValue }) {
  let timeout = null;
  function handleInputSearch(e) {
    clearTimeout(timeout);
    if (!e.target.value) {
      setValue(e.target.value);
    } else {
      timeout = setTimeout(
        () => setValue(e.target.value.toLowerCase().trim()),
        1000
      );
    }
  }
  return (
    <div className="flex items-center  my-4 justify-center flex-col">
      <h2 className="text-xl font-semibold my-2">
        Recherchez votre catégorie de jeux
      </h2>
      <div className="flex border border-purple-200 rounded">
        <input
          onChange={handleInputSearch}
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Recherche une catégorie"
        />
      </div>
    </div>
  );
}
