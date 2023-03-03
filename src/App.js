import "./assets/styles/App.scss";
import "./assets/styles/index.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
