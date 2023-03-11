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
    .max(40, "veuillez mettre au maximum 40 caractères"),
});
