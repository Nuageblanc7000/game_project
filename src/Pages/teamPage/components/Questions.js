export default function Questions({ team, activeQuestion, points }) {
  return (
    <div className="flex mt-4">
      <div className="flex flex-col justify-center items-center flex-initial w-20 bg-white rounded-lg mr-3 bg-secondary text-secondary">
        <p>Points</p>
        <span className="font-bold text-6xl">{points}</span>
      </div>
      <div
        className={`flex-1 p-4 rounded-lg min-h-[150px] bg-white flex justify-center items-center shadow-xl border border-neutral-200`}
      >
        <h2 className={`font-bold text-neutral`}>
          {team[activeQuestion].question}
        </h2>
      </div>
    </div>
  );
}
