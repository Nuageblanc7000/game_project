
export default function TeamReducer(state, action) {
    switch (action.type) {
        case 'next_button_click' : {
            return {
                ...state,
                slide: state.slide + 1,
                userResponses: [...state.userResponses, state.responseSelected],
                activeQuestion: state.activeQuestion < action.team.length - 1 ? state.activeQuestion + 1 : state.activeQuestion,
                showTypeChoice: state.activeQuestion < action.team.length - 1,
                showNext: false,
                typeChoice: null,
                points: state.itemSelected === action.team[state.activeQuestion].reponse && state.typeChoice === 1
                    ? state.points + 1
                    : state.itemSelected === action.team[state.activeQuestion].reponse && state.typeChoice === 2
                        ? state.points + 2
                        : state.inputValue !== null && state.inputValue.toLowerCase() === (action.team[state.activeQuestion].reponse).toString().toLowerCase()
                            ? state.points + 5
                            : state.points
            }
        }
        case 'button_duo' : {
            return {
                ...state,
                typeChoice: 1,
                showTypeChoice: false
            }
        }
        case 'button_carre' : {
            return {
                ...state,
                typeChoice: 2,
                showTypeChoice: false
            }
        }
        case 'button_cash' : {
            return {
                ...state,
                typeChoice: 3,
                showTypeChoice: false
            }
        }
        case 'verify_response' : {
            return {
                ...state,
                active: action.item,
                showNext: true,
                itemSelected: action.item !== null ? action.item : state.itemSelected,
                responseSelected: action.item !== null ? action.innerText : state.inputValue
            }
        }
        case 'response_cash_input' : {
            return {
                ...state,
                isEmpty: action.value === "",
                inputValue: action.value !== "" ? action.value : state.inputValue
            }
        }
    }
}