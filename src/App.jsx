import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/pages/pages/Home";
import Contact from "./components/pages/pages/Contact";
import Article from "./components/pages/pages/Article";
import List from "./components/pages/pages/List";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home />, path: "/home" },
        {
          path: "/",
          element: <Home />,
        },
        { path: "/list", element: <List /> },
        {
          path: "/article",
          element: <Article />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
