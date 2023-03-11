import styles from "./formPage.module.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schemaForm/schemaForm";
import { useState, useReducer } from "react";
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
    square: [
      { indice_1: "" },
      { indice_2: "" },
      { indice_3: "" },
      { indice_4: "" },
    ],
    duo: [{ indice_1: "" }, { indice_2: "" }],
  };
  const { register, handleSubmit, reset } = useForm({
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
              {counter}/15
            </span>
            <div className="relative mb-2" data-te-input-wrapper-init>
              <textarea
                className="input input-bordered w-full max-w"
                id="question"
                rows="3"
                placeholder="Entrer votre question"
                {...register("question", { required: true })}
              ></textarea>
            </div>

            <div className="relative mb-2" data-te-input-wrapper-init>
              <input
                onInput={(e) => handleChange(e)}
                type="text"
                className="input input-bordered w-full max-w"
                id="response"
                placeholder="response"
                {...register("response", { required: true })}
              />
            </div>
            <div className="my-2">
              <h3>Entrer les indices pour le carré</h3>
            </div>
            <div className="flex flex-wrap">
              <Input
                register={register}
                name={"indice_1"}
                options={{
                  name: "square[0]",
                  options: { disabled: true },
                }}
                defaultResponse={defaultResponse}
              />
              <Input
                register={register}
                name={"indice_2"}
                options={{
                  name: "square[1]",
                }}
              />
              <Input
                register={register}
                name={"indice_3"}
                options={{
                  name: "square[2]",
                }}
              />
              <Input
                register={register}
                name={"indice_4"}
                options={{
                  name: "square[3]",
                }}
              />
            </div>
            <div className="my-2">
              <h3>Indice du DUO</h3>
            </div>
            <div className="flex flex-wrap">
              <Input
                register={register}
                name={"duo_1"}
                options={{
                  name: "duo[0]",
                  options: { disabled: true },
                }}
                defaultResponse={defaultResponse}
              />
              <Input
                register={register}
                name={"duo_2"}
                options={{
                  name: "duo[1]",
                }}
              />
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
