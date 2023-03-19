export function reducerFormQuestion(state, action) {
  switch (action.type) {
    //QUESTIONNAIRE--------------ACTION--------------------
    case "ADD_QUEST": {
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            ...action.quest,
            id: crypto.randomUUID(),
            square: action.quest.square.map((s, i) =>
              i === 0 ? (action.quest.square[i] = action.defaultResponse) : s
            ),
            duo: action.quest.duo.map((s, i) =>
              i === 0 ? (action.quest.duo[i] = action.defaultResponse) : s
            ),
          },
        ],
        counter: state.counter++,
        defaultResponse: (state.defaultResponse = ""),
      };
    }
    case "DELETE_QUEST": {
      return {
        ...state,
        questions: state.questions.filter((q) => q.id !== action.question.id),
        counter: state.counter--,
      };
    }
    case "CLEAN_QUEST": {
      action.reset();
      return {
        ...state,
        questions: [],
        counter: 0,
      };
    }
    //---------------------DEFAULT_RESPONSE--------------------------------
    case "SET_DEFAULT_RESPONSE": {
      action.event.stopPropagation();
      return {
        ...state,
        defaultResponse: action.event.target.value,
      };
    }
    default: {
      throw new Error("aucun des choix n'est connus");
    }
  }
}
