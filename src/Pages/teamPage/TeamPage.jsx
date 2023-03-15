import {useParams} from "react-router-dom";
import {useReducer} from "react";
import TypeChoice from './components/TypeChoice';
import teamA from "../../data/teamA.json";
import teamB from "../../data/teamB.json";
import NextButton from "./components/NextButton";
import Recap from "./components/Recap";
import Questions from "./components/Questions";
import TeamReducer from "./reducer/TeamReducer";
import ButtonChoice from "./components/ButtonChoice";

export default function TeamPage() {
    const url = useParams();
    const team = url.team === "team-a" ? teamA : teamB
    const [state, dispatch] = useReducer(TeamReducer, {
        activeQuestion: 0,
        typeChoice: null,
        showTypeChoice: true,
        showNext: false,
        active: null,
        isEmpty: true,
        inputValue: null,
        itemSelected: "",
        points: 0,
        slide: 0,
        userResponses: [],
        responseSelected: null
    })

    const handleClick = () => {
        dispatch({
            type: 'next_button_click',
            team
        })
    };

    const handleClickDuo = () => {
        dispatch({type: 'button_duo'})
    };

    const handleClickCarre = () => {
        dispatch({type: 'button_carre'})
    };

    const handleClickCash = () => {
        dispatch({type: 'button_cash'})
    };

    const handleClickVerifyResponse = (e, item) => {
        dispatch({
            type: 'verify_response',
            innerText: e.target.innerText,
            item
        })
    }

    const handleChange = (e) => {
        dispatch({
            type: 'response_cash_input',
            value: e.target.value
        })
    }

    return (
        <div className="flex justify-center items-center h-full bg-secondary/20">
            <div className="container mx-auto p-4">

                <h1 className="text-2xl text-danger mt-4 font-bold">
                    {url.team === "team-a" ? "Equipe A" : "Equipe B"}
                </h1>

                <TypeChoice
                    typeChoice={state.typeChoice}
                    team={team}
                    activeQuestion={state.activeQuestion}
                    handleClick={handleClickVerifyResponse}
                    handleChange={handleChange}
                    active={state.active}
                    empty={state.isEmpty}
                />

                {state.showNext && <NextButton handleClick={handleClick}
                                         content={state.activeQuestion >= team.length - 1 ? 'Valider' : 'Suivant'}/>}

                {state.slide > state.activeQuestion
                    ? <Recap questions={team} userResponses={state.userResponses} points={state.points}/>
                    : <Questions team={team} activeQuestion={state.activeQuestion} points={state.points}/>
                }

                {state.showTypeChoice && (
                    <div className="btn-group mt-4 ml-[50%] -translate-x-[50%] min-h-[50px]">
                        <ButtonChoice className="btn" handleclick={handleClickDuo} text="Duo" />
                        <ButtonChoice className="btn" handleclick={handleClickCarre} text="Carré" />
                        <ButtonChoice className="btn" handleclick={handleClickCash} text="Cash" />
                    </div>
                )}

            </div>
        </div>
    );
}
