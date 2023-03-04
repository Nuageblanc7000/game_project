export default function Question({ question }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
      >
        {question.question}
      </th>
      <td className="px-6 py-4 text-center">{question.response} </td>
      <td className="px-6 py-4  text-center">
        <div>Editer</div>
        <div>Supprimer</div>
      </td>
    </tr>
  );
}
