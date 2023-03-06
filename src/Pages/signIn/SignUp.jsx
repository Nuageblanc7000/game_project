import styles from "./signUp.module.scss";
export default function SignUp() {
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
