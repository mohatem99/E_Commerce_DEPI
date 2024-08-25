import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import ProductDetails from "./Components/Products/ProductDetails";
import CheckOut from "./Pages/CheckOut";
import Login from "./Components/Login/Login";
import AdminLayout from "./Components/Layout/AdminLayout";
import Dashboard from "./Components/Dashboard/Dashboard";

import ProductDetailsDashboard from "./Components/Dashboard/ProductDetailsDashboard";
import AddProduct from "./Components/Dashboard/AddProduct";
import EditProduct from "./Components/Dashboard/EditProduct";
import ProductDashboard from "./Components/Dashboard/ProductDashboard";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: ":id", element: <ProductDetails /> },
      { path: "check-out", element: <CheckOut /> },
      { path: "login", element: <Login /> },
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
      { path: "products/add", element: <AddProduct /> },
      { path: "products/:id", element: <ProductDetailsDashboard /> },
      { path: "edit/:id", element: <EditProduct /> },
    ],
  },
]);
function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>{" "}
    </CartProvider>
  );
}

export default App;
