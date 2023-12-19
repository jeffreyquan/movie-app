import { Routes } from "constants/routes";
import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "components/layout";
import Home from "screens/home";
import { SearchResults } from "screens/search-results";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Routes.ROOT,
        element: <Navigate replace to={Routes.HOME} />,
      },
      {
        path: Routes.HOME,
        element: <Home />,
      },
      {
        path: Routes.SEARCH,
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
