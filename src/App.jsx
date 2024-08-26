import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import ProductDetails from "./Components/Products/ProductDetails";
import CheckOut from "./Pages/CheckOut";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: ":id", element: <ProductDetails /> },
      { path: "check-out", element: <CheckOut /> },
    ],
  },
]);
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <CompareProvider>
            <RouterProvider router={router} />
          </CompareProvider>
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
