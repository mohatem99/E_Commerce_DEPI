import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/LAyout";
import Home from "./Pages/Home";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import ProductDetails from "./Components/Products/ProductDetails";
import CheckOut from "./Pages/CheckOut";
import CompareProductsPage from "./Pages/CompareProductsPage";
import { CompareProvider } from "./Context/CompareContext";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: ":id", element: <ProductDetails /> },
      { path: "check-out", element: <CheckOut /> },
      { path: "compare", element: <CompareProductsPage /> },
    ],
  },
]);
function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <CompareProvider>
          <RouterProvider router={router} />
        </CompareProvider>
      </ProductsProvider>{" "}
    </CartProvider>
  );
}

export default App;
