import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TeamPage from "./Pages/teamPage/TeamPage";
import FormPage from "./Pages/formPage/FormPage";
import HomePage from "./Pages/homePage/HomePage";
import SignUp from "./Pages/signIn/SignUp";
import Errors from "./Pages/errors/Errors";
import { homePageLoader } from "./loaders/homePageLoader";
import CategoriePage from "./Pages/categoriePage/CategoriePage";
import { categoriePageLoader } from "./loaders/categoriePageLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader,
      },
      {
        path: "/categorie/:id",
        element: <CategoriePage />,
        loader: categoriePageLoader,
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
