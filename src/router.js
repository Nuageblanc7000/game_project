import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TeamPage from "./Pages/teamPage/TeamPage";
import FormPage from "./Pages/formPage/FormPage";
import HomePage from "./Pages/homePage/HomePage";
import SignUp from "./Pages/signIn/SignUp";
import Errors from "./Pages/errors/Errors";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errors />,
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
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
