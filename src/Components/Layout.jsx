import { Outlet } from "react-router-dom";
import { Button } from "flowbite-react";
function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
