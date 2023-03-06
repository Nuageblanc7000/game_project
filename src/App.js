import "./assets/styles/App.scss";
import "./assets/styles/index.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* mettre le header et footer autour de APP */}
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
