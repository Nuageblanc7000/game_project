import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TeamPage from "./Pages/teamPage/TeamPage";
import FormPage from "./Pages/formPage/FormPage";
import HomePage from "./Pages/homePage/HomePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <FormPage />,
      },
      {
        path: "/team/:team",
        element: <TeamPage />,
      },
    ],
  },
]);
