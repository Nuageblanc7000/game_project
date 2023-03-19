import * as yup from "yup";
export const schema = yup.object({
  question: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(20, "veuillez mettre au minimum 20 caractères")
    .max(250, "veuillez mettre au maximum 250 caractères"),
  response: yup
    .string()
    .required("Ce champ est obligatoire")
    .max(20, "veuillez mettre au maximum 20 caractères"),
  square: yup.array().of(
    yup.object({
      indice: yup.string().min(1, "minimum 4 caractères"),
    })
  ),
  duo: yup.array().of(
    yup.object({
      indice: yup.string().min(1, "minimum 4 caractères"),
    })
  ),
});

export const initialValues = {
  id: crypto.randomUUID(),
  question: "",
  response: "",
  arr: { indice: "roger" },
  square: [{ indice: "" }, { indice: "" }, { indice: "" }, { indice: "" }],
  duo: [{ indice: "" }, { indice: "" }],
};
