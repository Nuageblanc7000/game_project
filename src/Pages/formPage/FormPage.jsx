import styles from "./formPage.module.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ListQuestion from "./components/listQuestion/ListQuestion";
import Input from "./input/Input";
export default function FormPage() {
  const [questions, setQuestions] = useState([]);
  const [defaultResponse, setDefaultResponse] = useState("");
  const schemaCreateQuest = yup.object({
    question: yup.string().required().max(250),
    response: yup.string().required().max(40),
  });
  const initialValues = {
    id: crypto.randomUUID(),
    question: "",
    response: "",
    square: [
      { indice_1: defaultResponse },
      { indice_2: "" },
      { indice_3: "" },
      { indice_4: "" },
    ],
    duo: [{ indice_1: defaultResponse }, { indice_2: "" }],
  };
  const { register, handleSubmit, reset, formState } = useForm({
    initialValues,
    resolver: yupResolver(schemaCreateQuest),
  });

  function handleChange(e) {
    e.stopPropagation();
    setDefaultResponse(e.target.value);
  }

  function submit(values) {
    setQuestions([...questions, { ...values, id: crypto.randomUUID() }]);
    reset();
    setDefaultResponse("");
  }
  function handleDelete(question) {
    setQuestions(questions.filter((q) => q.id !== question.id));
  }
  return (
    <div className={`${styles.backgroundQuestion} container mx-auto`}>
      <h2 className={`${styles.hs2}`}>Création du questionnaire</h2>
      <div className="block max-w-xl rounded-lg  p-6 shadow-lg dark:bg-neutral-700 mx-auto mt-6">
        <form onSubmit={handleSubmit(submit)}>
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
                options: { value: defaultResponse, disabled: true },
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
                options: { value: defaultResponse, disabled: true },
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
          <div className="flex justify-center	">
            <button
              disabled={questions.length >= 2 ? true : false}
              className="btn btn-outline btn-primary w-full max-w-xs m-auto"
            >
              Ajouter la question
            </button>
          </div>
        </form>
      </div>
      <ListQuestion questions={questions} handleDelete={handleDelete} />
    </div>
  );
}
