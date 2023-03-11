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
    const [isEmpty, setIsEmpty] = useState(true)
    const [inputValue, setInputValue] = useState(null)
    const [itemSelected, setItemSelected] = useState("")

    const team = url.team === "team-a" ? teamA : teamB
    const handleClick = () => {
        if (activeQuestion < teamA.length - 1) {
            setActiveQuestion((p) => p + 1);
            setShowTypeChoice(true)
            setShowNext(false)
            setTypeChoice(null)

            // If answer selected is true
            if (itemSelected === team[activeQuestion].reponse) {

                // Points distribution
                if (typeChoice === 1) {
                    console.log("+1 point")
                } else if (typeChoice === 2) {
                    console.log("+2 points")
                } else {
                    console.log("+5 points")
                }
            }

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

        if (item != null) {
            setItemSelected(item)

        } else {

            if (inputValue.toLowerCase() === (team[activeQuestion].reponse).toString().toLowerCase()) {
                console.log('OK')
            }
        }
    }

    const handleChange = (e) => {
        const value = e.target.value

        if (value == "") {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
            setInputValue(e.target.value)
        }
    }

    return (
        <div className="flex justify-center items-center h-full bg-secondary/20">
            <div className="container mx-auto p-4">

                <h1 className="text-2xl mt-4 font-bold">
                    {url.team == "team-a" ? "Equipe A" : "Equipe B"}
                </h1>

                <TypeChoice
                    typeChoice={typeChoice}
                    team={team}
                    activeQuestion={activeQuestion}
                    handleClick={handleClickVerifyResponse}
                    handleChange={handleChange}
                    active={active}
                    empty={isEmpty}
                />

                {showNext && (
                    <button
                        onClick={handleClick}
                        className="block mx-auto btn btn-success my-4"
                    >
                        Suivant
                    </button>
                )}

                <div
                    className={` mx-auto p-4 rounded-lg min-h-[150px] bg-white my-8 flex justify-center items-center shadow-xl border border-neutral-200`}>
                    <h2 className={`font-bold text-neutral`}>
                        {team[activeQuestion].question}
                    </h2>
                </div>


                {showTypeChoice && (
                    <div className="btn-group mt-4 ml-[50%] -translate-x-[50%] min-h-[50px]">
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
                )}



            </div>
        </div>
    );
}
