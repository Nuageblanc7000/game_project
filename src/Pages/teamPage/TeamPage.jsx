import { useParams } from "react-router-dom";
import { useState } from "react";
import teamA from "../../data/teamA.json";
import teamB from "../../data/teamB.json";

export default function TeamPage() {
  const url = useParams();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const teamColor = url.team == "team-a" ? "bg-red-200" : "bg-blue-200";
  const textTeamColor = url.team == "team-a" ? "text-red-800" : "text-blue-800";
  const handleClick = () => {
    if (activeQuestion < teamA.length - 1) {
      setActiveQuestion((p) => p + 1);
    }
  };

  const handleClickDuo = () => {};

  const handleClickCarre = () => {};

  const handleClickCash = () => {};

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl mt-4 font-bold">
          {url.team == "team-a" ? "Equipe A" : "Equipe B"}
        </h1>
        <div className={`w-6/12 mx-auto p-4 rounded-lg ${teamColor}`}>
          <h2 className={`font-bold ${textTeamColor}`}>
            {url.team == "team-a"
              ? teamA[activeQuestion].question
              : teamB[activeQuestion].question}
          </h2>
        </div>
        <div className="btn-group mt-4 ml-[50%] -translate-x-[50%]">
          <button onClick={handleClickDuo} className="btn">
            Duo
          </button>
          <button onClick={handleClickCarre} className="btn">
            Carré
          </button>
          <button onClick={handleClickCash} className="btn">
            Cash
          </button>
        </div>
        <button
          onClick={handleClick}
          className="block mx-auto mt-4 btn btn-success"
        >
          Suivant
        </button>
      </div>
    </>
  );
}
