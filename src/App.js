import "./assets/styles/App.scss";
import "./assets/styles/index.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
