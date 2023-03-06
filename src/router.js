import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FormPage from "./Pages/formPage/FormPage";
import HomePage from "./Pages/homePage/HomePage";
import SignUp from "./Pages/signIn/SignUp";
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
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
