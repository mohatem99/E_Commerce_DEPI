import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import NotFound from "./Components/NotFound/NotFound";
import { ContextProvioder } from "./Components/Context/Context";
import ProductDetail from "./Components/Products/ProductDetail";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "products", element: <Products /> },
        { path: ":id", element: <ProductDetail /> },
        { path: "dashboard", element: <Dashboard /> },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <ContextProvioder>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvioder>
    </>
  );
}

export default App;
