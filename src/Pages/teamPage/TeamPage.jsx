import { useParams } from "react-router-dom";

export default function TeamPage() {
  const url = useParams();
  const teamColor = url.team == "team-a" ? "bg-red-300" : "bg-blue-300";
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl mt-4 font-bold">
          {url.team == "team-a" ? "Equipe A" : "Equipe B"}
        </h1>
        <div className={`w-6/12 mx-auto p-4 rounded-lg ${teamColor}`}>
          <h3>Question</h3>
        </div>
      </div>
    </>
  );
}
