import { useForm } from "react-hook-form";
import { useState } from "react";
import ListQuestion from "./components/listQuestion/ListQuestion";
import Input from "./input/Input";
export default function FormPage() {
  const [questions, setQuestions] = useState([]);
  const [defaultResponse, setDefaultResponse] = useState("");
  const defaultValues = {
    id: crypto.randomUUID(),
    question: "",
    response: "",
    Input: [
      { indice_1: "" },
      { indice_2: "" },
      { indice_3: "" },
      { indice_4: "" },
    ],
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, submitCount },
  } = useForm(defaultValues);
  function handleChange(e) {
    e.stopPropagation();
    console.log(e.target.value);
    setDefaultResponse(e.target.value);
  }

  function submit(values) {
    setQuestions([...questions, { ...values, id: crypto.randomUUID() }]);
    reset();
    setDefaultResponse("");
  }
  console.log(questions);

  return (
    <div className="container mx-auto">
      <h2 className="mb-4 white">Création du questionnaire</h2>
      <div className="block max-w-xl rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-auto mt-6">
        <form onSubmit={handleSubmit(submit)}>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <textarea
              className="peer block min-h-[auto] w-full shadow-md rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="question"
              rows="3"
              placeholder="Question"
              {...register("question", { required: true })}
            ></textarea>
            <label
              htmlFor="question"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Question
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              onInput={(e) => handleChange(e)}
              type="text"
              className="peer block min-h-[auto] w-full shadow-md rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="response"
              placeholder="response"
              {...register("response", { required: true })}
            />
            <label htmlFor="response" className="">
              Réponse
            </label>
          </div>
          <div>
            <h3>Entrer les indices pour le carré</h3>
          </div>
          <div className="flex flex-wrap">
            <Input
              register={register}
              name={"indice_1"}
              options={{
                name: "Input[0]",
                options: { required: true, value: defaultResponse },
              }}
              value={defaultResponse}
            />
            <Input
              register={register}
              name={"indice_2"}
              options={{
                name: "Input[1]",
              }}
            />
            <Input
              register={register}
              name={"indice_3"}
              options={{
                name: "Input[2]",
              }}
            />
            <Input
              register={register}
              name={"indice_4"}
              options={{
                name: "Input[3]",
              }}
            />
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Ajouter la question
          </button>
        </form>
      </div>
      <ListQuestion questions={questions} />
    </div>
  );
}
