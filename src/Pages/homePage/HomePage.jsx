import styles from "./homePage.module.scss";
import sciences from "../../assets/images/sciences.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import { useFetchCategories } from "../../hooks/useFetchCategories";
export default function HomePage() {
  const [categories, setCategories] = useFetchCategories();
  const [value, setValue] = useState("");
  return (
    <>
      <div className={styles.hero}>
        <div className={` ${styles.heroBack}  hero min-h-full`}>
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content z-10">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-white font-bold">
                Hello there
              </h1>
              <p className="mb-5 text-white shadow-xs text-1xl font-bold  px-4">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.containerCategories} container mx-auto`}>
        <SearchBar setValue={setValue}></SearchBar>
        <div className={`${styles.gridCard}`}>
          {categories.length ? (
            categories
              .filter((p) => p.name.toLowerCase().includes(value) && p)
              .map((p) => (
                <div
                  key={p._id}
                  className={` ${styles.animCat} flex   card bg-base-100  relative rounded-box relative   drop-shadow-lg place-items-center `}
                >
                  <div className="flex h-full relative">
                    <div className=" place-items-center p-4">
                      <div className="my-4 ">
                        <h2 className="font-bold text-xl my-4">
                          Categories {p.name}
                        </h2>
                        <p>{p.description}</p>
                      </div>
                      <Link
                        className="btn btn-primary"
                        to={`/categorie/${p._id}`}
                      >
                        Découvrir
                      </Link>
                    </div>
                    <div className={`${styles.space}`}>
                      <div
                        className={`${styles.imgCard}  `}
                        style={{ background: `url(${sciences})` }}
                      >
                        <Link
                          className="btn btn-primary"
                          to={`/categorie/${p._id}`}
                        >
                          Découvrir
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div> Aucune Catégories </div>
          )}
        </div>
      </div>
      <div className={`${styles.banner}`}></div>
      <div className={`${styles.banner2}`}></div>
    </>
  );
}
