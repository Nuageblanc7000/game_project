export function reducerFormQuestion(state, action) {
  switch (action.type) {
    case "ADD_QUEST": {
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            ...action.quest,
            id: crypto.randomUUID(),
            square: (action.quest[0] = action.defaultResponse),
            duo: (action.quest[0] = action.defaultResponse),
          },
        ],
      };
    }
    case "DELETE_QUEST": {
      return {
        ...state,
        questions: state.questions.filter((q) => q.id !== action.question.id),
      };
    }
    case "CLEAN_QUEST": {
      return {
        ...state,
        questions: [],
      };
    }
    default: {
      throw new Error("aucun des choix n'est connus");
    }
  }
}
