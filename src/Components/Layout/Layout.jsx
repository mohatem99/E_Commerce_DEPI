import { Outlet } from "react-router-dom";
import { Button } from "flowbite-react";
import Navbar from "../Navbar/Navbar";
function Layout() {
  return (
    <div>
      <Navbar />
      {/* Routing */}
      <div className="container mx-auto w-3/4 p-5 my-5 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
