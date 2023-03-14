import {useParams} from "react-router-dom";
import {useState} from "react";
import TypeChoice from './components/TypeChoice';
import teamA from "../../data/teamA.json";
import teamB from "../../data/teamB.json";
import NextButton from "./components/NextButton";
import Recap from "./components/Recap";
import Questions from "./components/Questions";

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
    const [points, setPoints] = useState(0)
    const [slide, setSlide] = useState(0)
    const [userResponses, setUserResponses] = useState([])
    const [responseSelected, setResponseSelected] = useState(null)
    const team = url.team === "team-a" ? teamA : teamB

    const handleClick = () => {

        setSlide((p) => p + 1)
        setUserResponses([...userResponses, responseSelected])

        if (activeQuestion < team.length - 1) {
            setActiveQuestion((p) => p + 1);
        }

        // If the active question is the last of the list
        if (activeQuestion >= team.length - 1) {
            setShowTypeChoice(false)
        } else {
            setShowTypeChoice(true)
        }

        setShowNext(false)
        setTypeChoice(null)

        // If answer selected is true
        if (itemSelected === team[activeQuestion].reponse) {

            // Points distribution
            if (typeChoice === 1) {
                setPoints(points + 1)
            }

            if (typeChoice === 2) {
                setPoints(points + 2)
            }

        }

        // if answer is CASH
        if (inputValue !== null) {
            if (inputValue.toLowerCase() === (team[activeQuestion].reponse).toString().toLowerCase()) {
                setPoints(points + 5)
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

    const handleClickVerifyResponse = (e, item) => {
        setActive(item)
        setShowNext(true)

        if (item != null) {
            setItemSelected(item)
            // Saving answers
            setResponseSelected(e.target.innerText)
        } else {
            setResponseSelected(inputValue)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value

        if (value === "") {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
            setInputValue(e.target.value)
        }
    }

    return (
        <div className="flex justify-center items-center h-full bg-secondary/20">
            <div className="container mx-auto p-4">

                <h1 className="text-2xl text-danger mt-4 font-bold">
                    {url.team === "team-a" ? "Equipe A" : "Equipe B"}
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

                {showNext && <NextButton handleClick={handleClick}
                                         content={activeQuestion >= team.length - 1 ? 'Valider' : 'Suivant'}/>}

                {slide > activeQuestion
                    ? <Recap questions={team} userResponses={userResponses} points={points}/>
                    : <Questions team={team} activeQuestion={activeQuestion} points={points}/>
                }

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
