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
            square: action.quest.square.map((s, i) =>
              i === 0 ? (action.quest.square[i] = action.defaultResponse) : s
            ),
            duo: action.quest.duo.map((s, i) =>
              i === 0 ? (action.quest.duo[i] = action.defaultResponse) : s
            ),
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
