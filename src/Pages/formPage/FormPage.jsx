import styles from "./formPage.module.scss";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schemaForm/schemaForm";
import { useState, useReducer, Fragment } from "react";
import { reducerFormQuestion } from "./reducer/reducerFormQuestion";
import ListQuestion from "./components/listQuestion/ListQuestion";
import Input from "./input/Input";
import { createQuizz } from "../../apis/createQuizz";
export default function FormPage() {
  const [state, dispatch] = useReducer(reducerFormQuestion, {
    questions: [],
  });
  const [counter, setCounter] = useState(0);
  const [defaultResponse, setDefaultResponse] = useState("");
  const validCounter = 2;

  const initialValues = {
    id: crypto.randomUUID(),
    question: "",
    response: "",
    arr: { indice: "roger" },
    square: [{ indice: "" }, { indice: "" }, { indice: "" }, { indice: "" }],
    duo: [{ indice: "" }, { indice: "" }],
  };
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
    e.stopPropagation();
    setDefaultResponse(e.target.value);
  }
  function submit(quest) {
    setCounter((c) => c + 1);
    dispatch({
      type: "ADD_QUEST",
      quest,
      defaultResponse,
    });
    reset();
    setDefaultResponse("");
  }
  function handleDelete(question) {
    setCounter((c) => c - 1);
    dispatch({
      type: "DELETE_QUEST",
      question,
    });
  }
  async function handleAddApiQuestions() {
    if (state.questions.length >= validCounter) {
      const response = await createQuizz(state.questions);

      reset();
      setCounter(0);
      dispatch({
        type: "CLEAN_QUEST",
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
              {counter}/7
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
                    defaultResponse={defaultResponse}
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
                    defaultResponse={defaultResponse}
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
