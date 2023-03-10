import styles from "./homePage.module.scss";
import signUpBack from "../../assets/images/signupBack.jpg";
import neural from "../../assets/images/neural.png";
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
              <p className="mb-5 text-white shadow-xs text-1xl font-bold ">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:flex px-2 sm:px-0 flex-col my-2">
        <div className="flex flex-col w-full lg:flex-row my-4 gap-4">
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className="p-4 place-items-center ">
                <div className="my-4">
                  <h2 className="font-bold text-xl my-4">Categories game</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div className={`${styles.imgCard}  `}>
                  <button className="btn btn-primary">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   card bg-base-100  relative rounded-box relative min-h-60  drop-shadow-lg place-items-center ">
            <div className="flex h-full relative">
              <div className="p-4 place-items-center ">
                <div className="my-4">
                  <h2 className="font-bold text-xl my-4">Categories game</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda culpa, reiciendis porro voluptatibus eligendi
                  </p>
                </div>
                <button className="btn btn-primary">En savoir plus</button>
              </div>
              <div className={`${styles.space}`}>
                <div className={`${styles.imgCard}  `}>
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
