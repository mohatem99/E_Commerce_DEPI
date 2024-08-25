import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import NotFound from "./Components/NotFound/NotFound";
import { ContextProvioder } from "./Components/Context/Context";
import ProductDetail from "./Components/Products/ProductDetail";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProductDashboard from "./Components/Dashboard/ProductDashboard";
import AdminLayout from "./Components/Layout/AdminLayout";
import ProductDetails from "./Components/Dashboard/ProductDetails";
import EditProduct from "./Components/Dashboard/EditProduct";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductDetail /> },

        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "admin-dashboard",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        { path: "products", element: <ProductDashboard /> },
        { path: "products/:id", element: <ProductDetails /> },
        { path: "edit/:id", element: <EditProduct /> },
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
