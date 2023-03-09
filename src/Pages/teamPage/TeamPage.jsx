import {useParams} from "react-router-dom";
import {useState} from "react";
import TypeChoice from './components/TypeChoice';
import teamA from "../../data/teamA.json";
import teamB from "../../data/teamB.json";

export default function TeamPage() {
    const url = useParams();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [typeChoice, setTypeChoice] = useState(null)
    const [showTypeChoice, setShowTypeChoice] = useState(true)
    const [showNext, setShowNext] = useState(false)
    const [active, setActive] = useState(null)
    const teamColor = url.team == "team-a" ? "bg-red-200" : "bg-blue-200";
    const textTeamColor = url.team == "team-a" ? "text-red-800" : "text-blue-800";
    const team = url.team === "team-a" ? teamA : teamB
    const handleClick = () => {
        if (activeQuestion < teamA.length - 1) {
            setActiveQuestion((p) => p + 1);
        }
    };

    const handleClickDuo = () => {
        setTypeChoice(1)
        setShowTypeChoice(false)
    };

    const handleClickCarre = () => {
        setTypeChoice(2)
        setShowTypeChoice(false)
    };

    const handleClickCash = () => {
        setTypeChoice(3)
        setShowTypeChoice(false)
    };

    const handleClickVerifyResponse = (item) => {
        setActive(item)
        setShowNext(true)

        if (item == team[activeQuestion].reponse) {
            console.log('OK')
        }
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="container mx-auto">

                <h1 className="text-2xl mt-4 font-bold">
                    {url.team == "team-a" ? "Equipe A" : "Equipe B"}
                </h1>

                <TypeChoice
                    typeChoice={typeChoice}
                    team={team}
                    activeQuestion={activeQuestion}
                    handleClick={handleClickVerifyResponse}
                    active={active}
                />

                <div
                    className={`sm:w-8/12 mx-auto p-4 rounded-lg ${teamColor} min-h-[150px] flex justify-center items-center`}>
                    <h2 className={`font-bold ${textTeamColor}`}>
                        {team[activeQuestion].question}
                    </h2>
                </div>

                <div className="btn-group mt-4 ml-[50%] -translate-x-[50%] min-h-[50px]">

                    {showTypeChoice && (
                        <>
                            <button onClick={handleClickDuo} className="btn">
                                Duo
                            </button>
                            <button onClick={handleClickCarre} className="btn">
                                Carré
                            </button>
                            <button onClick={handleClickCash} className="btn">
                                Cash
                            </button>
                        </>
                    )}
                </div>

                {showNext && (
                    <button
                        onClick={handleClick}
                        className="block mx-auto mt-4 btn btn-success"
                    >
                        Suivant
                    </button>
                )}

            </div>
        </div>
    );
}
