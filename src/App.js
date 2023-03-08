import "./assets/styles/App.scss";
import "./assets/styles/index.css";

import Header from "./components/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="App"></div>
      <Outlet />
    </>
  );
}

export default App;
