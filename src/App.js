import "./assets/styles/App.scss";
import "./assets/styles/index.css";

import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
