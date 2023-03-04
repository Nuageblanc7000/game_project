import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FormPage from "./Pages/formPage/FormPage";
import HomePage from "./Pages/homePage/HomePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/create",
    element: <FormPage />,
  },
]);
