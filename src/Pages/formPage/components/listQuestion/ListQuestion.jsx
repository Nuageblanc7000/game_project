import Question from "../question/Question";

export default function ListQuestion({ questions = [], handleDelete }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-4">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-green-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Question
            </th>
            <th scope="col" className="px-6 py-3  text-center">
              Réponse
            </th>
            <th scope="col" className="px-6 py-3  text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.length ? (
            questions.map((q) => (
              <Question
                question={q}
                handleDelete={() => handleDelete(q)}
                key={q.id}
              />
            ))
          ) : (
            <tr>
              <td>
                <div>
                  <h2 className="text-center">La liste est vide</h2>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
