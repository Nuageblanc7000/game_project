import { useForm } from "react-hook-form";
import styles from "./signUp.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SignUp() {
  const schema = yup.object({
    pseudo: yup
      .string()
      .min(5, "le pseudo doit faire minimum 5 caractères")
      .max(80, "le pseudo doit faire maximum 80 caractères")
      .required("Veuillez remplir ce champ"),
    password: yup
      .string()
      .min(5, "le mot de passe doit faire minimum 5 caractères")
      .max(200, "le mot de passe doit faire maximum 200 caractères")
      .required("Veuillez remplir ce champ"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "les mot de passes ne sont pas identiques"
      )
      .required("Veuillez remplir ce champ"),
  });
  const initialValues = {
    pseudo: "",
    password: "",
    confirmPassword: "",
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ initialValues, resolver: yupResolver(schema) });
  function submit(value) {}
  return (
    <div className={`${styles.signUp} flex items-center justify-center`}>
      <div className={`flex flex-col items-center justify-center w-full `}>
        <h2 className="text-slate-50">Inscription</h2>
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(submit)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-md"
          >
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Pseudo"
                className="input input-bordered input-primary w-full my-2 "
                {...register("pseudo")}
              />
              <div>
                {errors?.pseudo ? (
                  <p className="text-red-600">{errors.pseudo.message}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full max-w-md">
              <input
                type="password"
                placeholder="Mot de passe"
                className="input input-bordered input-primary w-full my-2 "
                {...register("password")}
              />
              <div>
                {errors?.password ? (
                  <p className="text-red-600"> {errors.password.message} </p>
                ) : null}
              </div>
            </div>
            <div className="w-full max-w-md">
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                className="input input-bordered input-primary w-full my-2 "
                {...register("confirmPassword")}
              />
              <div>
                {errors?.confirmPassword ? (
                  <p className="text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                ) : null}
              </div>
            </div>
            <button className="btn btn-outline btn-primary my-2 w-full max-w-md">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
