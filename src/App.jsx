import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/LAyout";
import Home from "./Pages/Home";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
