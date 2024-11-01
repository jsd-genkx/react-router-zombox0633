import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function Layout() {
  return (
    <div className=" relative w-full bg-black/50">
      <NavigationBar />
      <div className=" flex justify-center min-h-screen items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
