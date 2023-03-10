import styles from "./homePage.module.scss";
import signUpBack from "../../assets/images/signUp.svg";
import sciences from "../../assets/images/sciences.svg";
import nature from "../../assets/images/nature.svg";
import politic from "../../assets/images/politic.svg";
import geography from "../../assets/images/geography.svg";
export default function HomePage() {
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

      <div className="container mx-auto">
        <div className={`${styles.gridCard}`}>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">
                    Categories JeuxVidéo
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${signUpBack})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">Categories Nature</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${nature})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">
                    Categories Politique
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${politic})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">
                    Categories Géographie
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${geography})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">
                    Categories Sciences
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${sciences})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">
                    Categories JeuxVidéo
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${signUpBack})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">
                    Categories JeuxVidéo
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${signUpBack})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className=" place-items-center p-4">
                <div className="my-4 ">
                  <h2 className="font-bold text-xl my-4">
                    Categories JeuxVidéo
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div
                  className={`${styles.imgCard}  `}
                  style={{ background: `url(${signUpBack})` }}
                >
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.banner}`}></div>
      <div className={`${styles.banner2}`}></div>
    </>
  );
}
