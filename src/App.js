import "./assets/styles/App.scss";
import "./assets/styles/index.css";

import Header from "./components/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
