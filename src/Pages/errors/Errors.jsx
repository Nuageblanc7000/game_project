import styles from "./errors.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate, NavLink } from "react-router-dom";
import error from "../../assets/images/404.svg";
import { useRouteError } from "react-router-dom";

export default function Errors() {
  const errors = useRouteError();
  const navigate = useNavigate();
  //voir si on fait un reload après 5sec
  function handleLoad() {
    const reload = setTimeout(() => {
      console.log("redirection sur la page d'avant");
      navigate("..");
      clearTimeout(reload);
    }, 5000);
  }
  return (
    <>
      <Header />
      <section className={` ${styles.errorPage}`}>
        <h2 className=" text-4xl text-center my-4 drop-shadow-xl">
          Oops une erreur {errors.status}
        </h2>
        <picture className={` ${styles.picture} `}>
          <img src={error} alt="erreur sur la page" />
        </picture>
        <NavLink to={"/"} className={` btn btn-primary my-4 `}>
          Retour vers la page d'accueil
        </NavLink>
      </section>
      <Footer />
    </>
  );
}
