import styles from "./formPage.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, initialValues } from "./schemaForm/schemaForm";
import { useReducer } from "react";
import { reducerFormQuestion } from "./reducer/reducerFormQuestion";
import ListQuestion from "./components/listQuestion/ListQuestion";
import Input from "./input/Input";
import { createQuizz } from "../../apis";
export default function FormPage() {
  const validCounter = 2;
  const [state, dispatch] = useReducer(reducerFormQuestion, {
    questions: [],
    defaultResponse: "",
    counter: 0,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    initialValues,
    resolver: yupResolver(schema),
  });

  function handleChange(e) {
    dispatch({
      type: "SET_DEFAULT_RESPONSE",
      event: e,
    });
  }
  function submit(quest) {
    dispatch({
      type: "ADD_QUEST",
      quest,
      defaultResponse: state.defaultResponse,
    });
    reset();
  }
  function handleDelete(question) {
    dispatch({
      type: "DELETE_QUEST",
      question,
    });
  }
  async function handleAddApiQuestions() {
    if (state.questions.length >= validCounter) {
      const response = await createQuizz(state.questions);
      dispatch({
        type: "CLEAN_QUEST",
        reset,
      });
    }
  }
  return (
    <div className={`${styles.backgroundQuestion}`}>
      <div className="container mx-auto py-4">
        <div className="block max-w-xl rounded-lg  bg-gray-100 p-6 shadow-lg dark:bg-neutral-700 mx-auto mt-6">
          <h2 className={`${styles.hs2}`}>Création du questionnaire</h2>
          <form onSubmit={handleSubmit(submit)}>
            <span className={` ${styles.counter} text-4xl drop-shadow-xl`}>
              {state.counter}/7
            </span>
            <div
              className="relative mb-2 flex flex-col"
              data-te-input-wrapper-init
            >
              <textarea
                className="input input-bordered w-full max-w"
                id="question"
                rows="3"
                placeholder="Entrer votre question"
                {...register("question", { required: true })}
              ></textarea>
              <div className="text-error text-sm">
                {errors?.question && errors.question.message}
              </div>
            </div>

            <div
              className="relative mb-2 flex flex-col"
              data-te-input-wrapper-init
            >
              <input
                onInput={(e) => handleChange(e)}
                type="text"
                className="input input-bordered w-full max-w"
                id="response"
                placeholder="response"
                {...register("response", { required: true })}
              />
              <div className="text-error text-sm">
                {errors?.response && errors.response.message}
              </div>
            </div>
            <div className="my-2">
              <h3>Entrer les indices pour le carré</h3>
            </div>

            <div className="flex flex-wrap">
              {initialValues.square.map((p, index) =>
                index === 0 ? (
                  <Input
                    key={index}
                    register={register}
                    name={`reponse_auto`}
                    options={{
                      name: `square[${index}]`,
                      options: { disabled: true },
                    }}
                    defaultResponse={state.defaultResponse}
                  />
                ) : (
                  <Input
                    key={index}
                    register={register}
                    name={`indice_${index}`}
                    options={{
                      name: `square[${index}].indice`,
                    }}
                    errors={
                      errors.square?.length &&
                      errors.square[index]?.indice &&
                      errors.square[index].indice.message
                    }
                  />
                )
              )}
            </div>

            <div className="my-2">
              <h3>Indice du DUO</h3>
            </div>
            <div className="flex flex-wrap mb-2">
              {initialValues.duo.map((p, index) =>
                index === 0 ? (
                  <Input
                    key={index}
                    register={register}
                    name={`reponse_auto`}
                    options={{
                      name: `duo[${index}]`,
                      options: { disabled: true },
                    }}
                    defaultResponse={state.defaultResponse}
                  />
                ) : (
                  <Input
                    key={index}
                    register={register}
                    name={`indice_${index}`}
                    options={{
                      name: `duo[${index}].indice`,
                    }}
                    errors={
                      errors.duo?.length &&
                      errors.duo[index]?.indice &&
                      errors.duo[index].indice.message
                    }
                  />
                )
              )}
            </div>

            <div className=" flex-wrap flex justify-center gap-5	">
              <button
                disabled={state.questions.length >= 2 ? true : false}
                className="btn btn-outline btn-primary flex-grow max-w-s m-auto"
              >
                Ajouter la question
              </button>
              <button
                className="flex-grow  m-auto btn btn-secondary"
                onClick={handleAddApiQuestions}
                disabled={state.questions.length < validCounter}
              >
                Créer le questionnaire
              </button>
            </div>
          </form>
        </div>
        <ListQuestion questions={state.questions} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
