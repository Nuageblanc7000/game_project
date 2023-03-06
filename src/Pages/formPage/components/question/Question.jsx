export default function Question({ question, handleDelete }) {
  return (
    <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 bg-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white text-center"
      >
        {question.question}
      </th>
      <td className="px-6 py-4 text-center">{question.response} </td>
      <td className="px-6 py-4  text-center">
        <button className="btn btn-outline btn-error" onClick={handleDelete}>
          Supprimer
        </button>
      </td>
    </tr>
  );
}
