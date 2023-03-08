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
      .min(10, "le mot de passe doit faire minimum 10 caractères")
      .max(20, "le mot de passe doit faire maximum 20 caractères")
      .required("Veuillez remplir ce champ"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref.password, null], "le password ne correspond pas ")
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
  return (
    <div className={`${styles.signUp} flex items-center justify-center`}>
      <div className={`flex flex-col items-center justify-center w-full`}>
        <h2 className="text-slate-50">Inscription</h2>
        <div className="w-full max-w-md">
          <form className="w-full max-w-md">
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Pseudo"
                className="input input-bordered input-primary w-full my-2 "
              />
            </div>
            <div className="w-full max-w-md">
              <input
                type="password"
                placeholder="Mot de passe"
                className="input input-bordered input-primary w-full my-2 "
              />
            </div>
            <div className="w-full max-w-md">
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                className="input input-bordered input-primary w-full my-2 "
              />
            </div>
            <div className="btn btn-outline my-2">S'inscrire</div>
          </form>
        </div>
      </div>
    </div>
  );
}
